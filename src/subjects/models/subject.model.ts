import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface SubjectAttr {
  name: string;
  image: string;
}

@Table({ tableName: 'subject' })
export class Subject extends Model<Subject, SubjectAttr> {
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
  })
  image: string;
}
