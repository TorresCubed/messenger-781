import React, { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
} from "@material-ui/core";
import { login } from "./store/utils/thunkCreators";
import LoginImage from "./Images/LoginImage.png";
import bubble from "./Images/bubble.svg";
import useStyles from "./LoginStyles";


const Login = (props) => {
  const [windowSize, setWindowSize] = useState();
  const classes = useStyles(windowSize < 900);
  const history = useHistory();
  const { user, login } = props;

  const updateWindowSize = () => {
    setWindowSize(window.innerWidth)
  }
  
  useEffect(() => {
    window.addEventListener("resize", updateWindowSize);
    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);


  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid 
      container 
      className={classes.pageContainer}>
      <Grid className={classes.graphicWrapper}>
        <Box className={classes.overlay}>
          <img src={LoginImage} alt="Background"  className={classes.graphic}/>
            <Box className={classes.cover} />
            <img className={classes.bubble} src={bubble} alt="bubble"/> 
            <Typography className={classes.bubbleText}>
              Converse with anyone 
              <br/> 
              with any language
            </Typography> 
        </Box>
      </Grid>
      <Grid className={classes.contentWrapper}>
          <Box container item className={classes.pageChangeWrapper}>
            <Typography className={classes.statementText} >Dont have an account?</Typography>
            <Button className={classes.pageChange} onClick={() => history.push("/register")}>Create account</Button>
          </Box>
          <Box container item className={classes.formWrapper}>
            <form onSubmit={handleLogin}>
              <Typography className={classes.largeText}> 
                Welcome back!</Typography>
              <Grid>
                <Grid>
                  <FormControl className={classes.entries} margin="normal" required>
                    <TextField
                      aria-label="username"
                      label="Username"
                      name="username"
                      type="text"
                    />
                  </FormControl>
                </Grid>
                <FormControl margin="normal" required>
                  <TextField
                    label="password"
                    aria-label="password"
                    type="password"
                    name="password"
                  />
                </FormControl>
                <Grid>
                  <Button className={classes.submit} type="submit" variant="contained" >
                    Login
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
