import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Question } from './models/question.model';

@Injectable()
export class QuestionService {
  constructor(@InjectModel(Question) private QuestionRepo: typeof Question) {}

  create(createQuestionDto: CreateQuestionDto) {
    return this.QuestionRepo.create(createQuestionDto);
  }

  findAll() {
    return this.QuestionRepo.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.QuestionRepo.findOne({ where: { id }, include: { all: true } });
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return this.QuestionRepo.update(updateQuestionDto, { where: { id } });
  }

  remove(id: number) {
    return this.QuestionRepo.destroy({ where: { id } });
  }
}
