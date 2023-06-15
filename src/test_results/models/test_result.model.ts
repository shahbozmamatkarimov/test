import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { TestGroup } from '../../test-group/models/test-group.model';
import { Student } from '../../students/models/student.model';

interface TestResultAttr {
  student_id: number;
  test_group_id: number;
  correct_count: number;
}

@Table({ tableName: 'TestResult' })
export class TestResult extends Model<TestResult, TestResultAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Student)
  @Column({
    type: DataType.INTEGER,
  })
  student_id: number;

  @BelongsTo(() => Student)
  students: Student;

  @ForeignKey(() => TestGroup)
  @Column({
    type: DataType.INTEGER,
  })
  test_group_id: number;

  @BelongsTo(() => TestGroup)
  test_groups: TestGroup;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  correct_count: number;
}
