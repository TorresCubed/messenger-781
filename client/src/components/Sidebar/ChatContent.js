import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: theme.spacing(2.5),
    flexGrow: 1,
    flexDirection: "row",
  },
  username: {
    fontWeight: theme.typography.fontWeightBold,
    letterSpacing: -0.2,
  },
  previewText:  props => props.conversation.unreadCount && props.conversation.unreadCount > 0 
    ? {
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    letterSpacing: -0.17,
  } : {
    fontSize: theme.typography.fontSize,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightBold,
    letterSpacing: -0.17,
  },
  unreadNotifications: {
    fontSize: theme.typography.pxToRem(10),
    color: theme.palette.primary.contrastText,
    borderRadius: theme.spacing(6),
    margin: theme.spacing(.5),
    padding: theme.spacing(.4),
    "padding-left": theme.spacing(),
    "padding-right": theme.spacing(),
    backgroundColor: theme.palette.primary.main,
  }
}));

const ChatContent = (props) => {
  const classes = useStyles(props);

  const { conversation } = props;
  const { latestMessageText, otherUser, unreadCount } = conversation;

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        <Typography className={classes.previewText}>
          {latestMessageText}
        </Typography>
      </Box>
      <Box>
        {unreadCount > 0  && 
          (<Typography className={classes.unreadNotifications}>
            {unreadCount}
          </Typography>)
        }
      </Box>
    </Box>
  );
};

export default ChatContent;
