import { Module } from '@nestjs/common';
import { LevelService } from './level.service';
import { LevelController } from './level.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Level } from './models/level.model';

@Module({
  imports: [SequelizeModule.forFeature([Level])],
  controllers: [LevelController],
  providers: [LevelService],
})
export class LevelModule {}
