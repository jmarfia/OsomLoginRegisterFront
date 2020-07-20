import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";


const Register = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [sexo, setSexo] = useState("");
  const [mutualista, setMutualista] = useState("");

  

  function getUserInfo() {
    let user = {};
    user.firstName = firstName
    user.lastName = lastName
    user.email = email
    user.address = address
    user.phone = phone
    user.password = password
    user.sexo = sexo
    user.mutualista = mutualista

    return user;
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    let User = getUserInfo();

    let options = {
      method: "post",
      url: `http://localhost:${process.env.REACT_APP_BACKEND_PORT}/api/register`,
      crossdomain: true,
      data: User,
    };
    axios(options)
      .then((response) => {
        let totalData = {
          firstName: User.firstName,
          email: User.email,
          userToken: response.data.token,
        };
        
        dispatch({
          type: "REGISTER",
          payload: totalData,
        });
      })
      .then(() => {
        history.push("/");
      });
  };

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <ValidatorForm onSubmit={handleSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextValidator
                autoComplete="fname"
                name="first_name"
                variant="outlined"
                required
                fullWidth
                id="first_name"
                label="First Name"
                onChange={e => setFirstName( e.target.value )}
                value={firstName}
                validators={["required",]}
                errorMessages={["this field is required", ]}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextValidator
                variant="outlined"
                required
                fullWidth
                id="last_name"
                label="Last Name"
                onChange={e => setLastName( e.target.value )}
                value={lastName}
                validators={["required",]}
                errorMessages={["this field is required", ]}
                name="last_name"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                onChange={e => setEmail( e.target.value )}
                value={email}
                validators={["required", "isEmail"]}
                errorMessages={["this field is required", "email is not valid"]}
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                variant="outlined"
                required
                fullWidth
                id="address"
                label="Address"
                onChange={e => setAddress( e.target.value )}
                value={address}
                validators={["required",]}
                errorMessages={["this field is required", ]}
                name="address"
                autoComplete="address"
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="Phone"
                onChange={e => setPhone( e.target.value )}
                value={phone}
                validators={["required",'matchRegexp:^[0-9]*$']}
                errorMessages={["this field is required", "only numbers" ]}
                name="phone"
                autoComplete="phone"
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                variant="outlined"
                required
                fullWidth
                id="gender"
                label="Gender"
                onChange={e => setSexo( e.target.value )}
                value={sexo}
                validators={["required",]}
                errorMessages={["this field is required", ]}
                name="gender"
                autoComplete="gender"
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                variant="outlined"
                required
                fullWidth
                id="mutualista"
                label="Healt Clinic"
                onChange={e => setMutualista( e.target.value )}
                value={mutualista}
                validators={["required",]}
                errorMessages={["this field is required", ]}
                name="mutualista"
                autoComplete="Healt Clinic"
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                onChange={e => setPassword( e.target.value )}
                value={password}
                type="password"
                validators={["required",]}
                errorMessages={["this field is required", ]}
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </ValidatorForm>
      </div>
      <Footer />
    </Container>
  );
};

export default Register;
