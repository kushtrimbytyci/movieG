import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router";
import "./index.css";
import "rsuite/dist/styles/rsuite-default.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthState from './Context/Auth/AuthState'
import ProfileState from './Context/Profiles/ProfileState'
import ReactGA from 'react-ga'


ReactGA.initialize('UA-167897532-1')

ReactDOM.render(<AuthState><ProfileState><Router/></ProfileState></AuthState>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

