const Conversation = require("./conversation");
const User = require("./user");
const Message = require("./message");
const ReadStatus = require("./readStatus");
const Members = require("./members");

// associations

User.hasMany(Members);
Conversation.hasMany(Members);
Conversation.hasMany(Message);
Message.hasMany(ReadStatus);
Members.belongsTo(User, { as: "userId" });
Message.belongsTo(Conversation, { as: "conversationId"});
Message.belongsTo(Conversation, { as: "conversationId"});
ReadStatus.belongsTo(Message, {as: "messageId"})

module.exports = {
  User,
  Conversation,
  Message,
  ReadStatus,
  Members
};
