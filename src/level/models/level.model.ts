import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface LevelAttr {
  level: string;
}

@Table({ tableName: 'level' })
export class Level extends Model<Level, LevelAttr> {
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
  level: string;
}
