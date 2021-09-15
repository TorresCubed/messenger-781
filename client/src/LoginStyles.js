import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  pageContainer:  windowSize => windowSize ? {
    width: "100%",
  } : {
    height: "100vh",
  },
  pageChangeWrapper: {
    marginRight: "4vw",
    marginTop: "2vh",
    display: "flex",
    justifyContent: "flex-end"
  },
  pageChange: {
    fontFamily: "'Montserrat', sans-serif",
    backgroundColor: theme.palette.primary.contrastText,
    boxShadow: "0px 0px 10px #DCDCDC",
    color: theme.palette.primary.main,
    fontSize: theme.typography.fontSize,
    paddingLeft: theme.spacing(4.5),
    paddingRight: theme.spacing(4.5),
    padding: theme.spacing(2),
    borderRadius: theme.spacing(.5),
  },
  statementText: {
    fontSize: theme.typography.fontSize,
    color: theme.palette.secondary.main,
    textAlign:"right",
    padding: theme.spacing(2),
  },
  formWrapper:  windowSize => windowSize ? {
    position:"absolute",
    width: "300px",
    top: "55vmin",
    left: "60%",
    transform: "translate( -50%,-50%)",
  } : {
    position:"absolute",
    top: "40vmin",
    left: "75%",
    transform: "translate( -50%,-50%)",
  }, 
  submit: {
    fontFamily: "'Montserrat', sans-serif",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontSize:  theme.typography.fontSize,
    paddingLeft: theme.spacing(6.5),
    paddingRight: theme.spacing(6.5),
    padding: theme.spacing(1.8),
    borderRadius: theme.spacing(.5), 
  },
  largeText: {
    fontSize:  theme.typography.pxToRem(24),
    fontWeight: theme.typography.fontWeightBold,
  },
  entries: {
    fontsize:  theme.typography.pxToRem(18),
    "& label.Mui-focused": {
      color: theme.palette.secondary.main,
    },
  },
  contentWrapper:  windowSize => windowSize ? {
    position: "relative",
    top: "-55vh",
    background: "white",
    width: "100%",
    height: "80vmax"
  } : {
    height: "100vh",
    width: "50%"
  },
  graphicWrapper: windowSize => windowSize ? {
    width: "100%",
  } : {
    height: "100vh",
    width: "50%",
    overflow: "hidden",
  },
  overlay: {
    height: "100vh",
    backgroundImage: "linear-gradient(to bottom,rgb(58, 141, 255,.854), rgb(134, 185, 255,.85))"
  },
  cover: windowSize => windowSize ? {
    height: "0%",
  } : {
    zIndex: -3,
    position: "relative",
    top: "-1vh",
    backgroundColor: "#9bc3fe",
    height: "100vh"
  },
  graphic: {
    position:"relative",
    width:"100%",
    zIndex: -2
  },
  bubble: windowSize => windowSize ? {
    position:"absolute",
    top: "30vmin",
    left: "50%",
    transform: "translate(-50%,-50%)",
  } : {
    position:"absolute",
    top: "35vmin",
    left: "25%",
    transform: "translate(-50%,-50%)",
  },
  bubbleText: windowSize => windowSize ? {
    fontWeight:theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(30),
    position:"absolute",
    width: "400px",
    top: "50vmin",
    textAlign: "center",
    left: "50%",
    transform: "translate(-50%,-50%)",
    color:  theme.palette.primary.contrastText,
  } : {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(30),
    textAlign: "center",
    position:"absolute",
    width: "400px",
    top: "45vmin",
    left: "25%",
    transform: "translate(-50%,-50%)",
    color:  theme.palette.primary.contrastText,
  },
}));

export default useStyles;
