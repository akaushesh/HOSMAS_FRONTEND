from __future__ import absolute_import, unicode_literals

from django.db.models import Q
from django.core.mail import send_mail, get_connection
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.conf import settings
from django.core.cache import cache

from config.celery import app

from student.models import Group, Section, Defaulter, Student, Batch
from preference.models import *
from user.models import User

from random import choice
import string
import os
from openpyxl import load_workbook
from datetime import datetime


# studentfileformat = ('rollno', 'email', 'name', 'phoneno', 'cg', 'batch', 'gender', 'current_hostel', 'current_room_type', 'alloted_hostel', 'alloted_room_type')

# @app.task(name='add_users')
# def add_users(filename):
#       with open(os.path.join(settings.LOGS_ROOT, 'add_user_errors.log'), 'a') as f:
#             f.write(f"Processing file {filename} at {datetime.now()}...\n")

#       path = os.path.join(settings.BASE_DIR, 'imported-data', 'student', filename)
#       wb = load_workbook(path)
#       ws = wb.active

#       # Check if all fields are present in given data
#       for row in ws.iter_rows(min_row=1, max_row=1, min_col=1, max_col=11):
#             for i in range(len(row)):
#                   if row[i].value!=studentfileformat[i]:
#                         with open(os.path.join(settings.LOGS_ROOT, 'add_user_errors.log'), 'a') as f:
#                               f.write(f"Invalid File Format. Found {row[i].value}, but required was {studentfileformat[i]}\n")
#                               f.write(f"Correct File Format is {str(studentfileformat)}\n")
#                               f.write("\n")
#                         raise Exception(f"Found {row[i]}, but required was {studentfileformat[i]}\n")

#       successCnt = 0
#       failureCnt = 0
#       cnt = 1

#       for row in ws.iter_rows(min_row=2, min_col=1, max_col=11):
#             try:
#                   student = None
                  
#                   # Extract data into variables and data preprocessing
#                   phoneno = row[3].value

#                   cg = row[4].value
#                   if cg is not None:
#                         cg = round(float(cg), 2)

#                   batch = row[5].value
#                   if batch is not None:
#                         batch = batch.strip()
#                         batch = Batch.objects.filter(name = batch).first()
#                         if batch is None:
#                               batch = Batch(name = row['batch'].strip())
#                               batch.save()

#                   email = row[1].value
#                   if email is not None:
#                         email = email.strip()
#                         user = User.objects.filter(email=email).first()
#                         if user is None:
#                               user = User(email=email)
#                               password = ''.join(choice(string.ascii_letters + string.digits) for _ in range(8))
#                               user.set_password(password)
#                               user.save()
#                         try:
#                               if user.student is not None:
#                                     student = user.student
#                         except:
#                               pass

#                   rollno = row[0].value
#                   if rollno is not None:
#                         if student is None:
#                               student = Student.objects.filter(rollno=rollno).first()
                  
#                   # current_room_type
#                   current_room = row[8].value
#                   is_current_room_null = False
#                   if current_room is not None:
#                         current_room = current_room.strip()
#                         if current_room=='':
#                               # check if admin wants to make current room related field null
#                               is_current_room_null = True
#                               current_room = None
#                   else:
#                         is_current_room_null = True
                  
#                   current_roomtype = None
#                   current_hostel = row[7].value
#                   if current_hostel is not None:
#                         if is_current_room_null:
#                               current_hostel = None
#                         else:
#                               current_hostel = current_hostel.strip()
#                               current_hostel = Hostel.objects.filter(name__iexact=current_hostel).first()
#                               if current_hostel is None:
#                                     raise Exception(f'Current Hostel {current_hostel} not found!')
#                               current_roomtype = RoomType.objects.filter(Q(name__iexact=current_room) & Q(hostel = current_hostel)).first()
#                               if current_roomtype is None:
#                                     raise Exception(f'Current Room Type {current_room} not found!')
                  
#                   # alloted_room_type
#                   alloted_room = row[10].value
#                   is_alloted_room_null = False
#                   if alloted_room is not None:
#                         alloted_room = alloted_room.strip()
#                         if alloted_room=='':
#                               # check if admin wants to make allocated room related details null
#                               is_alloted_room_null = True
#                               alloted_room = None
#                   else:
#                         is_alloted_room_null = True
                        
#                   alloted_roomtype = None 
#                   alloted_hostel = row[9].value
#                   if alloted_hostel is not None:
#                         if is_alloted_room_null:
#                               alloted_hostel = None
#                         else:
#                               alloted_hostel = alloted_hostel.strip()
#                               alloted_hostel = Hostel.objects.filter(name__iexact=alloted_hostel).first()
#                               if alloted_hostel is None:
#                                     raise Exception(f'Alloted Hostel {alloted_hostel} not found!')
#                               alloted_roomtype = RoomType.objects.filter(Q(name__iexact=alloted_room) & Q(hostel = alloted_hostel)).first()
#                               if alloted_roomtype is None:
#                                     raise Exception(f'Alloted Room Type {alloted_room} not found!')

#                   name = row[2].value
#                   if (name is not None):
#                         name = name.strip()

#                   gender = row[6].value
#                   if gender is not None:
#                         gender = gender.strip()

#                   if student is None:
#                         # create new student
#                         student = Student(
#                               name = name, 
#                               rollno = rollno, 
#                               phoneno = phoneno, 
#                               gender = gender, 
#                               cg = cg, 
#                               batch = batch, 
#                               user = user,
#                               current_room = current_roomtype,
#                               alloted_room = alloted_roomtype
#                               )
#                         student.save()

#                         group = Group(leader = student, cg = student.cg)
#                         group.save()
#                   else:
#                         # update details of existing student
#                         if name is not None:
#                               student.name = name
#                         if rollno is not None:
#                               student.rollno = rollno
#                         if phoneno is not None:
#                               student.phoneno = phoneno
#                         if gender is not None:
#                               student.gender = gender
#                         if cg is not None:
#                               student.cg = cg
#                         if batch is not None:
#                               student.batch = batch
#                         if current_roomtype is not None:
#                               student.current_room = current_roomtype
#                         if alloted_roomtype is not None:
#                               student.alloted_room = alloted_roomtype
#                         student.save()

#                         group = Group.objects.filter(leader=student).first()
#                         if group is None:
#                               group = Group(leader=student, cg=student.cg)
#                               group.save()
#                         else:
#                               # update group cg
#                               updatedcg = student.cg
#                               groupSize = 1
#                               for member in group.members.all():
#                                     updatedcg += member.cg
#                                     groupSize += 1
#                               updatedcg /= groupSize
#                               group.cg = round(updatedcg, 2)
#                               group.save()

#                   successCnt += 1
            
#             except Exception as e:
#                   # log error
#                   with open(os.path.join(settings.LOGS_ROOT, 'add_user_errors.log'), 'a') as f:
#                       f.write(f"Creation of item {cnt} unsuccessful.\n")
#                       f.write(f"{str(e)}\n\n")
#                   # print(f"creation of ({row['name']}, {row['email']}) unsuccessful.\n")
#                   # print(e)
#                   failureCnt += 1

#             cnt += 1
      
#       with open(os.path.join(settings.LOGS_ROOT, 'add_user_errors.log'), 'a') as f:
#             f.write(f"{successCnt} users successfully created and {failureCnt} failed.\n\n")

#       return f"{successCnt} users successfully created and {failureCnt} failed."


# @app.task(name = "add_defaulters")
# def add_defaulters(filename):
#       with open(os.path.join(settings.LOGS_ROOT, 'add_defaulter.log'), 'a') as f:
#             f.write(f"Processing file {filename} at {datetime.now()}.\n")

#       path = os.path.join(settings.BASE_DIR, 'imported-data', 'defaulter', filename)
#       wb = load_workbook(path)
#       ws = wb.active

#       # check if required fields are present in data
#       if ws['A1'].value!='student':
#             with open(os.path.join(settings.LOGS_ROOT, 'add_defaulter_errors.log'), 'a') as f:
#                   f.write(f"student field must be present for file {filename}! Required 'student' but found {ws['A1']} at cell A1.\n")
#                   f.write("Aborting...\n\n")
#             raise Exception(f"student field missing! Required 'student' but found {ws['A1']} at cell A1.")
      
#       cnt = 1
#       successCnt = 0
#       failureCnt = 0

#       for row in ws.iter_rows(min_row=2, min_col=1, max_col=1):
#             try:
#                   student = Student.objects.filter(rollno=row[0].value).first()
#                   if student is None:
#                         raise Exception(f"Student with roll number {row[0]} not found!")
#                   instance = Defaulter.objects.filter(student=student).first()
#                   if instance is None:
#                         instance = Defaulter(student=student)
#                         instance.save()
#                   successCnt += 1
#             except BaseException as e:
#                   with open(os.path.join(settings.LOGS_ROOT, 'add_defaulter.log'), 'a') as f:
#                         f.write(f"Creation of item {cnt} unsuccessful.\n")
#                         f.write(str(e))
#                         f.write("\n")
#                   failureCnt += 1
#             cnt += 1
      
#       with open(os.path.join(settings.LOGS_ROOT, 'add_defaulter.log'), 'a') as f:
#             f.write(f"{successCnt} defaulters successfully created and {failureCnt} failed.\n\n")

#       return f"{successCnt} defaulters successfully created and {failureCnt} failed."


@app.task(name = "send_reminder_mail")
def send_reminder_mail(name,email,last_date):
      subject = "Hi " + name +", Reminder for filling preferences"
      idx = cache.get('emailIdIndex', 0)
      connection = get_connection(username=settings.EMAIL_HOST_USERS[idx], password=settings.EMAIL_HOST_PASSWORDS[idx], fail_silently=False)
      connection.open()
      context = {
            "name" : name,
            "last_date":last_date
      }
      html_message = render_to_string('dashboard/remindermail.html', context)
      msg = strip_tags(html_message)
      
      send_mail(subject, msg, settings.EMAIL_HOST_USERS[idx], (email, ), html_message=html_message, connection=connection, fail_silently=False)
      connection.close()
      
      return f"\nReminder mail sent to {email}\n"


@app.task(name = "send_start_allocation_mail")
def send_start_allocation_mail(name,email, slug):
      subject = f"Hi {name}, Hostel Allotment has Started"
      idx = cache.get('emailIdIndex', 0)
      connection = get_connection(username=settings.EMAIL_HOST_USERS[idx], password=settings.EMAIL_HOST_PASSWORDS[idx], fail_silently=False)
      connection.open()
      context = {
            "name" : name,
            "url": "https://allotment.onlinehostel.in/auth/forgot-password/" + slug,
      }
      html_message = render_to_string('dashboard/startallocationmail.html', context)
      msg = strip_tags(html_message)
      
      send_mail(subject, msg, settings.EMAIL_HOST_USERS[idx], (email, ), html_message=html_message, connection=connection, fail_silently=False)
      connection.close()
      
      return f"\nStart allocation mail sent to {email}\n"
      
            