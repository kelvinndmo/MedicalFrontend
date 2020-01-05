import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import store from "../store";
import Login from "../components/authentication/Login";
import Error from "../components/Home/home";

const AppRouter = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="**" component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

export default AppRouter;
