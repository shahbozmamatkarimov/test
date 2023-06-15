import { Module } from '@nestjs/common';
import { CheckAnswerService } from './check_answer.service';
import { CheckAnswerController } from './check_answer.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CheckAnswer } from './models/check_answer.model';
import { Answer } from '../answers/models/answer.model';
import { TestResult } from '../test_results/models/test_result.model';

@Module({
  imports: [SequelizeModule.forFeature([CheckAnswer, Answer, TestResult])],
  controllers: [CheckAnswerController],
  providers: [CheckAnswerService],
})
export class CheckAnswerModule {}
