from __future__ import absolute_import, unicode_literals

from config.celery import app
from django.db.models import Q
from student.models import Group, Section, Defaulter
from preference.models import *
from .models import AllotmentStatus
import csv
from random import choice
import string
from user.models import User
from student.models import Student, Batch, Group
from django.conf import settings
import os
from django.core.files.storage import default_storage
from django.core.mail import send_mail, get_connection
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.conf import settings
from django.core.cache import cache

@app.task(name='add_users')
def add_users(filename):
      storage = default_storage
      storage.location = os.path.join(settings.BASE_DIR, 'imported-data', 'student')
      userfile = storage.open(filename, 'r')
      reader = csv.DictReader(userfile)

      # Check if atleast one out of email or rollno is present in given data
      headers = reader.fieldnames
      unique_identifiers = ['email', 'rollno']

      if not any(val for val in unique_identifiers):
            # Log error
            with open(os.path.join(settings.LOGS_ROOT, 'add_user_errors.log'), 'a') as f:
                  f.write(f"Atleast one out of email or rollno must be present! Aborting...")
                  f.write("\n")
            return

      successCnt = 0
      failureCnt = 0
      cnt = 1

      for row in reader:
            try:
                  student = None
                  
                  # Extract data into variables and data preprocessing
                  phoneno = row.get('phoneno')
                  if phoneno is not None:
                        phoneno = phoneno.strip()
                  
                  cg = row.get('cg')
                  if cg is not None:
                        cg = round(float(cg.strip()), 2)
                  
                  batch = row.get('batch')
                  if batch is not None:
                        batch = batch.strip()
                        batch = Batch.objects.filter(name = batch).first()
                        if batch is None:
                              batch = Batch(name = row['batch'].strip())
                              batch.save()

                  email = row.get('email')
                  if email is not None:
                        email = email.strip()
                        user = User.objects.filter(email=email).first()
                        if user is None:
                              user = User(email=email)
                              password = ''.join(choice(string.ascii_letters + string.digits) for _ in range(8))
                              user.set_password(password)
                              user.save()
                        try:
                              if user.student is not None:
                                    student = user.student
                        except:
                              pass
                  
                  rollno = row.get('rollno')
                  if rollno is not None:
                        rollno = rollno.strip()
                        if student is None:
                              student = Student.objects.filter(rollno=rollno).first()
                  
                  current_room = row.get('current_room_type')
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
                  current_hostel = row.get('current_hostel')
                  if current_hostel is not None:
                        if is_current_room_null:
                              current_hostel = None
                        else:
                              current_hostel = current_hostel.strip()
                              current_hostel = Hostel.objects.filter(name=current_hostel).first()
                              if current_hostel is None:
                                    raise Exception(f'Current Hostel {current_hostel} not found!')
                              current_roomtype = RoomType.objects.filter(Q(name=current_room) & Q(hostel = current_hostel)).first()
                              if current_roomtype is None:
                                    raise Exception(f'Current Room Type {current_room} not found!')
                  
                  alloted_room = row.get('alloted_room_type')
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
                  alloted_hostel = row.get('alloted_hostel')
                  if alloted_hostel is not None:
                        if is_alloted_room_null:
                              alloted_hostel = None
                        else:
                              alloted_hostel = alloted_hostel.strip()
                              alloted_hostel = Hostel.objects.filter(name=alloted_hostel).first()
                              if alloted_hostel is None:
                                    raise Exception(f'Alloted Hostel {alloted_hostel} not found!')
                              alloted_roomtype = RoomType.objects.filter(Q(name=alloted_room) & Q(hostel = alloted_hostel)).first()
                              if alloted_roomtype is None:
                                    raise Exception(f'Alloted Room Type {alloted_room} not found!')
                              
                  name = row.get('name')
                  if (name is not None):
                        name = name.strip()
                  
                  gender = row.get('gender')
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
                        # if is_current_room_null or current_room is not None:
                        #       student.current_room = current_room
                        # if is_current_room_null or current_hostel is not None:
                        #       student.current_hostel = current_hostel
                        # if is_alloted_room_null or alloted_room is not None:
                        #       student.alloted_room = alloted_room
                        # if is_alloted_room_null or alloted_hostel is not None:
                        #       student.alloted_hostel = alloted_hostel
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
                  with open(os.path.join(settings.LOGS_ROOT, 'add_user_errors.log'), 'a') as f:
                      f.write(f"Creation of item {cnt} unsuccessful.\n")
                      f.write(f"{e}")
                      f.write("\n")
                  # print(f"creation of ({row['name']}, {row['email']}) unsuccessful.\n")
                  # print(e)
                  failureCnt += 1

            cnt += 1

      return f"{successCnt} users successfully created and {failureCnt} failed."


@app.task(name = "add_defaulters")
def add_defaulters(filename):
      storage = default_storage
      storage.location = os.path.join(settings.BASE_DIR, 'imported-data', 'defaulter')
      userfile = storage.open(filename, 'r')
      reader = csv.DictReader(userfile)

      fieldnames = reader.fieldnames
      if len(fieldnames)!=1 or fieldnames[0]!='student':
            with open(os.path.join(settings.LOGS_ROOT, 'add_defaulter_errors.log'), 'a') as f:
                  f.write(f"student field must be present! Aborting...")
                  f.write("\n")
            return 0
      
      cnt = 1
      successCnt = 0
      failureCnt = 0

      for row in reader:
            try:
                  student = Student.objects.filter(rollno=row['student']).first()
                  if student in None:
                        raise Exception(f"Student with roll number {row['student']} not found!")
                  instance = Defaulter.objects.filter(student=student).first()
                  if instance is None:
                        instance = Defaulter(student=student)
                        instance.save()
                  successCnt += 1
            except BaseException as e:
                  with open(os.path.join(settings.LOGS_ROOT, 'add_defaulter_errors.log'), 'a') as f:
                        f.write(f"Creation of item {cnt} unsuccessful.\n")
                        f.write(e)
                        f.write("\n")
                  failureCnt += 1
            cnt += 1

      return f"{successCnt} users successfully created and {failureCnt} failed."


@app.task(name = "allot_hostel")
def allot_hostel():
      status = AllotmentStatus.objects.first()
      if status is None:
            status = AllotmentStatus()
      else:
            status.done = False
      status.save()

      # storing the rooms capacity in a dictionary
      choices_queryset = RoomTypeChoice.objects.all()
      choices_size = {}
      for choice in choices_queryset:
            choices_size[choice.id] = choice.capacity
      
      # Handing groups that retained their previous room
      retain_groups = Group.objects.filter(is_retained=True).all()
      for group in retain_groups:
            section = Section.objects.filter(batch=group.leader.batch, gender=group.leader.gender)
            if not section.is_retain_allowed:
                  continue
            if choices_size[group.leader.current_room.id] > 0:
                  group.leader.alloted_room = group.leader.current_room
                  group.leader.save()
                  choices_size[group.leader.alloted_room.id] -= 1
            for member in group.members.all():
                  if choices_size[member.current_room.id] > 0:
                        member.alloted_room = member.current_room
                        member.save()
                        choices_size[member.alloted_room.id] -= 1

      # Handling groups that have filled preferences
      unalloted_groups = []
      groups = Group.objects.filter(is_retained=False).order_by('-cg').all()
      for group in groups:
            members = group.members.all()
            group_size = len(members) + 1
            preferences = Preference.objects.filter(group=group).order_by('priority').all()
            got_allotment = False
            for preference in preferences:
                  choice = preference.room_type_choice
                  if choices_size[choice.id] < group_size:
                        continue
                  room_type = choice.room_type
                  group.leader.alloted_room = room_type
                  group.leader.save()
                  for member in group.members.all():
                        member.alloted_room = room_type
                        member.save()
                  choices_size[choice.id] -= group_size
                  got_allotment = True
                  break
            if not got_allotment:
                  unalloted_groups.append(group)
      
      # Handle groups that can't get same hostel
      for group in unalloted_groups:
            students = [group.leader]
            for member in group.members.all():
                  students.append(member)
            students.sort(key = lambda x: x.cg, reverse = True)
            preferences = Preference.objects.filter(group=group).order_by('priority').all()
            ptr = 0
            for preference in preferences:
                  choice = preference.room_type_choice
                  while choices_size[choice.id] > 1:
                        students[ptr].alloted_room = choice.room_type
                        students[ptr].save()
                        choices_size[choice.id] -= 1
                        ptr += 1
      
      status.done = True
      status.save()

      return 1


@app.task(name = "send_reminder_mail")
def send_reminder_mail(name,email,last_date):
      subject = "Reminder for filling preferences"
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
def send_start_allocation_mail(name,email):
      subject = "Hostel Allotment Started"
      idx = cache.get('emailIdIndex', 0)
      connection = get_connection(username=settings.EMAIL_HOST_USERS[idx], password=settings.EMAIL_HOST_PASSWORDS[idx], fail_silently=False)
      connection.open()
      context = {
            "name" : name,
      }
      html_message = render_to_string('dashboard/startallocationmail.html', context)
      msg = strip_tags(html_message)
      
      send_mail(subject, msg, settings.EMAIL_HOST_USERS[idx], (email, ), html_message=html_message, connection=connection, fail_silently=False)
      connection.close()
      
      return f"\nStart allocation mail sent to {email}\n"
      
            