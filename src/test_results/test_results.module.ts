import { Module } from '@nestjs/common';
import { TestResultsService } from './test_results.service';
import { TestResultsController } from './test_results.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { TestResult } from './models/test_result.model';
import { Student } from '../students/models/student.model';
import { TestGroup } from '../test-group/models/test-group.model';

@Module({
  imports: [SequelizeModule.forFeature([TestResult, Student, TestGroup])],
  controllers: [TestResultsController],
  providers: [TestResultsService],
})
export class TestResultsModule {}
