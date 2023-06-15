import { Module } from '@nestjs/common';
import { TestGroupService } from './test-group.service';
import { TestGroupController } from './test-group.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { TestGroup } from './models/test-group.model';
import { Subject } from '../subjects/models/subject.model';

@Module({
  imports: [SequelizeModule.forFeature([TestGroup, Subject])],
  controllers: [TestGroupController],
  providers: [TestGroupService],
})
export class TestGroupModule {}
