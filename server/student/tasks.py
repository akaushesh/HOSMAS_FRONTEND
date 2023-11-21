from __future__ import absolute_import, unicode_literals

from config.celery import app
from django.core.mail import EmailMultiAlternatives, get_connection
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.conf import settings
import os
import string
from random import choice
from user.models import User
from student.models import Student, Batch, Group
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
