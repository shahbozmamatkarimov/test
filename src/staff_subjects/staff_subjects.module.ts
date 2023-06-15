import { Module } from '@nestjs/common';
import { StaffSubjectsService } from './staff_subjects.service';
import { StaffSubjectsController } from './staff_subjects.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { StaffSubject } from './models/staff_subject.model';
import { Staff } from '../staff/models/staff.model';
import { Subject } from '../subjects/models/subject.model';

@Module({
  imports: [SequelizeModule.forFeature([StaffSubject, Staff, Subject])],
  controllers: [StaffSubjectsController],
  providers: [StaffSubjectsService],
})
export class StaffSubjectsModule {}
