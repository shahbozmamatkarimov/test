import { StaffGroup } from './models/staff_group.model';
import { Injectable } from '@nestjs/common';
import { CreateStaffGroupDto } from './dto/create-staff_group.dto';
import { UpdateStaffGroupDto } from './dto/update-staff_group.dto';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class StaffGroupService {
  constructor(
    @InjectModel(StaffGroup) private StaffGroupRepo: typeof StaffGroup,
  ) {}

  create(createStaffGroupDto: CreateStaffGroupDto) {
    return this.StaffGroupRepo.create(createStaffGroupDto);
  }

  findAll() {
    return this.StaffGroupRepo.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.StaffGroupRepo.findOne({
      where: { id },
      include: { all: true },
    });
  }

  update(id: number, updateStaffGroupDto: UpdateStaffGroupDto) {
    return this.StaffGroupRepo.update(updateStaffGroupDto, { where: { id } });
  }

  remove(id: number) {
    return this.StaffGroupRepo.destroy({ where: { id } });
  }
}
