const db = require("../db");

const Conversation = db.define("conversation", {});

// find conversation given two user Ids

module.exports = Conversation;
