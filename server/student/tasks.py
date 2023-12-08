from __future__ import absolute_import, unicode_literals

from config.celery import app

from django.core.cache import cache
from django.core.mail import EmailMultiAlternatives, get_connection
from django.core.mail import send_mail, get_connection
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.conf import settings

import os
import string
from random import choice
import csv

from user.models import User
from student.models import Student, Batch, Group


@app.task(name = "send_invitation_mail")
def send_invitation_mail(leader_name, leader_email, leader_roll, invitee_name, invitee_email):
    
    idx = cache.get('emailIdIndex', 0)
    cache.set('emailIdIndex', (idx + 1) % settings.EMAIL_HOST_USERS_COUNT)

    connection = get_connection(username=settings.EMAIL_HOST_USERS[idx], password=settings.EMAIL_HOST_PASSWORDS[idx], fail_silently=False)
    connection.open()
    
    subject = "Invitation to join a group for hostel allotment"
    
    context = {
        'name':invitee_name,
        'leader_name':leader_name,
        'leader_roll':leader_roll,
        'leader_email':leader_email,
    }
    html_message = render_to_string('dashboard/sendInvitation.html', context)
    msg = strip_tags(html_message)
    
    send_mail(subject, msg, settings.EMAIL_HOST_USERS[idx], (invitee_email, ), html_message=html_message, connection=connection, fail_silently=False)
    connection.close()
    
    return f"\n send invitation mail sent to {invitee_email}\n"


@app.task(name = "joned_group_mail")
def joined_group_mail(leader_name, leader_email, leader_roll, member_name, member_email):
    
    idx = cache.get('emailIdIndex', 0)
    cache.set('emailIdIndex', (idx + 1) % settings.EMAIL_HOST_USERS_COUNT)

    connection = get_connection(username=settings.EMAIL_HOST_USERS[idx], password=settings.EMAIL_HOST_PASSWORDS[idx], fail_silently=False)
    connection.open()
    
    subject = f"Successfully joined group for hostel allotment"
    
    context = {
        'name':member_name,
        'leader_name':leader_name,
        'leader_roll':leader_roll,
        'leader_email':leader_email,
    }
    html_message = render_to_string('dashboard/joined_group_mail.html', context)
    msg = strip_tags(html_message)
    
    send_mail(subject, msg, settings.EMAIL_HOST_USERS[idx], (member_email, ), html_message=html_message, connection=connection, fail_silently=False)
    connection.close()
    
    return f"\nJoined group mail sent to {member_email}\n"


@app.task(name = "joined_group_to_members")
def joined_group_to_members(leader_name,newmember_name, newmember_roll, member_email):
    
    idx = cache.get('emailIdIndex', 0)
    cache.set('emailIdIndex', (idx + 1) % settings.EMAIL_HOST_USERS_COUNT)

    connection = get_connection(username=settings.EMAIL_HOST_USERS[idx], password=settings.EMAIL_HOST_PASSWORDS[idx], fail_silently=False)
    connection.open()
    
    subject = f"{newmember_name} joined your group for hostel alotment"
    context = {
        'leader_name':leader_name,
        'name':newmember_name,
        'roll':newmember_roll,
    }
    
    html_message = render_to_string('dashboard/joinedgrouptomembers.html', context)
    msg = strip_tags(html_message)
    
    send_mail(subject, msg, settings.EMAIL_HOST_USERS[idx], (member_email, ), html_message=html_message, connection=connection, fail_silently=False)
    connection.close()
    
    return f"\nJoined group to member mail sent to {member_email}\n"


@app.task(name = "left_group_mail")
def left_group_mail(leader_name, exmember_name, exmember_roll, member_email):
    
    idx = cache.get('emailIdIndex', 0)
    cache.set('emailIdIndex', (idx + 1) % settings.EMAIL_HOST_USERS_COUNT)

    connection = get_connection(username=settings.EMAIL_HOST_USERS[idx], password=settings.EMAIL_HOST_PASSWORDS[idx], fail_silently=False)
    connection.open()
    
    subject = f"{exmember_name} left your group for hostel allotment"
    context = {
        'leader_name':leader_name,
        'name':exmember_name,
        'roll':exmember_roll,
    }
    html_message = render_to_string('dashboard/leftgroupmail.html', context)
    msg = strip_tags(html_message)
    
    send_mail(subject, msg, settings.EMAIL_HOST_USERS[idx], (member_email, ), html_message=html_message, connection=connection, fail_silently=False)
    connection.close()

    return f"\nleft group mail sent to {member_email}\n"


@app.task(name = "send_preferences_mail")
def send_preferences_mail(email, name, d):
        
        idx = cache.get('emailIdIndex', 0)
        cache.set('emailIdIndex', (idx + 1) % settings.EMAIL_HOST_USERS_COUNT)
    
        connection = get_connection(username=settings.EMAIL_HOST_USERS[idx], password=settings.EMAIL_HOST_PASSWORDS[idx], fail_silently=False)
        connection.open()
        
        subject = "Hostel Allotment Preferences filled for your group"
        context = {
            'name':name,
            'data':d,
        }
        html_message = render_to_string('dashboard/preferences.html', context)
        msg = strip_tags(html_message)
        
        send_mail(subject, msg, settings.EMAIL_HOST_USERS[idx], (email, ), html_message=html_message, connection=connection, fail_silently=False)
        connection.close()
        
        return f"\nPreferences mail sent to {email}\n"


@app.task(name = "send_retain_mail")
def send_retain_mail(email, name):
        
        idx = cache.get('emailIdIndex', 0)
        cache.set('emailIdIndex', (idx + 1) % settings.EMAIL_HOST_USERS_COUNT)
    
        connection = get_connection(username=settings.EMAIL_HOST_USERS[idx], password=settings.EMAIL_HOST_PASSWORDS[idx], fail_silently=False)
        connection.open()
        
        subject = "Hostel Allotment Preferences filled for your group"
        context = {
            'name':name,
        }
        html_message = render_to_string('dashboard/retain.html', context)
        msg = strip_tags(html_message)
        
        send_mail(subject, msg, settings.EMAIL_HOST_USERS[idx], (email, ), html_message=html_message, connection=connection, fail_silently=False)
        connection.close()
        
        return f"\nPreferences mail sent to {email}\n"
    
@app.task(name = "send_teamleader_change_mail")
def send_teamleader_change_mail(newName, newRoll, email):
            
            idx = cache.get('emailIdIndex', 0)
            cache.set('emailIdIndex', (idx + 1) % settings.EMAIL_HOST_USERS_COUNT)
        
            connection = get_connection(username=settings.EMAIL_HOST_USERS[idx], password=settings.EMAIL_HOST_PASSWORDS[idx], fail_silently=False)
            connection.open()
            
            subject = "Group Leader for your Hostel Allocation was changed"
            context = {
                'newName':newName,
                'newRoll':newRoll,
            }
            html_message = render_to_string('dashboard/teamleaderchange.html', context)
            msg = strip_tags(html_message)
            
            send_mail(subject, msg, settings.EMAIL_HOST_USERS[idx], (email, ), html_message=html_message, connection=connection, fail_silently=False)
            connection.close()
            
            return f"\nTeam Leader Change mail sent to {email}\n"
        

@app.task(name = "send_preferences_deleted_mail")
def send_preferences_deleted_mail(email, name):
                
                idx = cache.get('emailIdIndex', 0)
                cache.set('emailIdIndex', (idx + 1) % settings.EMAIL_HOST_USERS_COUNT)
            
                connection = get_connection(username=settings.EMAIL_HOST_USERS[idx], password=settings.EMAIL_HOST_PASSWORDS[idx], fail_silently=False)
                connection.open()
                
                subject = "Hostel Allotment Preferences deleted for your group"
                context = {
                    'name':name,
                }
                html_message = render_to_string('dashboard/deletepreferences.html', context)
                msg = strip_tags(html_message)
                
                send_mail(subject, msg, settings.EMAIL_HOST_USERS[idx], (email, ), html_message=html_message, connection=connection, fail_silently=False)
                connection.close()
                
                return f"\nPreferences mail sent to {email}\n"