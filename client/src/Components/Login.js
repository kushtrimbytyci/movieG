import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../Context/Auth/authContext";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock,
  ButtonToolbar,
  Button,
} from "rsuite";
import { Alert } from "rsuite";

Alert.config({ top: 90 });

const Login = (props) => {
  const authCon = useContext(AuthContext);
  useEffect(() => {
    if (authCon.isAuthenticated) {
      props.history.push("/adminDashboard");
    }
    if (authCon.error !== "") {
      Alert.warning("Wrong password", 3000);
    }
    //eslint-disable-next-line
  }, [authCon.isAuthenticated, authCon.error]);
  const [user, setUser] = useState({ email: "", password: "" });

  const handleUser = (value, event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (value, event) => {
    event.preventDefault();
    if ((user.email && user.password) === "") {
      Alert.warning("Email and password missing", 3000);
    } else if (user.email === "") {
      Alert.warning("Username missing");
    } else if (user.password === "") {
      Alert.warning("Password missing");
    } else {
      authCon.login(user);
    }
  };

  
  return (
    <div className='login'>
      <div className='login2'>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <ControlLabel>Username</ControlLabel>
            <FormControl name='email' onChange={handleUser} />
            <HelpBlock>Required</HelpBlock>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Password</ControlLabel>
            <FormControl
              name='password'
              type='password'
              onChange={handleUser}
            />
          </FormGroup>
          <FormGroup>
            <ButtonToolbar>
              <Button appearance='primary' type='submit'>
                Submit
              </Button>
              <Button appearance='default'>Cancel</Button>
            </ButtonToolbar>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
};

export default Login;
