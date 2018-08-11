'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    password2: DataTypes.STRING,
    date: DataTypes.TIMESTAMP
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
