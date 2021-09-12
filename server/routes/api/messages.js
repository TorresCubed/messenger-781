const router = require("express").Router();
const { Conversation, Message } = require("../../db/models");
const onlineUsers = require("../../onlineUsers");

// expects {recipientId, text, conversationId } in body (conversationId will be null if no conversation exists yet)
router.post("/", async (req, res, next) => {
  try {
    if (!req.user) {
      return res.sendStatus(401);
    }
    const senderId = req.user.id;
    const { recipientId, text, conversationId, sender, read } = req.body;

    // if we already know conversation id, we can save time and just add it to message and return
    if (conversationId) {
      const message = await Message.create({ senderId, text, conversationId, read });
      return res.json({ message, sender });
    }
    // if we don't have conversation id, find a conversation to make sure it doesn't already exist
    let conversation = await Conversation.findConversation(
      senderId,
      recipientId
    );

    if (!conversation) {
      // create conversation
      conversation = await Conversation.create({
        user1Id: senderId,
        user2Id: recipientId,
      });
      if (onlineUsers.includes(sender.id)) {
        sender.online = true;
      }
    }
    const message = await Message.create({
      senderId,
      text,
      conversationId: conversation.id,
      read,
    });
    res.json({ message, sender });
  } catch (error) {
    next(error);
  }
});

router.put("/:conversationId", async (req, res, next) => {
  try{
    const { conversationId, otherUser } = req.body;

    const conversation = await Conversation.findOne({where: {id:conversationId}})

    if (!req.user || (conversation.dataValues.user1Id !== req.user.dataValues.id && conversation.dataValues.user2Id !==req.user.dataValues.id)) {
      return res.sendStatus(401);
    }
    
    const newMessage = await Message.update({read:true}, {where: {conversationId:conversationId, senderId:otherUser.id}});
    
    res.json({ newMessage });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
