const Sequelize = require("sequelize");
const db = require("../db");

const ReadStatus = db.define("readStatus", {
  messageId: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  read: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    default: false,
  }
});

module.exports = ReadStatus;
