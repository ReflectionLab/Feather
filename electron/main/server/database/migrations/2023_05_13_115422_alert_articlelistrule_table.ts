async function up({ context: queryInterface }) {
  await queryInterface.addIndex('articlelistrule', ['title'], { name: 'titleIndex' });
  await queryInterface.addIndex('articlelistrule', ['group_lpcolumn'], { name: 'group_lpcolumnIndex' });
}

async function down({ context: queryInterface }) {
  await queryInterface.removeIndex('articlelistrule', ['title']);
  await queryInterface.removeIndex('articlelistrule', ['group_lpcolumn']);
}

export default { up, down };
