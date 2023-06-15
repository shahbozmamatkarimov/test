import { Injectable } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Subject } from './models/subject.model';

@Injectable()
export class SubjectsService {
  constructor(@InjectModel(Subject) private subjectRepo: typeof Subject) {}

  create(createSubjectDto: CreateSubjectDto) {
    return this.subjectRepo.create(createSubjectDto);
  }

  findAll() {
    return this.subjectRepo.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.subjectRepo.findOne({ where: { id }, include: { all: true } });
  }

  update(id: number, updateSubjectDto: UpdateSubjectDto) {
    return this.subjectRepo.update(updateSubjectDto, { where: { id } });
  }

  remove(id: number) {
    return this.subjectRepo.destroy({ where: { id } });
  }
}
