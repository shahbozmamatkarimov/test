import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './models/role.model';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RoleService {
  constructor(@InjectModel(Role) private roleRepo: typeof Role) {}

  create(createRoleDto: CreateRoleDto) {
    return this.roleRepo.create(createRoleDto);
  }

  findAll() {
    return this.roleRepo.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.roleRepo.findOne({ where: { id }, include: { all: true } });
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return this.roleRepo.update(updateRoleDto, { where: { id } });
  }

  remove(id: number) {
    return this.roleRepo.destroy({ where: { id } });
  }
}
