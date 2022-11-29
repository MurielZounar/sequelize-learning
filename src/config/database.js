module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '687435',
  database: 'sqlnode',
  define: {
    timestamps: true, //created_at, updated_at
    underscored: true //Define o nome das tabelas e campos com SnakeCase
  }
}
