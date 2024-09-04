from cleaning_request.models import *
from slots.models import *
from worker.models import *


def get_object(objects, **kwargs):
    try:
        return objects.get(**kwargs)
    except objects.DoesNotExist:
        return None
    
def filter_objects(objects, **kwargs):
    return objects.filter(**kwargs)

def all_objects(objects):
    return objects.all()