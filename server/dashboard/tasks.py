from __future__ import absolute_import, unicode_literals

from django.db.models import Q
from django.core.mail import send_mail, get_connection, EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.conf import settings
from django.core.cache import cache
from django.db import transaction

from config.celery import app

from student.models import Student, Group, Defaulter, Batch
from user.models import User
from preference.models import Hostel, RoomType

from datetime import datetime
import os, string, json
from openpyxl import load_workbook
from random import choice


@app.task(name = "send_reminder_mail")
def send_reminder_mail(name, email):
      subject = "Hi " + name +", Reminder for filling Hostel Preferences"
      
      idx = cache.get('emailIdIndex', 0)
      cache.set('emailIdIndex', (idx + 1) % settings.EMAIL_HOST_USERS_COUNT)
      
      connection = get_connection(username=settings.EMAIL_HOST_USERS[idx], password=settings.EMAIL_HOST_PASSWORDS[idx], fail_silently=False)
      connection.open()
      context = {
            "name" : name
      }
      html_message = render_to_string('dashboard/remindermail.html', context)
      msg = strip_tags(html_message)
      email = EmailMultiAlternatives(subject, msg, settings.EMAIL_HOST_USERS[idx], [email], reply_to = ['queries_studentaffairs@thapar.edu'], connection=connection)
      email.attach_alternative(html_message, "text/html")
      email.send()
      
      # send_mail(subject, msg, settings.EMAIL_HOST_USERS[idx], (email, ), html_message=html_message, connection=connection, fail_silently=False)
      connection.close()
      
      return f"\nReminder mail sent to {email}\n"


@app.task(name = "send_start_allocation_mail")
def send_start_allocation_mail(name,email, slug):
      subject = f"Hi {name}, Hostel Preference Filling Process has Started"
      
      idx = cache.get('emailIdIndex', 0)
      cache.set('emailIdIndex', (idx + 1) % settings.EMAIL_HOST_USERS_COUNT)
      
      connection = get_connection(username=settings.EMAIL_HOST_USERS[idx], password=settings.EMAIL_HOST_PASSWORDS[idx], fail_silently=False)
      connection.open()
      context = {
            "name" : name,
            "url": "https://allotment.onlinehostel.in/auth/forgot-password/" + slug,
      }
      html_message = render_to_string('dashboard/startallocationmail.html', context)
      msg = strip_tags(html_message)
      email = EmailMultiAlternatives(subject, msg, settings.EMAIL_HOST_USERS[idx], [email], reply_to = ['queries_studentaffairs@thapar.edu'], connection=connection)
      email.attach_alternative(html_message, "text/html")
      email.send()
      # send_mail(subject, msg, settings.EMAIL_HOST_USERS[idx], (email, ), html_message=html_message, connection=connection, fail_silently=False)
      connection.close()
      
      return f"\nStart allocation mail sent to {email}\n"


studentfileformat = ('rollno', 'email', 'name', 'phoneno', 'cg', 'batch', 'gender', 'current_hostel', 'current_room_type', 'alloted_hostel', 'alloted_room_type')

@app.task(name='import_students', queue='hms-admin-task')
def import_students(filename):
      start_time = datetime.now()

      path = os.path.join(settings.BASE_DIR, 'imported-data', 'student', filename)
      wb = load_workbook(path, data_only=True)
      ws = wb.active

      log_file_path = os.path.join(settings.LOGS_ROOT, 'import_students.log')
      with open(log_file_path, 'a') as f:
            f.write(f"\nProcessing file {filename} at {start_time}...\n")

      # Check if all fields are present in given data
      for row in ws.iter_rows(min_row=1, max_row=1, min_col=1, max_col=11):
            for i in range(len(row)):
                  if row[i].value!=studentfileformat[i]:
                        with open(log_file_path, 'a') as f:
                              f.write(f"Invalid File Format. Found {row[i].value}, but required was {studentfileformat[i]}\n")
                              f.write(f"Correct File Format is {str(studentfileformat)}\n")
                              f.write("Aborting...\n\n")
                              f.write("\n")
                        raise Exception(f"Found {row[i]}, but required was {studentfileformat[i]}\n")

      successCnt = 0
      failureCnt = 0
      cnt = 1
      errors = []

      for row in ws.iter_rows(min_row=2, min_col=1, max_col=11):
            try:
                  with transaction.atomic():
                        student = None
                        
                        # Extract data into variables and data preprocessing
                        phoneno = row[3].value

                        cg = row[4].value
                        if cg is not None:
                              cg = round(float(cg), 2)

                        batch = row[5].value
                        if batch is not None:
                              batch = batch.strip()
                              batch = Batch.objects.filter(name__iexact = batch).first()
                              if batch is None:
                                    batch = Batch(name = row[5].value.strip())
                                    batch.save()
                        
                        rollno = row[0].value
                        if rollno is not None:
                              student = Student.objects.filter(rollno=rollno).first()

                        email = row[1].value
                        if email is not None:
                              email = email.strip()
                              if student is not None:
                                    user = student.user
                                    user.email = email
                                    user.save()
                              else:
                                    user = User.objects.filter(email=email).first()
                                    if user is None:
                                          user = User(email=email)
                                          password = ''.join(choice(string.ascii_letters + string.digits + '!@#$%^&*()[]{};:?.,<>_') for _ in range(8))
                                          user.set_password(password)
                                          user.save()
                                    try:
                                          if user.student is not None:
                                                student = user.student
                                    except:
                                          pass
                        
                        # current_room_type
                        current_room = row[8].value
                        is_current_room_null = False
                        if current_room is not None:
                              current_room = current_room.strip()
                              if current_room=='':
                                    # check if admin wants to make current room related field null
                                    is_current_room_null = True
                                    current_room = None
                        else:
                              is_current_room_null = True
                        
                        current_roomtype = None
                        current_hostel = row[7].value
                        if current_hostel is not None:
                              if is_current_room_null:
                                    current_hostel = None
                              else:
                                    current_hostel = current_hostel.strip()
                                    current_hostel = Hostel.objects.filter(name__iexact=current_hostel).first()
                                    if current_hostel is None:
                                          raise Exception(f'Current Hostel {current_hostel} not found!')
                                    current_roomtype = RoomType.objects.filter(Q(name__iexact=current_room) & Q(hostel = current_hostel)).first()
                                    if current_roomtype is None:
                                          raise Exception(f'Current Room Type {current_room} not found for Hostel {current_hostel}!')
                        
                        # alloted_room_type
                        alloted_room = row[10].value
                        is_alloted_room_null = False
                        if alloted_room is not None:
                              alloted_room = alloted_room.strip()
                              if alloted_room=='':
                                    # check if admin wants to make allocated room related details null
                                    is_alloted_room_null = True
                                    alloted_room = None
                        else:
                              is_alloted_room_null = True
                              
                        alloted_roomtype = None 
                        alloted_hostel = row[9].value
                        if alloted_hostel is not None:
                              if is_alloted_room_null:
                                    alloted_hostel = None
                              else:
                                    alloted_hostel = alloted_hostel.strip()
                                    alloted_hostel = Hostel.objects.filter(name__iexact=alloted_hostel).first()
                                    if alloted_hostel is None:
                                          raise Exception(f'Alloted Hostel {alloted_hostel} not found!')
                                    alloted_roomtype = RoomType.objects.filter(Q(name__iexact=alloted_room) & Q(hostel = alloted_hostel)).first()
                                    if alloted_roomtype is None:
                                          raise Exception(f'Alloted Room Type {alloted_room} not found!')

                        name = row[2].value
                        if (name is not None):
                              name = name.strip()

                        gender = row[6].value
                        if gender is not None:
                              gender = gender.strip()

                        if student is None:
                              # create new student
                              student = Student(
                                    name = name, 
                                    rollno = rollno, 
                                    phoneno = phoneno, 
                                    gender = gender, 
                                    cg = cg, 
                                    batch = batch, 
                                    user = user,
                                    current_room = current_roomtype,
                                    alloted_room = alloted_roomtype
                                    )
                              student.save()

                              group = Group(leader = student, cg = student.cg)
                              group.save()
                        else:
                              # update details of existing student
                              if name is not None:
                                    student.name = name
                              if rollno is not None:
                                    student.rollno = rollno
                              if phoneno is not None:
                                    student.phoneno = phoneno
                              if gender is not None:
                                    student.gender = gender
                              if cg is not None:
                                    student.cg = cg
                              if batch is not None:
                                    student.batch = batch
                              if current_roomtype is not None:
                                    student.current_room = current_roomtype
                              if alloted_roomtype is not None:
                                    student.alloted_room = alloted_roomtype
                              student.save()

                              group = Group.objects.filter(leader=student).first()
                              if group is None:
                                    group = Group(leader=student, cg=student.cg)
                                    group.save()
                              else:
                                    # update group cg
                                    updatedcg = student.cg
                                    groupSize = 1
                                    for member in group.members.all():
                                          updatedcg += member.cg
                                          groupSize += 1
                                    updatedcg /= groupSize
                                    group.cg = round(updatedcg, 2)
                                    group.save()

                        successCnt += 1
            
            except Exception as e:
                  # log error
                  errors.append(f'Creation of item {cnt} unsuccessful! Error: {str(e)}')
                  failureCnt += 1

            cnt += 1
      
      res = {
            'successful': successCnt,
            'unsuccessful': failureCnt,
            'errors': errors
      }

      end_time = datetime.now()
      time_diff = (end_time - start_time).total_seconds() / 60

      with open(log_file_path, 'a') as f:
            f.write(f'Execution completed in {time_diff} minutes.\n')
            f.write(json.dumps(res, indent=2))
            f.write('\n')
      
      errors_str = '\n- '.join(errors)
      
      subject = f'Execution results ready for the task Import Students'
      msg = f"""File: {filename}

Task Start Time: {start_time}
Task End Time: {end_time}
Time Elapsed: {time_diff}

Number of entries successfully executed: {successCnt}
Number entries failed: {failureCnt}

Errors
- {'No Errors' if len(errors)==0 else errors_str}
"""

      idx = cache.get('emailIdIndex', 0)
      cache.set('emailIdIndex', (idx + 1) % settings.EMAIL_HOST_USERS_COUNT)
      
      connection = get_connection(username=settings.EMAIL_HOST_USERS[idx], password=settings.EMAIL_HOST_PASSWORDS[idx], fail_silently=False)
      connection.open()

      send_mail(subject, msg, settings.EMAIL_HOST_USERS[idx], (settings.ADMIN_EMAIL, settings.DEVELOPER_EMAIL), connection=connection, fail_silently=False)

      connection.close()

      return res


@app.task(name = "import_defaulters", queue='hms-admin-task')
def import_defaulters(filename):
      start_time = datetime.now()

      path = os.path.join(settings.BASE_DIR, 'imported-data', 'defaulter', filename)
      wb = load_workbook(path, data_only=True)
      ws = wb.active

      log_file_path = os.path.join(settings.LOGS_ROOT, 'import_defaulters.log')
      with open(log_file_path, 'a') as f:
            f.write(f"\nProcessing file {filename} at {start_time}...\n")

      # check if required fields are present in data
      if ws['A1'].value!='student':
            with open(log_file_path, 'a') as f:
                  f.write(f"Required 'student' as column name but found {ws['A1'].value} at cell A1.\n")
                  f.write("Aborting...\n\n")
            raise Exception(f"student field missing! Required 'student' as column value but found {ws['A1'].value} at cell A1.")
      
      cnt = 1
      successCnt = 0
      failureCnt = 0
      errors = []

      for row in ws.iter_rows(min_row=2, min_col=1, max_col=1):
            try:
                  with transaction.atomic():
                        student = Student.objects.filter(rollno=row[0].value).first()
                        if student is None:
                              raise Exception(f"Student with roll number {row[0].value} not found!")
                        instance = Defaulter.objects.filter(student=student).first()
                        if instance is None:
                              instance = Defaulter(student=student)
                              instance.save()
                        successCnt += 1
            except BaseException as e:
                  errors.append(f"Creation of item {cnt} unsuccessful. Error: {str(e)}")
                  failureCnt += 1
            cnt += 1
      
      res = {
            'successful': successCnt,
            'unsuccessful': failureCnt,
            'errors': errors
      }

      end_time = datetime.now()
      time_diff = (end_time - start_time).total_seconds() / 60

      with open(log_file_path, 'a') as f:
            f.write(f'Execution completed in {time_diff} minutes.')
            f.write(json.dumps(res, indent=2))
            f.write('\n')
      
      errors_str = '\n- '.join(errors)
      
      subject = f'Execution results ready for the task Import Defaulters'
      msg = f"""File: {filename}

Task Start Time: {start_time}
Task End Time: {end_time}
Time Elapsed: {time_diff}

Number of entries successfully executed: {successCnt}
Number entries failed: {failureCnt}

Errors
- {'No Errors' if len(errors)==0 else errors_str}
"""

      idx = cache.get('emailIdIndex', 0)
      cache.set('emailIdIndex', (idx + 1) % settings.EMAIL_HOST_USERS_COUNT)
      
      connection = get_connection(username=settings.EMAIL_HOST_USERS[idx], password=settings.EMAIL_HOST_PASSWORDS[idx], fail_silently=False)
      connection.open()

      send_mail(subject, msg, settings.EMAIL_HOST_USERS[idx], (settings.ADMIN_EMAIL, settings.DEVELOPER_EMAIL), connection=connection, fail_silently=False)

      connection.close()

      return res
