from __future__ import absolute_import, unicode_literals

from config.celery import app

from student.models import Group, Section
from preference.models import RoomTypeChoice, Preference
from .models import AllotmentStatus


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
