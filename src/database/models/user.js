
"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    username: DataTypes.STRING,
    emaill: DataTypes.STRING
  }, {});
  User.associate = function() {
    // associations can be defined here
  };
  return User;
};