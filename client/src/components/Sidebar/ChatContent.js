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
  previewTextSeen: {
    fontSize: theme.typography.fontSize,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightBold,
    letterSpacing: -0.17,
  },
  previewTextUnseen: {
    fontSize: theme.typography.fontSize,
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
  const classes = useStyles();

  const { conversation } = props;
  const { latestMessageText, otherUser, unreadCount } = conversation;
  const previewTextStyle = (unreadCount && unreadCount > 0) ? "previewTextUnseen" : "previewTextSeen";

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
