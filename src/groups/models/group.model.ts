import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Staff } from '../../staff/models/staff.model';

interface GroupAttr {
  name: string;
  year: string;
}

@Table({ tableName: 'group' })
export class Group extends Model<Group, GroupAttr> {
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
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: Date.now(),
  })
  year: string;

  @ForeignKey(() => Staff)
  @Column({
    type: DataType.INTEGER,
  })
  staff_id: number;

  @BelongsTo(() => Staff)
  staffs: Staff;
}
