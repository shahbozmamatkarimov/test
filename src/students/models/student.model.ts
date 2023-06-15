import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Group } from '../../groups/models/group.model';

interface StudentAttr {
  full_name: string;
  image: string;
  phone: string;
  username: string;
  password: string;
  group_id: number;
}

@Table({ tableName: 'student' })
export class Student extends Model<Student, StudentAttr> {
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
  full_name: string;

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
  password: string;

  @ForeignKey(() => Group)
  @Column({
    type: DataType.INTEGER,
  })
  group_id: number;

  @BelongsTo(() => Group)
  groups: Group;
}
