import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Group } from './models/group.model';

@Injectable()
export class GroupsService {
  constructor(@InjectModel(Group) private GroupRepo: typeof Group) {}

  create(createGroupDto: CreateGroupDto) {
    return this.GroupRepo.create(createGroupDto);
  }

  findAll() {
    return this.GroupRepo.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.GroupRepo.findOne({ where: { id }, include: { all: true } });
  }

  update(id: number, updateGroupDto: UpdateGroupDto) {
    return this.GroupRepo.update(updateGroupDto, { where: { id } });
  }

  remove(id: number) {
    return this.GroupRepo.destroy({ where: { id } });
  }
}
