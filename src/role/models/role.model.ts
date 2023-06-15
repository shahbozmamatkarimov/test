import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface RoleAttr {
  name: string;
  description: string;
}

@Table({ tableName: 'level' })
export class Role extends Model<Role, RoleAttr> {
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
  description: string;
}
