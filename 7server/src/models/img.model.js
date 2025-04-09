const { Model, DataTypes } = require("sequelize");
// const { DEPARTMENT_TABLE } = require("./departments.model");

const IMG_TABLE = "img";

class Img extends Model {
  static config(sequelize) {
    return { 
      sequelize,
      tableName: IMG_TABLE,
      modelName: "Img",
      timestamps: true,
    };
  }
}

const ImgSchema = {
    
  id: {
        allowNull: false,
        autoIncrement: true, // Auto-incremental
        primaryKey: true, // Clave primaria
        type: DataTypes.INTEGER, // Tipo entero
      },

  img: {
    allowNull: false,
    type: DataTypes.TEXT, 
    field: "img_voucher",
  },
  
  userId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "user_id",
  },

};

module.exports = { Img, ImgSchema, IMG_TABLE };