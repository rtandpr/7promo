const app = require("./app");
 const sequelize = require("./libs/sequelize");

const PORT = process.env.PORT || 3000;

async function startServer() {
  
  try {
    await sequelize.authenticate();
    console.log(
      "Connection to the database has been established successfully."
    );
  
    await sequelize.sync({ force: false }); // Ensure tables are created without dropping them
    console.log("Database synchronized");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

startServer();