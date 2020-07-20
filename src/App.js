import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Home, Login, Register } from "./components";
import { useSelector } from "react-redux";
require('dotenv').config();


function App() {
  const userHook = useSelector((state) => state.auth);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          {!userHook.email ? <Login /> : <Redirect to={"/"} />}
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route exact path="/">
          {userHook.email ? <Home /> : <Redirect to={"/login"} />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
