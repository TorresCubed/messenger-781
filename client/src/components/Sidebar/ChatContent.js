import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 20,
    flexGrow: 1,
    flexDirection: "row",
  },
  username: {
    fontWeight: "bold",
    letterSpacing: -0.2,
  },
  previewTextSeen: {
    fontSize: 14,
    color: "#9CADC8",
    fontWeight: "500",
    letterSpacing: -0.17,
  },
  previewTextUnseen: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
    letterSpacing: -0.17,
  },
  unreadNotifications: {
    fontSize: 10,
    color: "#FFFFFF",
    borderRadius: "50px",
    border: "1px solid white",
    padding: "3px",
    "padding-left": "8px",
    "padding-right": "8px",
    backgroundColor: "#3f92ff",
  }
}));

const ChatContent = (props) => {
  const classes = useStyles();

  const { conversation } = props;
  const { latestMessageText, otherUser, unreadMessages } = conversation;
  const previewTextStyle = (unreadMessages && unreadMessages.length > 0) ? "previewTextUnseen" : "previewTextSeen";

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        <Typography className={classes[previewTextStyle]}>
          {latestMessageText}
        </Typography>
      </Box>
      <Box>
        {((unreadMessages && unreadMessages.length > 0) ? true : false)  && 
          (<Typography className={classes.unreadNotifications}>
            {unreadMessages.length}
          </Typography>)
        }
      </Box>
    </Box>
  );
};

export default ChatContent;
