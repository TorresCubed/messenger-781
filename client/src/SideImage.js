
import {
  Grid,
  Box,
  Typography,
} from "@material-ui/core";
import LoginImage from "./Images/LoginImage.png";
import bubble from "./Images/bubble.svg";
import useStyles from "./LoginStyles";


const SideImage = (props) => {
  const classes = useStyles(props.windowSize < 900);

  return (
    <Grid className={classes.graphicWrapper}>
        <Box className={classes.overlay}>
          <img src={LoginImage} alt="Background"  className={classes.graphic}/>
            <Box className={classes.cover} />
            <Box className={classes.logoWrapper}>
              <img className={classes.bubble} src={bubble} alt="bubble"/> 
              <Typography className={classes.bubbleText}>
                Converse with anyone 
                <br/> 
                with any language
              </Typography> 
            </Box>
        </Box>
      </Grid>
  );
};

export default SideImage