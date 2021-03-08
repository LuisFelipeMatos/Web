const { Sequelize } = require('sequelize');
const database = {};

const options = {
  username: 'postgres',
  password: 'luis',
  database: 'notas',
  host: 'localhost',
  dialect: 'postgres',
};

const sequelize = new Sequelize(options);
sequelize
  .authenticate()
  .then(() => console.log(`Conectado com sucesso ao banco ${options.database}`))
  .catch((err) => console.log(`Falha ao conectar ao banco ${options.database}: ${err}`));

database.sequelize = sequelize;
database.Sequelize = Sequelize;

module.exports = database;
