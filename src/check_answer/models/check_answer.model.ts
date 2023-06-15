import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Question } from '../../question/models/question.model';
import { Answer } from '../../answers/models/answer.model';
import { TestResult } from '../../test_results/models/test_result.model';

interface CheckAnswerAttr {
  answer_id: number;
  question_id: number;
  test_result_id: number;
}

@Table({ tableName: 'checkanswer' })
export class CheckAnswer extends Model<CheckAnswer, CheckAnswerAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ForeignKey(() => Answer)
  @Column({
    type: DataType.INTEGER,
  })
  answer_id: number;

  @BelongsTo(() => Answer)
  answers: string[];

  @ForeignKey(() => Question)
  @Column({
    type: DataType.INTEGER,
  })
  question_id: number;

  @BelongsTo(() => Question)
  questions: Question;

  @ForeignKey(() => TestResult)
  @Column({
    type: DataType.INTEGER,
  })
  test_result_id: number;

  @BelongsTo(() => TestResult)
  testresults: TestResult;
}
