# pagination.py

from rest_framework.pagination import PageNumberPagination

class ResponsePagination(PageNumberPagination):
    page_size = 10  # Default page size
    page_size_query_param = 'page_size'  # Allows the client to set `?page_size=xxx`
    max_page_size = 100  # Maximum allowed page size
