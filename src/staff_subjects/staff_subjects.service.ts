import { Injectable } from '@nestjs/common';
import { CreateStaffSubjectDto } from './dto/create-staff_subject.dto';
import { UpdateStaffSubjectDto } from './dto/update-staff_subject.dto';
import { InjectModel } from '@nestjs/sequelize';
import { StaffSubject } from './models/staff_subject.model';

@Injectable()
export class StaffSubjectsService {
  constructor(
    @InjectModel(StaffSubject) private staffSubjectsRepo: typeof StaffSubject,
  ) {}

  create(createStaffSubjectDto: CreateStaffSubjectDto) {
    return this.staffSubjectsRepo.create(createStaffSubjectDto);
  }

  findAll() {
    return this.staffSubjectsRepo.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.staffSubjectsRepo.findOne({
      where: { id },
      include: { all: true },
    });
  }

  update(id: number, updateStaffSubjectDto: UpdateStaffSubjectDto) {
    return this.staffSubjectsRepo.update(updateStaffSubjectDto, {
      where: { id },
    });
  }

  remove(id: number) {
    return this.staffSubjectsRepo.destroy({ where: { id } });
  }
}
