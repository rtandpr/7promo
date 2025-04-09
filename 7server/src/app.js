const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const routerApi = require("./routes"); 
// En tu archivo principal, por ejemplo, app.js o server.js
// require("./routes/dailyWinnerEmails");


dotenv.config();
const app = express();
 
app.use(cors());

app.use(express.json({ limit: '100mb' })); // Aumenta el límite a 10MB
app.use(express.urlencoded({ limit: '100mb', extended: true }));


app.use(express.json());



app.get("/", (req, res) => {
  res.send("Backend con NodeJS - Express + CRUD API REST + MySQL");
});

routerApi(app);

module.exports = app;