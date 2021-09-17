import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  pageContainer:  windowSize => windowSize ? {
    width: "100%",
    height: "100vh"
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
    color: theme.palette.primary.main,
    fontWeight: 600,
    backgroundColor: theme.palette.primary.contrastText,
    filter: "drop-shadow(0px 2px 6px rgba(74,106,149,.2))",
    fontSize: theme.typography.fontSize,
    paddingLeft: theme.spacing(4.5),
    paddingRight: theme.spacing(4.5),
    padding: theme.spacing(2),
    borderRadius: "5px",
  },
  statementText: {
    fontSize: theme.typography.fontSize,
    color: theme.palette.secondary.main,
    textAlign:"center",
    padding: theme.spacing(2),
  },
  formWrapper:  windowSize => windowSize ? {
    marginTop: "30px",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignSelf: "flex-end"
  } : {
    position:"absolute",
    top: "45vh",
    left: "70%",
    transform: "translate( -50%,-50%)",
  }, 
  submit: {
    fontFamily: "'Montserrat', sans-serif",
    alignSelf: "center",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontWeight: "bold",
    fontSize:  theme.typography.pxToRem(16),
    paddingLeft: theme.spacing(6.5),
    paddingRight: theme.spacing(6.5),
    padding: theme.spacing(1.8),
    borderRadius: "3px", 
  },
  submitWrapper: {
    display: "flex",
    width: "80vw",
    maxWidth: "380px",
    justifyContent: "center",
    marginTop: "30px"
  },
  largeText: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: 600,
    lineHeight: "40px",
    fontSize:  theme.typography.pxToRem(26),
  },
  entries: {
    width: "80vw",
    maxWidth: "380px",
    fontsize:  theme.typography.fontSize,
    "& label.Mui-focused": {
      color: theme.palette.secondary.main,
    },
  },
  contentWrapper:  windowSize => windowSize ? {
    position: "relative",
    top: "-30vh",
    background: "white",
    width: "100%",
  } : {
    height: "100vh",
    width: "60%"
  },
  graphicWrapper: windowSize => windowSize ? {
    width: "100%",
  } : {
    height: "100vh",
    width: "40%",
    overflow: "hidden",
  },
  overlay:  windowSize => windowSize ? {
    height: "100%",
    backgroundImage: "linear-gradient(to bottom,rgb(58, 141, 255,.854), rgb(134, 185, 255,.85))"
  } : {
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
  logoWrapper: windowSize => windowSize ? {
    position:"absolute",
    top: "25vh",
    left: "50%",
    transform: "translate(-50%,-50%)",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  } : {
    position:"absolute",
    top: "40vh",
    left: "20%",
    transform: "translate(-50%,-50%)",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  },
  bubble: {
    alignSelf: "center",
    width: "67px",
    height: "66px",
    marginBottom: "30px",
  },
  bubbleText: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.pxToRem(26),
    lineHeight: "40px",
    width: "400px",
    textAlign: "center",
    color:  theme.palette.primary.contrastText,
  },
}));

export default useStyles;
