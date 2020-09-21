// import exphbs from 'express-handlebars';
// import path from 'path';
import Sequelize from 'sequelize';

const database = new Sequelize('Niyiragira','postgres','gerard123',{
    host: 'localhost',
    dialect: 'postgres',
    operatorAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquired: 30000,
      idle: 10000
    }
  })

  export default database;