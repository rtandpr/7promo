const { Person, PersonSchema } = require("./persons.model");
const { Img, ImgSchema } = require("./img.model");


function setupModels(sequelize) {
  Person.init(PersonSchema, Person.config(sequelize));
  Img.init(ImgSchema, Img.config(sequelize));
}

module.exports = setupModels;