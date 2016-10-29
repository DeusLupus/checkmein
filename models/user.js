"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    
    email: DataTypes.STRING,
    password_hash: DataTypes.STRING
  }, {




    // define the table's name
    tableName: 'users',

    classMethods: {
      associate: function(models) {
        User.hasMany(models.Cat, {
          onDelete: "CASCADE",
          hooks: true,
          foreignKey: {
            allowNull: false
          }
        })
      }
    }
  });

  return User;
};
