import { Injectable } from '@nestjs/common';
import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Level } from './models/level.model';

@Injectable()
export class LevelService {
  constructor(@InjectModel(Level) private LevelRepo: typeof Level) {}

  create(createLevelDto: CreateLevelDto) {
    return this.LevelRepo.create(createLevelDto);
  }

  findAll() {
    return this.LevelRepo.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.LevelRepo.findOne({ where: { id }, include: { all: true } });
  }

  update(id: number, updateLevelDto: UpdateLevelDto) {
    return this.LevelRepo.update(updateLevelDto, { where: { id } });
  }

  remove(id: number) {
    return this.LevelRepo.destroy({ where: { id } });
  }
}
