import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const Logout = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  function exit() {
    dispatch({
      type: "LOGOUT",
    });
    history.push("/login");
  }
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
    <>
      <Button
        className={classes.submit}
        fullWidth
        variant="contained"
        color="secondary"
        onClick={exit}
      >
        Logout
      </Button>
    </>
  );
};

export default Logout;
