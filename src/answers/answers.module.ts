import { Module } from '@nestjs/common';
import { AnswersService } from './answers.service';
import { AnswersController } from './answers.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Answer } from './models/answer.model';
import { Question } from '../question/models/question.model';

@Module({
  imports: [SequelizeModule.forFeature([Answer, Question])],
  controllers: [AnswersController],
  providers: [AnswersService],
})
export class AnswersModule {}
