import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'cats' })
export default class Cat extends Model {
  @Column({ references: 'name' })
  name: string;
}
