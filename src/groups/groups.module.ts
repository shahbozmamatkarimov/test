import { Module } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupsController } from './groups.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Group } from './models/group.model';
import { Staff } from '../staff/models/staff.model';

@Module({
  imports: [SequelizeModule.forFeature([Group, Staff])],
  controllers: [GroupsController],
  providers: [GroupsService],
})
export class GroupsModule {}
