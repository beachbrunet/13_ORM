// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model --added
//database model via instructions
Product.init(
  {
    id: {
      type: Datatypes.INTEGER,
      allowNULL: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: Datatypes.STRING,
      allowNULL: false,
    },
    price: {
      type: Datatypes.DECIMAL,
      allowNULL: false,
      validate: {
        isDecimal: true,
      },
    },
    stock: {
      type: Datatypes.INTEGER,
      allowNULL: false,
      defaultValue: "10",
      validate: {
        isNumeric: true,
      },
    },
    product_name: {
      type: Datatypes.INTEGER,
      allowNULL: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "category",
        key: "ID",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
