const { Sequelize } = require("sequelize/types");
const db = require("../db");

const Conversation = db.define("conversation", {
  title: {
    type: Sequelize.STRING
  }
});

// find conversation given two user Ids

module.exports = Conversation;
