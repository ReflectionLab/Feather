import { DataType } from 'sequelize-typescript';

async function up({ context: queryInterface }) {
  await queryInterface.createTable('articlelistrule', {
    id: {
      autoIncrement: true,
      type: DataType.INTEGER,
      allowNull: true,
      primaryKey: true,
    },
    area_name: {
      type: DataType.TEXT,
      allowNull: true,
    },
    area_url: {
      type: DataType.TEXT,
      allowNull: true,
    },
    author: {
      type: DataType.TEXT,
      allowNull: true,
    },
    chapter_find: {
      type: DataType.TEXT,
      allowNull: true,
    },
    class_name: {
      type: DataType.TEXT,
      allowNull: true,
    },
    class_url: {
      type: DataType.TEXT,
      allowNull: true,
    },
    col_type: {
      type: DataType.TEXT,
      allowNull: true,
    },
    detail_col_type: {
      type: DataType.TEXT,
      allowNull: true,
    },
    detail_find_rule: {
      type: DataType.TEXT,
      allowNull: true,
    },
    find_rule: {
      type: DataType.TEXT,
      allowNull: true,
    },
    firstheader: {
      type: DataType.TEXT,
      allowNull: true,
    },
    gmtcreate: {
      type: DataType.INTEGER,
      allowNull: true,
    },
    gmtmodified: {
      type: DataType.INTEGER,
      allowNull: true,
    },
    group_lpcolumn: {
      type: DataType.TEXT,
      allowNull: true,
    },
    lastusetime: {
      type: DataType.INTEGER,
      allowNull: true,
    },
    movie_find: {
      type: DataType.TEXT,
      allowNull: true,
    },
    prerule: {
      type: DataType.TEXT,
      allowNull: true,
    },
    sdetail_col_type: {
      type: DataType.TEXT,
      allowNull: true,
    },
    sdetail_find_rule: {
      type: DataType.TEXT,
      allowNull: true,
    },
    searchfind: {
      type: DataType.TEXT,
      allowNull: true,
    },
    search_url: {
      type: DataType.TEXT,
      allowNull: true,
    },
    sort_name: {
      type: DataType.TEXT,
      allowNull: true,
    },
    sort_url: {
      type: DataType.TEXT,
      allowNull: true,
    },
    title: {
      type: DataType.TEXT,
      allowNull: true,
    },
    titlecolor: {
      type: DataType.TEXT,
      allowNull: true,
    },
    ua: {
      type: DataType.TEXT,
      allowNull: true,
    },
    url: {
      type: DataType.TEXT,
      allowNull: true,
    },
    version: {
      type: DataType.INTEGER,
      allowNull: true,
    },
    year_name: {
      type: DataType.TEXT,
      allowNull: true,
    },
    year_url: {
      type: DataType.TEXT,
      allowNull: true,
    },
    last_chapter_rule: {
      type: DataType.TEXT,
      allowNull: true,
    },
    pages: {
      type: DataType.TEXT,
      allowNull: true,
    },
    storage: {
      type: DataType.TEXT,
      allowNull: true,
    },
    icon: {
      type: DataType.TEXT,
      allowNull: true,
    },
    type: {
      type: DataType.TEXT,
      allowNull: true,
    },
    proxy: {
      type: DataType.TEXT,
      allowNull: true,
    },
  });
}

async function down({ context: queryInterface }) {
  await queryInterface.dropTable('articlelistrule');
}

export default { up, down };
