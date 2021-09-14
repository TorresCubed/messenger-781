import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from "../ActiveChat";
import moment from "moment";
import { connect } from "react-redux";
import { markMessagesAsRead } from "../../store/utils/thunkCreators";

const Messages = (props) => {
  const { messages, otherUser, userId, conversationId, markMessagesAsRead } = props;

  
  useEffect(() => {
    if(messages[messages.length-1]?.senderId === otherUser.id){
      markMessagesAsRead({
        conversationId:conversationId,
        otherUser:otherUser
      });
    }
  }, [conversationId, markMessagesAsRead, otherUser, messages.length, messages, userId]);
  
    
 
  return (
    <Box>
      {messages.map((message) => {
        const time = moment(message.createdAt).format("h:mm");

        return message.senderId === userId ? (
          <SenderBubble key={message.id} text={message.text} time={time} identifyLastRead={message.id === otherUser.lastReadMessageId} otherUser={otherUser} />
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
