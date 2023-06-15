import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Staff } from '../../staff/models/staff.model';
import { Group } from '../../groups/models/group.model';

interface StaffGroupAttr {
  staff_id: number;
  group_id: number;
}

@Table({ tableName: 'staffgroup' })
export class StaffGroup extends Model<StaffGroup, StaffGroupAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Staff)
  @Column({
    type: DataType.INTEGER,
  })
  staff_id: number;

  @BelongsTo(() => Staff)
  staffs: Staff;

  @ForeignKey(() => Group)
  @Column({
    type: DataType.INTEGER,
  })
  group_id: number;

  @BelongsTo(() => Group)
  group: Group;
}
