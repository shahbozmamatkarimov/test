import { Injectable } from '@nestjs/common';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Answer } from './models/answer.model';

@Injectable()
export class AnswersService {
  constructor(@InjectModel(Answer) private AnswerRepo: typeof Answer) {}

  create(createAnswerDto: CreateAnswerDto) {
    return this.AnswerRepo.create(createAnswerDto);
  }

  findAll() {
    return this.AnswerRepo.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.AnswerRepo.findOne({ where: { id }, include: { all: true } });
  }

  update(id: number, updateAnswerDto: UpdateAnswerDto) {
    return this.AnswerRepo.update(updateAnswerDto, { where: { id } });
  }

  remove(id: number) {
    return this.AnswerRepo.destroy({ where: { id } });
  }
}
