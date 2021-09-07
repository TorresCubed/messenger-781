import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from "../ActiveChat";
import moment from "moment";
import { connect } from "react-redux";
import { markMessagesAsRead } from "../../store/utils/thunkCreators";

const Messages = (props) => {
  const { markMessagesAsRead, messages, otherUser, userId, unreadMessages } = props;

  useEffect(() => {
    if(unreadMessages && unreadMessages.length > 0){
      const newMessages = [];
      unreadMessages.forEach(
        (message) => {
          if(message.senderId !== userId && message.read === false) {
            const newMessage = {...message};
            newMessage.read = true;
            newMessages.push(newMessage);
          }
        }
      )
      markMessagesAsRead(newMessages);
    }
  }, [markMessagesAsRead, unreadMessages, userId]);

  return (
    <Box>
      {messages.map((message) => {
        const time = moment(message.createdAt).format("h:mm");

        return message.senderId === userId ? (
          <SenderBubble key={message.id} text={message.text} time={time} />
        ) : (
          <OtherUserBubble key={message.id} text={message.text} time={time} otherUser={otherUser} />
        );
      })}
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    conversation: state.conversations
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    markMessagesAsRead: (update) => {
      dispatch(markMessagesAsRead(update));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);