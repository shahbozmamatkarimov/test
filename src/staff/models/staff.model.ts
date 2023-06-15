import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Role } from '../../role/models/role.model';
import { Level } from '../../level/models/level.model';

interface StaffAttr {
  fullname: string;
  level_id: number;
  image: string;
  phone: string;
  username: string;
  password: string;
  role_id: number;
  telegram: string;
  email: string;
}

@Table({ tableName: 'staff' })
export class Staff extends Model<Staff, StaffAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  fullname: string;

  @ForeignKey(() => Level)
  @Column({
    type: DataType.INTEGER,
  })
  level_id: number;

  @BelongsTo(() => Level)
  levels: Level;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  image: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  username: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @ForeignKey(() => Role)
  @Column({
    type: DataType.INTEGER,
  })
  role_id: number;

  @BelongsTo(() => Role)
  roles: Role;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  telegram: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;
}
