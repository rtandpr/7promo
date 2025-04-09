require('dotenv').config();


// postgresql://postgres:bnYAeYHrjecWGsifltYlBUIsXiqirRUX@viaduct.proxy.rlwy.net:24242/railway
const config = {
  dbName: process.env.DB_NAME || 'railway',
  dbUser: process.env.DB_USER || 'postgres',
  dbPassword: process.env.DB_PASSWORD || 'bnYAeYHrjecWGsifltYlBUIsXiqirRUX',
  dbHost: process.env.DB_HOST || 'viaduct.proxy.rlwy.net',
  dbPort: process.env.DB_PORT || 24242,
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
};

module.exports = { config };