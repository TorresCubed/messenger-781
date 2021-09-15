import React, { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import { register } from "./store/utils/thunkCreators";
import useStyles from "./LoginStyles";
import LoginImage from "./Images/LoginImage.png";
import bubble from "./Images/bubble.svg";

const Login = (props) => {
  const [windowSize, setWindowSize] = useState();
  const classes = useStyles(windowSize < 900);
  const history = useHistory();
  const { user, register } = props;

  
  const updateWindowSize = () => {
    setWindowSize(window.innerWidth)
  }
  
  useEffect(() => {
    window.addEventListener("resize", updateWindowSize);
    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }

    await register({ username, email, password });
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
            <Typography className={classes.statementText} >Need to log in?</Typography>
            <Button className={classes.pageChange} onClick={() => history.push("/login")}>Login</Button>
          </Box>
          <Box container item className={classes.formWrapper}>
            <form onSubmit={handleRegister}>
              <Typography className={classes.largeText}> 
                Create an account.</Typography>
                <Grid>
                  <FormControl className={classes.entries} margin="normal" required>
                    <TextField
                      aria-label="username"
                      label="Username"
                      name="username"
                      type="text"
                      required
                    />
                  </FormControl>
                </Grid>
                <Grid>
                  <FormControl>
                    <TextField
                      label="E-mail address"
                      aria-label="e-mail address"
                      type="email"
                      name="email"
                      required
                    />
                  </FormControl>
                </Grid>
                <Grid>
                  <FormControl  margin="normal" required error={!!formErrorMessage.confirmPassword}>
                    <TextField
                      aria-label="password"
                      label="Password"
                      type="password"
                      inputProps={{ minLength: 6 }}
                      name="password"
                      required
                    />
                    <FormHelperText>
                      {formErrorMessage.confirmPassword}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid>
                  <FormControl margin="normal" required error={!!formErrorMessage.confirmPassword}>
                    <TextField
                      label="Confirm Password"
                      aria-label="confirm password"
                      type="password"
                      inputProps={{ minLength: 6 }}
                      name="confirmPassword"
                      required
                    />
                    <FormHelperText>
                      {formErrorMessage.confirmPassword}
                    </FormHelperText>
                  </FormControl>
                <Grid>
                  <Button className={classes.submit} type="submit" variant="contained" >
                    Create
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
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
