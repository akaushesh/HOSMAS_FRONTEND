from django.core.cache import cache
from django.db import models

# Create your models here.

class AllotmentStatus(models.Model):
      done = models.BooleanField(default=False)
      is_public = models.BooleanField(default=False)

      def __str__(self):
            return f"{self.done}-{self.is_public}"

class AcademicSession(models.Model):
      name = models.CharField(max_length=100)

      def __str__(self):
            return self.name
      
      def save(self, *args, **kwargs):
            cache.delete('academicSession')
            return super().save(*args, **kwargs)
      
      def delete(self, *args, **kwargs):
            cache.delete('academicSession')
            return super().save(*args, **kwargs)


class Faq(models.Model):
      question = models.TextField()
      answer = models.TextField()

      def __str__(self):
            return self.question
