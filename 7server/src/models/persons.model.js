const { Model, DataTypes } = require("sequelize");
// const { DEPARTMENT_TABLE } = require("./departments.model");

const PERSON_TABLE = "persons";

class Person extends Model {
  static config(sequelize) {
    return { 
      sequelize,
      tableName: PERSON_TABLE,
      modelName: "Person",
      timestamps: false,
    };
  }
}

const PersonSchema = {

  id: {
        allowNull: true,
        autoIncrement: true, // Auto-incremental
        primaryKey: true, // Clave primaria
        type: DataTypes.INTEGER, // Tipo entero
      },

  name: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "name",
  },

  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "lastName", 
  },

  tel: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "phone", 
  },

  pass: {  
    allowNull: false,
    type: DataTypes.STRING,
    field: "pass"
  },

  tokenResetPass: {  
    allowNull: true,
    type: DataTypes.STRING,
    field: "tokenResetPass"
  },

  email: {  
    allowNull: false,
    type: DataTypes.STRING,
    field: "email",
    validate: {
      isEmail: true,
    },
  },

  privacidad: {  
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: "privacidad",
  },

  Términosycondiciones: {  
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: "Términosycondiciones",
  },

  recibirinformación: {  
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: "recibirinformación",
  },


  confirmEmail: {  
    allowNull: true,
    type: DataTypes.BOOLEAN,
    field: "confirmEmail",
  },

  totalPoints: {  
    allowNull: true,
    type: DataTypes.INTEGER,
    field: "totalPoints",
  },

};

module.exports = { Person, PersonSchema, PERSON_TABLE };