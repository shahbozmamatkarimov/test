import { Module } from '@nestjs/common';
import { StaffGroupService } from './staff_group.service';
import { StaffGroupController } from './staff_group.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { StaffGroup } from './models/staff_group.model';
import { Staff } from '../staff/models/staff.model';
import { Group } from '../groups/models/group.model';

@Module({
  imports: [SequelizeModule.forFeature([StaffGroup, Staff, Group])],
  controllers: [StaffGroupController],
  providers: [StaffGroupService],
})
export class StaffGroupModule {}
