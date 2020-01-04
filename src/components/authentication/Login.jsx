import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import loginAction from "../../actions/loginAction";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 600
    }
  }
}));

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const loginState = useSelector(state => state.login);
  const dispatch = useDispatch();

  const emailRegex = RegExp(
    /(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)/
  );
  //this will be my compponent did mount
  useEffect(() => {
    console.log(loginState);

    localStorage.setItem("user", "");
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(loginAction(email, password));
  };

  const handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    switch (name) {
      case "email":
        console.log(emailRegex.test(value));
        emailRegex.test(value)
          ? setEmail(value) && setEmailError("")
          : setEmailError("Invalid email adress");
      case "password":
        setPassword(value);
    }
  };

  const classes = useStyles();
  return (
    <div className="login-page">
      <div className="content-container">
        <Container className="align-items-center">
          <Form className="login-form" onSubmit={handleSubmit}>
            <Row className="justify-content-md-center">
              <Col xs={12} md={4}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label style={{ color: "white" }}>
                    Email address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    onChange={handleChange}
                  />
                  {emailError ? (
                    <Form.Text className="text-danger">{emailError}</Form.Text>
                  ) : (
                    <Form.Text className="text-success">
                      Looks like a valid email
                    </Form.Text>
                  )}
                </Form.Group>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col xs={12} md={4}>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label style={{ color: "white" }}>Password</Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    style={{ color: "white" }}
                    type="checkbox"
                    label="Check me out"
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default Login;
