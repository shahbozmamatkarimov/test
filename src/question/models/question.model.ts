import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { TestGroup } from '../../test-group/models/test-group.model';

interface QuestionAttr {
  question: string;
  is_multi_answer: boolean;
}

@Table({ tableName: 'question' })
export class Question extends Model<Question, QuestionAttr> {
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
  question: string;

  @ForeignKey(() => TestGroup)
  @Column({
    type: DataType.INTEGER,
  })
  test_group_id: number;

  @BelongsTo(() => TestGroup)
  testgroup: TestGroup;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  is_multi_answer: boolean;
}
