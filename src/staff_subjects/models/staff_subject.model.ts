import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Staff } from '../../staff/models/staff.model';
import { Subject } from '../../subjects/models/subject.model';

interface StaffSubjectAttr {
  staff_id: number;
  subject_id: number;
}

@Table({ tableName: 'staffsubject' })
export class StaffSubject extends Model<StaffSubject, StaffSubjectAttr> {
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

  @ForeignKey(() => Subject)
  @Column({
    type: DataType.INTEGER,
  })
  subject_id: number;

  @BelongsTo(() => Subject)
  subject: Subject;
}
