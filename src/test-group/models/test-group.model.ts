import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Subject } from '../../subjects/models/subject.model';

interface TestGroupAttr {
  subject_id: number;
  tests_count: number;
  test_title: string;
  test_time: string;
}

@Table({ tableName: 'testgroup' })
export class TestGroup extends Model<TestGroup, TestGroupAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Subject)
  @Column({
    type: DataType.INTEGER,
  })
  subject_id: number;

  @BelongsTo(() => Subject)
  subjects: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  tests_count: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  test_title: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  test_time: string;
}
