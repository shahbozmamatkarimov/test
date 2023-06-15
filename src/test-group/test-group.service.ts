import { Injectable } from '@nestjs/common';
import { CreateTestGroupDto } from './dto/create-test-group.dto';
import { UpdateTestGroupDto } from './dto/update-test-group.dto';
import { InjectModel } from '@nestjs/sequelize';
import { TestGroup } from './models/test-group.model';

@Injectable()
export class TestGroupService {
  constructor(
    @InjectModel(TestGroup) private testGroupRepo: typeof TestGroup,
  ) {}

  create(createTestGroupDto: CreateTestGroupDto) {
    return this.testGroupRepo.create(createTestGroupDto);
  }

  findAll() {
    return this.testGroupRepo.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.testGroupRepo.findOne({
      where: { id },
      include: { all: true },
    });
  }

  update(id: number, updateTestGroupDto: UpdateTestGroupDto) {
    return this.testGroupRepo.update(updateTestGroupDto, { where: { id } });
  }

  remove(id: number) {
    return this.testGroupRepo.destroy({ where: { id } });
  }
}
