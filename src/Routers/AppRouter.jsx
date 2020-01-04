import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import store from "../store";
import Login from "../components/authentication/Login";

const AppRouter = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

export default AppRouter;
