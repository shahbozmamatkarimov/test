import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Question } from './models/question.model';
import { TestGroup } from '../test-group/models/test-group.model';

@Module({
  imports: [SequelizeModule.forFeature([Question, TestGroup])],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}
