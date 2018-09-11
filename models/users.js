module.exports = function (sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1, 30],
          msg: "Please enter a first name"
        }
      }
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1, 30],
          msg: "Please enter a last name"
        }
      }
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [6, 128],
          msg: "Email address must be between 6 and 128 characters in length"
        },
        isEmail: {
          msg: "Please enter a valid email address"
        }
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6, 128],
          msg: "Password must be at least 6 characters in length"
        }
      }
    },
    phoneNumber: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        len: {
          args: 10,
          msg: "Please enter a valid phone number"
        }
      }
    },
    age: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        len: {
          args: [2, 3]
        }
      }
    },
    gender: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  });
  return Users;
};
