module.exports = function (sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1, 30],
          msg: "Please enter a first name"
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1, 30],
          msg: "Please enter a last name"
        }
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      isNumeric: true,
    },
    email: {
      type: DataTypes.STRING,
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
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6, 128],
          msg: "Password must be at least 6 characters in length"
        }
      }
    },
    confirmPassword: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6, 128],
          msg: "Password must be at least 6 characters in length"
        }
      }
    },
    // start socials columns
    facebookEntry: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    twitterEntry: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    instagramEntry: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    snapchatEntry: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  
  /**
   * Declare a function on each instance of a user record
   * that accepts a password and compares it to the password of the user record itself
   * 
   * @param {string} password 
   * @return {boolean}
   */
  Users.prototype.verifyPassword = function(password) {
    return password === this.password;
  }

  return Users;
};