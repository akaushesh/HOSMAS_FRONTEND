from django.db import models

# Create your models here.

class AllotmentStatus(models.Model):
      done = models.BooleanField(default=False)
      is_public = models.BooleanField(default=False)

      def __str__(self):
            return f"{self.done}-{self.is_public}"
