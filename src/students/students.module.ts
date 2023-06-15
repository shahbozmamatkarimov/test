import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Student } from './models/student.model';
import { Group } from '../groups/models/group.model';

@Module({
  imports: [SequelizeModule.forFeature([Student, Group])],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
