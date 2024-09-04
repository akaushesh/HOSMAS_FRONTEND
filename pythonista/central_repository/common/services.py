def only_fields_decorator(service_func: callable) -> callable:
    def only_fields_wrapper(objects, only=(), **kwargs):
        return service_func(objects, **kwargs).only(*only)

    return only_fields_wrapper


def select_related_decorator(service_func: callable) -> callable:
    def select_related_wrapper(objects, select_related=(), **kwargs):
        return service_func(objects, **kwargs).select_related(*select_related)

    return select_related_wrapper


def prefetch_related_decorator(service_func: callable) -> callable:
    def prefetch_related_wrapper(objects, prefetch_related=(), **kwargs):
        return service_func(objects, **kwargs).prefetch_related(*prefetch_related)

    return prefetch_related_wrapper


@select_related_decorator
@prefetch_related_decorator
def get_object(objects, **kwargs):
    return objects.get(**kwargs)


@only_fields_decorator
@select_related_decorator
@prefetch_related_decorator
def filter_objects(objects, **kwargs):
    return objects.filter(**kwargs)


@only_fields_decorator
@select_related_decorator
@prefetch_related_decorator
def all_objects(objects):
    return objects.all()
