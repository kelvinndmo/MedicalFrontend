import axios from "axios";
import { LOGIN_ACTION } from "./types";

const loginAction = (email, password) => async dispatch => {
  console.log(email, password);
  const userData = { email, password };

  await axios
    .post("http://127.0.0.1:8000/api/v1/authentication/login", userData, {
      headers: { "Content-Type": "application/json" }
    })
    .then(res => {
      console.log(res, "WWWWWWWWW");
      return res.data;
    })
    .then(user => {
      console.log(user);
      dispatch({
        type: LOGIN_ACTION,
        payload: user
      });
    });
};

export default loginAction;
