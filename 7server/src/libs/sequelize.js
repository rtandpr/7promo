const { Sequelize } = require("sequelize");
const { config } = require("../config/config");
const setupModels = require("../models/index");


 let sequelize = new Sequelize(
  `postgresql://postgres:OODUQHVlyRDJTLQecaEAZizvoyakERhA@switchback.proxy.rlwy.net:22635/railway`,
  {
    logging: false,
    native: false,
  }
); 

setupModels(sequelize);

module.exports = sequelize;