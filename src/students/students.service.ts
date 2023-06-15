import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './models/student.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class StudentsService {
  constructor(@InjectModel(Student) private studentRepo: typeof Student) {}

  create(createStudentDto: CreateStudentDto) {
    return this.studentRepo.create(createStudentDto);
  }

  findAll() {
    return this.studentRepo.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.studentRepo.findOne({
      where: { id },
      include: { all: true },
    });
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return this.studentRepo.update(updateStudentDto, { where: { id } });
  }

  remove(id: number) {
    return this.studentRepo.destroy({ where: { id } });
  }
}
