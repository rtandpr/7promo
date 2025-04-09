const { Sequelize } = require("sequelize");
const { config } = require("../config/config");
const setupModels = require("../models/index");


 let sequelize = new Sequelize(
  `postgresql://postgres:TRaPozzkeedepRsfiPiZpKCEDqsXWpOU@ballast.proxy.rlwy.net:20677/railway`,
  {
    logging: false,
    native: false,
  }
); 

setupModels(sequelize);

module.exports = sequelize;