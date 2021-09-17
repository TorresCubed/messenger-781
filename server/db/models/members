const { Op, Sequelize } = require("sequelize");
const db = require("../db");

const Members = db.define("members", {
  conversationId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
});


Members.findConversation = async function (members) {
  const conversation = await Members.findOne({
    where: {
      userId: {
        [Op.or]: members
      }
    }
  });

  // return conversation or null if it doesn't exist
  return conversation;
};


// find conversation given two user Ids

module.exports = Members;
