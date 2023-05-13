import { DataType } from 'sequelize-typescript';

async function up({ context: queryInterface }) {
  await articlelistrule(queryInterface);
  await bigtextdo(queryInterface);
  await bookmark(queryInterface);
  await downloadrecord(queryInterface);
  await playerposhis(queryInterface);
  await viewcollection(queryInterface);
  await viewhistory(queryInterface);
  await xiutanfavor(queryInterface);
}

async function down({ context: queryInterface }) {
  await queryInterface.dropTable('hiker_articlelistrule');
  await queryInterface.dropTable('hiker_bigtextdo');
  await queryInterface.dropTable('hiker_bookmark');
  await queryInterface.dropTable('hiker_downloadrecord');
  await queryInterface.dropTable('hiker_playerposhis');
  await queryInterface.dropTable('hiker_viewcollection');
  await queryInterface.dropTable('hiker_viewhistory');
  await queryInterface.dropTable('hiker_xiutanfavor');
}

async function articlelistrule(queryInterface) {
  await queryInterface.createTable('hiker_articlelistrule', {
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
  await queryInterface.addIndex('hiker_articlelistrule', ['title']);
  await queryInterface.addIndex('hiker_articlelistrule', ['group_lpcolumn']);
}

async function bigtextdo(queryInterface) {
  await queryInterface.createTable('hiker_bigtextdo', {
    id: {
      autoIncrement: true,
      type: DataType.INTEGER,
      allowNull: true,
      primaryKey: true,
    },
    key: {
      type: DataType.TEXT,
      allowNull: true,
    },
    value: {
      type: DataType.TEXT,
      allowNull: true,
    },
  });
  await queryInterface.addIndex('hiker_bigtextdo', ['key']);
}

async function bookmark(queryInterface) {
  await queryInterface.createTable('hiker_bookmark', {
    id: {
      autoIncrement: true,
      type: DataType.INTEGER,
      allowNull: true,
      primaryKey: true,
    },
    group_lpcolumn: {
      type: DataType.TEXT,
      allowNull: true,
    },
    order_lpcolumn: {
      type: DataType.INTEGER,
      allowNull: true,
    },
    title: {
      type: DataType.TEXT,
      allowNull: true,
    },
    url: {
      type: DataType.TEXT,
      allowNull: true,
    },
    dir: {
      type: DataType.INTEGER,
      allowNull: true,
    },
    parentid: {
      type: DataType.INTEGER,
      allowNull: true,
    },
    icon: {
      type: DataType.TEXT,
      allowNull: true,
    },
  });
  await queryInterface.addIndex('hiker_bookmark', ['group_lpcolumn']);
  await queryInterface.addIndex('hiker_bookmark', ['title']);
  await queryInterface.addIndex('hiker_bookmark', ['parentid']);
}

async function downloadrecord(queryInterface) {
  await queryInterface.createTable('hiker_downloadrecord', {
    id: {
      autoIncrement: true,
      type: DataType.INTEGER,
      allowNull: true,
      primaryKey: true,
    },
    currentspeed: {
      type: DataType.INTEGER,
      allowNull: true,
    },
    failedreason: {
      type: DataType.TEXT,
      allowNull: true,
    },
    fileextension: {
      type: DataType.TEXT,
      allowNull: true,
    },
    filename: {
      type: DataType.TEXT,
      allowNull: true,
    },
    finishedtime: {
      type: DataType.INTEGER,
      allowNull: true,
    },
    lastclearspeedtime: {
      type: DataType.INTEGER,
      allowNull: true,
    },
    order_lpcolumn: {
      type: DataType.INTEGER,
      allowNull: true,
    },
    savetime: {
      type: DataType.INTEGER,
      allowNull: true,
    },
    size: {
      type: DataType.INTEGER,
      allowNull: true,
    },
    sourcepagetitle: {
      type: DataType.TEXT,
      allowNull: true,
    },
    sourcepageurl: {
      type: DataType.TEXT,
      allowNull: true,
    },
    status: {
      type: DataType.TEXT,
      allowNull: true,
    },
    taskid: {
      type: DataType.TEXT,
      allowNull: true,
    },
    totaldownloaded: {
      type: DataType.INTEGER,
      allowNull: true,
    },
    url: {
      type: DataType.TEXT,
      allowNull: true,
    },
    videotype: {
      type: DataType.TEXT,
      allowNull: true,
    },
    film: {
      type: DataType.TEXT,
      allowNull: true,
    },
    subtitle: {
      type: DataType.TEXT,
      allowNull: true,
    },
    playpos: {
      type: DataType.TEXT,
      allowNull: true,
    },
    rootpath: {
      type: DataType.TEXT,
      allowNull: true,
    },
  });
  await queryInterface.addIndex('hiker_downloadrecord', ['filename']);
  await queryInterface.addIndex('hiker_downloadrecord', ['status']);
  await queryInterface.addIndex('hiker_downloadrecord', ['film']);
}

async function playerposhis(queryInterface) {
  await queryInterface.createTable('hiker_playerposhis', {
    id: {
      autoIncrement: true,
      type: DataType.INTEGER,
      allowNull: true,
      primaryKey: true,
    },
    playurl: {
      type: DataType.TEXT,
      allowNull: true,
    },
    pos: {
      type: DataType.INTEGER,
      allowNull: true,
    },
  });
  await queryInterface.addIndex('hiker_playerposhis', ['playurl']);
}

async function viewcollection(queryInterface) {
  await queryInterface.createTable('hiker_viewcollection', {
    id: {
      autoIncrement: true,
      type: DataType.INTEGER,
      allowNull: true,
      primaryKey: true,
    },
    curl: {
      type: DataType.TEXT,
      allowNull: true,
    },
    mititle: {
      type: DataType.TEXT,
      allowNull: true,
    },
    mtitle: {
      type: DataType.TEXT,
      allowNull: true,
    },
    desc_lpcolumn: {
      type: DataType.TEXT,
      allowNull: true,
    },
    extradata: {
      type: DataType.TEXT,
      allowNull: true,
    },
    group_lpcolumn: {
      type: DataType.TEXT,
      allowNull: true,
    },
    lastclick: {
      type: DataType.TEXT,
      allowNull: true,
    },
    params: {
      type: DataType.TEXT,
      allowNull: true,
    },
    picurl: {
      type: DataType.TEXT,
      allowNull: true,
    },
    time: {
      type: DataType.INTEGER,
      allowNull: true,
    },
    videourl: {
      type: DataType.TEXT,
      allowNull: true,
    },
  });
  await queryInterface.addIndex('hiker_viewcollection', ['curl']);
  await queryInterface.addIndex('hiker_viewcollection', ['mtitle']);
}

async function viewhistory(queryInterface) {
  await queryInterface.createTable('hiker_viewhistory', {
    id: {
      autoIncrement: true,
      type: DataType.INTEGER,
      allowNull: true,
      primaryKey: true,
    },
    group_lpcolumn: {
      type: DataType.TEXT,
      allowNull: true,
    },
    lastclick: {
      type: DataType.TEXT,
      allowNull: true,
    },
    params: {
      type: DataType.TEXT,
      allowNull: true,
    },
    picurl: {
      type: DataType.TEXT,
      allowNull: true,
    },
    rulebaseurl: {
      type: DataType.TEXT,
      allowNull: true,
    },
    time: {
      type: DataType.INTEGER,
      allowNull: true,
    },
    title: {
      type: DataType.TEXT,
      allowNull: true,
    },
    type: {
      type: DataType.TEXT,
      allowNull: true,
    },
    url: {
      type: DataType.TEXT,
      allowNull: true,
    },
    videourl: {
      type: DataType.TEXT,
      allowNull: true,
    },
    extradata: {
      type: DataType.TEXT,
      allowNull: true,
    },
  });
  await queryInterface.addIndex('hiker_viewhistory', ['group_lpcolumn']);
  await queryInterface.addIndex('hiker_viewhistory', ['title']);
  await queryInterface.addIndex('hiker_viewhistory', ['url']);
}

async function xiutanfavor(queryInterface) {
  await queryInterface.createTable('hiker_xiutanfavor', {
    id: {
      autoIncrement: true,
      type: DataType.INTEGER,
      allowNull: true,
      primaryKey: true,
    },
    dom: {
      type: DataType.TEXT,
      allowNull: true,
    },
    url: {
      type: DataType.TEXT,
      allowNull: true,
    },
  });
  await queryInterface.addIndex('hiker_xiutanfavor', ['dom']);
  await queryInterface.addIndex('hiker_xiutanfavor', ['url']);
}

export default { up, down };
