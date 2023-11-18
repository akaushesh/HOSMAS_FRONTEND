from __future__ import absolute_import, unicode_literals

from config.celery import app

from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.conf import settings
import os
import string
from random import choice
from user.models import User
from student.models import Student
import csv

@app.task(name = "send_invitation_mail")
def send_invitation_mail(leader_name, leader_email, leader_roll, invitee_name, invitee_email):
    subject = "Invitation to join a group for hostel allotment"
    
    context = {
        'name':invitee_name,
        'leader_name':leader_name,
        'leader_roll':leader_roll,
        'leader_email':leader_email,
    }
    html_message = render_to_string('dashboard/sendInvitation.html', context)
    msg = strip_tags(html_message)
    send_mail(subject, msg, settings.EMAIL_HOST_USER, (invitee_email, ), html_message=html_message, fail_silently=False)
    return f"\n send invitation mail sent to {invitee_email}\n"


@app.task(name = "joned_group_mail")
def joined_group_mail(leader_name, leader_email, leader_roll, member_name, member_email):
    subject = f"Successfully joined group for hostel allotment"
    
    context = {
        'name':member_name,
        'leader_name':leader_name,
        'leader_roll':leader_roll,
        'leader_email':leader_email,
    }
    html_message = render_to_string('dashboard/joined_group_mail.html', context)
    msg = strip_tags(html_message)
    send_mail(subject, msg, settings.EMAIL_HOST_USER, (member_email, ), html_message=html_message, fail_silently=False)
    return f"\nJoined group mail sent to {member_email}\n"


@app.task(name = "joined_group_to_members")
def joined_group_to_members(leader_name,newmember_name, newmember_roll, member_email):
    subject = f"{newmember_name} joined your group for hostel alotment"
    context = {
        'leader_name':leader_name,
        'name':newmember_name,
        'roll':newmember_roll,
    }
    
    html_message = render_to_string('dashboard/joinedgrouptomembers.html', context)
    msg = strip_tags(html_message)
    send_mail(subject, msg, settings.EMAIL_HOST_USER, (member_email, ), html_message=html_message, fail_silently=False)
    return f"\nJoined group to member mail sent to {member_email}\n"


@app.task(name = "left_group_mail")
def left_group_mail(leader_name, exmember_name, exmember_roll, member_email):
    subject = f"{exmember_name} left your group for hostel allotment"
    context = {
        'leader_name':leader_name,
        'name':exmember_name,
        'roll':exmember_roll,
    }
    html_message = render_to_string('dashboard/leftgroupmail.html', context)
    msg = strip_tags(html_message)
    send_mail(subject, msg, settings.EMAIL_HOST_USER, (member_email, ), html_message=html_message, fail_silently=False)
    return f"\nleft group mail sent to {member_email}\n"


@app.task(name='add_users')
def add_users(filename):
    email_subject = 'User Credentials for Hostel Management'
    
    filename = os.path.join(settings.MEDIA_ROOT, filename)
    
    # connection = get_connection(fail_silently=False)
    # connection.open()
    
    userfile = open(filename, 'r', newline='', encoding='utf-8-sig')
    reader = csv.DictReader(userfile)

    successCnt = 0
    failureCnt = 0
    
    for row in reader:
        password = ''.join(choice(string.ascii_letters) for _ in range(8))
        try:
            user = User(email=row['email'].strip())
            user.set_password(password)
            user.save()
            student = Student(name=row['name'].strip(), rollno=row['rollno'].strip(), gender=row['gender'].strip(), cg = float(row['cg'].strip()), batch = row['batch'].strip())
            student.user = user
            student.save()
            successCnt += 1
        except:
            with open(os.path.join(settings.LOGS_ROOT, 'add_user_errors.log'), 'a') as f:
                f.write(f"creation of ({row['name']}, {row['email']}) unsuccessful.\n")
            failureCnt += 1
            continue
        
        context = {
            'name': row['name'].strip(),
            'email': row['email'].strip(),
            'password': password
        }
        html_message = render_to_string('dashboard/email_login_credentials.html', context)
        msg = strip_tags(html_message)

        # email = EmailMultiAlternatives(email_subject, msg, settings.EMAIL_HOST_USER, (row['email'],), reply_to=('ccs@thapar.edu',))
        # email.attach_alternative(html_message, 'text/html')
        
        # connection.send_messages((email,))
    
    # connection.close()
    return f"{successCnt} users successfully created and {failureCnt} failed."