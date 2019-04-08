var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

module.exports = function(sequlize, DataTypes) {
  var User =  sequlize.define(
    'user',
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'username'
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'password'
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'email'
      },
      phone: {
        type: DataTypes.CHAR(11),
        allowNull: false,
        field: 'phone'
      },
      card: {
        type: DataTypes.CHAR(18),
        allowNull: false,
        field: 'card'
      },
      sex: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'sex'
      }
    },
    {
      hooks: {
        beforeCreate: user => {
          user.password = user.encryptPassword(user.password);
        },
      },
      freezeTableName: true,
      tableName: 'vue_login',
      timestamps: false
    }
  );

  User.prototype.encryptPassword = function (password) { 
    return bcrypt.hashSync(password, 10);
  }

  User.prototype.toAuthJSON = function () {
    return {
      username: this.username,
      email: this.email,
      phone: this.phone,
      card: this.card,
      sex: this.sex,
      token: this.generateJWT()
    };
  }

  User.prototype.generateJWT = function () {  
    return jwt.sign({
      username: this.username,
      email: this.email,
      phone: this.phone,
      card: this.card,
      sex: this.sex,
    }, 'secretkey');
  }

  return User;
}