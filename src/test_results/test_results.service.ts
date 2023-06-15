import { Injectable } from '@nestjs/common';
import { CreateTestResultDto } from './dto/create-test_result.dto';
import { UpdateTestResultDto } from './dto/update-test_result.dto';
import { InjectModel } from '@nestjs/sequelize';
import { TestResult } from './models/test_result.model';

@Injectable()
export class TestResultsService {
  constructor(
    @InjectModel(TestResult) private testResultsRepo: typeof TestResult,
  ) {}

  create(createTestResultDto: CreateTestResultDto) {
    return this.testResultsRepo.create(createTestResultDto);
  }

  findAll() {
    return this.testResultsRepo.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.testResultsRepo.findOne({
      where: { id },
      include: { all: true },
    });
  }

  update(id: number, updateTestResultDto: UpdateTestResultDto) {
    return this.testResultsRepo.update(updateTestResultDto, { where: { id } });
  }

  remove(id: number) {
    return this.testResultsRepo.destroy({ where: { id } });
  }
}
