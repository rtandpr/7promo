const express = require("express");

const personsRouter = require("./persons.router");
const imgRouter = require("./img.router");
// const prizesRouter = require("./prizes.router");

function routerApi(app) {
  const router = express.Router();
  app.use("/", router);
  router.use("/user", personsRouter);
  router.use("/img", imgRouter);
}




module.exports = routerApi;