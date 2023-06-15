import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Question } from '../../question/models/question.model';

interface AnswerAttr {
  answer: string;
  is_true: boolean;
  question_id: number;
}

@Table({ tableName: 'answer' })
export class Answer extends Model<Answer, AnswerAttr> {
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
  answer: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  is_true: boolean;

  @ForeignKey(() => Question)
  @Column({
    type: DataType.INTEGER,
  })
  question_id: number;

  @BelongsTo(() => Question)
  questions: Question;
}
