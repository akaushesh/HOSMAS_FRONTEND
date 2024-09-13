from django.core.exceptions import ObjectDoesNotExist

import common.services as common_services

from .models import User
from .serializers import (
    StudentProfileSerializer,
    SupervisorProfileSerializer,
    UserProfileSerializer,
)


# get user object with all preloaded related fields
def get_user_instance(user_id: int) -> User:
    instance = common_services.filter_objects(
        objects=User.objects,
        id=user_id,
        select_related=(
            "student__room__level__hostel",
            "student__room__room_type",
            "student__room__block",
            "supervisor",
        ),
    ).first()

    return instance


# Build the response for User profile view
def get_user_detailed_profile(user_id: int) -> dict:
    user = get_user_instance(user_id)

    # check if user is student
    try:
        student = user.student
        return {
            "role": "student",
            "student": StudentProfileSerializer(instance=student).data,
        }
    except ObjectDoesNotExist:
        pass

    # check if user is supervisor
    try:
        supervisor = user.supervisor
        return {
            "role": "supervisor",
            "supervisor": SupervisorProfileSerializer(instance=supervisor).data,
        }
    except ObjectDoesNotExist:
        pass

    # handle case for user with no role
    return {"role": None, "user": UserProfileSerializer(instance=user).data}
