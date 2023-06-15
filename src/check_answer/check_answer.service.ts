import { Injectable } from '@nestjs/common';
import { CreateCheckAnswerDto } from './dto/create-check_answer.dto';
import { UpdateCheckAnswerDto } from './dto/update-check_answer.dto';
import { InjectModel } from '@nestjs/sequelize';
import { CheckAnswer } from './models/check_answer.model';

@Injectable()
export class CheckAnswerService {
  constructor(
    @InjectModel(CheckAnswer) private CheckAnswerRepo: typeof CheckAnswer,
  ) {}

  create(createCheckAnswerDto: CreateCheckAnswerDto) {
    return this.CheckAnswerRepo.create(createCheckAnswerDto);
  }

  findAll() {
    return this.CheckAnswerRepo.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.CheckAnswerRepo.findOne({
      where: { id },
      include: { all: true },
    });
  }

  update(id: number, updateCheckAnswerDto: UpdateCheckAnswerDto) {
    return this.CheckAnswerRepo.update(updateCheckAnswerDto, { where: { id } });
  }

  remove(id: number) {
    return this.CheckAnswerRepo.destroy({ where: { id } });
  }
}
