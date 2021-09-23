const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProductTag extends Model {}

// define columns --added here
ProductTag.init(
  {
    id: {
      type: Datatypes.INTEGER,
      allowNULL: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: Datatypes.INTEGER,
      references: {
        model: "product",
        key: "ID",
      },
    },
    tag_id: {
      type: Datatypes.INTEGER,
      references: {
        model: "tag",
        key: "ID",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

module.exports = ProductTag;
