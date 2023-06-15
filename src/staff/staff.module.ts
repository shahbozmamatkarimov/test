import { Module } from '@nestjs/common';
import { StaffService } from './staff.service';
import { StaffController } from './staff.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from '../role/models/role.model';
import { Level } from '../level/models/level.model';
import { Staff } from './models/staff.model';

@Module({
  imports: [SequelizeModule.forFeature([Staff, Role, Level])],
  controllers: [StaffController],
  providers: [StaffService],
})
export class StaffModule {}
