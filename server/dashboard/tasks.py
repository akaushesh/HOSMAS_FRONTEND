from __future__ import absolute_import, unicode_literals

from config.celery import app

from student.models import Group, Section
from preference.models import RoomTypeChoice, Preference
from .models import AllotmentStatus


@app.task(name='add_users')
def add_users(filename):
      # email_subject = 'User Credentials for Hostel Management'

      # connection = get_connection(fail_silently=False)
      # connection.open()

      userfile = open(filename, 'r', newline='', encoding='utf-8-sig')
      reader = csv.DictReader(userfile)

      successCnt = 0
      failureCnt = 0

      for row in reader:
            password = ''.join(choice(string.ascii_letters) for _ in range(8))
            try:
                  #TODO : confirm the fields in csv
                  
                  batch = Batch.objects.filter(name = row['batch'].strip()).first()
                  if batch is None:
                        batch = Batch(name = row['batch'].strip())
                        batch.save()
                  
                  user = User(email=row['email'].strip())
                  user.set_password(password)
                  user.save()
                  
                  student = Student(name=row['name'].strip(), rollno=row['rollno'].strip(), phoneno=row['phoneno'].strip(), gender=row['gender'].strip(), cg = float(row['cg'].strip()), batch = batch, user=user)
                  student.save()

                  group = Group(leader = student, cg = student.cg)
                  group.save()

                  successCnt += 1
            except Exception as e:
                  with open(os.path.join(settings.LOGS_ROOT, 'add_user_errors.log'), 'a') as f:
                      f.write(f"creation of ({row['name']}, {row['email']}) unsuccessful.\n")
                      f.write(f"{e}")
                      f.write("\n")
                  # print(f"creation of ({row['name']}, {row['email']}) unsuccessful.\n")
                  # print(e)
                  failureCnt += 1
                  continue
            
            # context = {
            #       'name': row['name'].strip(),
            #       'email': row['email'].strip(),
            #       'password': password
            # }
            # html_message = render_to_string('dashboard/email_credentials.html', context)
            # msg = strip_tags(html_message)

            # email = EmailMultiAlternatives(email_subject, msg, settings.EMAIL_HOST_USER, (row['email'],))
            # email.attach_alternative(html_message, 'text/html')
            
            # connection.send_messages((email,))

      # connection.close()
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
