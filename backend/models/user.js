'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    no_hp: DataTypes.STRING,
    alamat: DataTypes.STRING,
    password: DataTypes.STRING,
    id_level: DataTypes.INTEGER,
    image_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};