import { Table, Column, Model, DataType, Index, BeforeCreate, BeforeUpdate } from 'sequelize-typescript';

@Table({
  tableName: 'articlelistrule',
  timestamps: false,
})
export default class ArticleListRule extends Model {
  @Column({
    autoIncrement: true,
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
  })
  readonly id: number;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  area_name: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  area_url: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  author: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  chapter_find: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  class_name: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  class_url: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  col_type: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  detail_col_type: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  detail_find_rule: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  find_rule: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  firstheader: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  gmtcreate: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  gmtmodified: string;

  @Index
  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  group_lpcolumn: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
    defaultValue: '0',
  })
  lastusetime: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  movie_find: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  prerule: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  sdetail_col_type: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  sdetail_find_rule: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  searchfind: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  search_url: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  sort_name: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  sort_url: string;

  @Index
  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  title: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  titlecolor: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  ua: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  url: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  version: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  year_name: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  year_url: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  last_chapter_rule: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  pages: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  storage: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  icon: string;

  @Index
  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  type: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  proxy: string;

  @BeforeCreate
  static autoFillGmt(instance: ArticleListRule) {
    instance.gmtcreate = new Date().getTime().toString();
    instance.gmtmodified = new Date().getTime().toString();
  }

  @BeforeUpdate
  static autoFillGmtModified(instance: ArticleListRule) {
    instance.gmtmodified = new Date().getTime().toString();
  }
}
