from django.core.cache import cache
from django.db import models

# Create your models here.


class AllotmentLogsStudent(models.Model):
      email = models.CharField(max_length=200)
      phoneno = models.CharField(max_length=15)
      rollno = models.CharField(max_length=15)
      cg = models.FloatField()
      preview_room = models.ForeignKey('preference.RoomType', on_delete=models.CASCADE)
      group = models.ForeignKey('dashboard.AllotmentLogsGroup', on_delete=models.CASCADE, related_name='members')

      def __str__(self):
            return self.email


class AllotmentLogsGroup(models.Model):
      leader = models.OneToOneField(AllotmentLogsStudent, on_delete=models.CASCADE, related_name='leader_of_group')
      cg = models.FloatField()
      status = models.ForeignKey('dashboard.AllotmentStatus', on_delete=models.CASCADE, related_name='pending_groups')

      def __str__(self):
            return self.leader.name


class AllotmentStatus(models.Model):
      sections = models.ManyToManyField('student.Section', related_name='allotment_statuses')

      retained_students_cnt = models.PositiveIntegerField(default=0)
      retained_groups_cnt = models.PositiveIntegerField(default=0)
      alloted_students_cnt = models.PositiveIntegerField(default=0)
      alloted_groups_cnt = models.PositiveIntegerField(default=0)
      partial_allot_students_cnt = models.PositiveIntegerField(default=0)
      partial_allot_groups_cnt = models.PositiveIntegerField(default=0)

      def __str__(self):
            return f"{self.done}-{self.is_public}"


class AcademicSession(models.Model):
      name = models.CharField(max_length=100)
      fee_structure_url = models.URLField(max_length=1000, null=True, blank=True, default=None)

      def __str__(self):
            return self.name
      
      def save(self, *args, **kwargs):
            cache.delete('academicSession')
            return super().save(*args, **kwargs)
      
      def delete(self, *args, **kwargs):
            cache.delete('academicSession')
            cache.delete('feeStructureUrl')
            return super().save(*args, **kwargs)


class Faq(models.Model):
      question = models.TextField()
      answer = models.TextField()

      def __str__(self):
            return self.question
