import React, { useState, useEffect, useContext, memo } from "react";
import io from "socket.io-client";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import onlineIcon from "./images/onlineIcon.png";
import closeIcon from "./images/closeIcon.png";
import authContext from "../Context/Auth/authContext";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToBottom from "react-scroll-to-bottom";

// let serverUrl = 'https://gomovie.site ///fixed connection error when I deployed it
let serverUrl = "http://localhost:5000/";
let socket = io.connect(serverUrl);
const Chat = (props) => {
  const [state, setState] = useState({
    message: "",
    name: props.match.params.user,
  });
  const [chat, setChat] = useState([]);
  const authCon = useContext(authContext);

  const renderChat = () => {
    return chat.map(({ name, message }, index) => {
      return (
        <div key={index}>
          <p
            style={{ fontSize: "0.8rem", fontWeight: "bold" }}
            className={
              name === "admin"
                ? "text-danger lead p-0 m-0"
                : "lead text-white text-right"
            }
          >
            {name}:
            <span
              style={{ fontSize: "0.8rem", marginLeft: "10px" }}
              className="p-0 text-white my-0 mx-1 lead"
            >
              {message}
            </span>
          </p>{" "}
        </div>
      );
    });
  };

  useEffect(() => {
    socket.on("message", ({ name, message }) => {
      setChat([...chat, { name, message }]);
    });
    return () => {
      socket.off();
    };
  });

  useEffect(() => {
    const source = axios.CancelToken.source();
    if (authCon.loggedIn) {
      axios
        .get("/apii/messages", { cancelToken: source.token })
        .then((e) => {
          let ch = [...chat];
          e.data.data.forEach((e) => {
            ch.push(e);
          });

          setChat(ch);
        })
        .catch((e) => {
          if (axios.isCancel(e)) {
            //ignore
          } else {
            //   throw error;
          }
        });
    }
    return () => {
      source.cancel();
    };
  }, []);
  const pleaseLogin = (
    <div
      className="container mt-5"
      style={{ minHeight: "calc(100vh - 280px)" }}
    >
      <div className="row">
        <div className="col-4 offset-4">
          <h1 className=" lead text-center">Please login first!</h1>
          <hr />
        </div>
      </div>
    </div>
  );
  return (
    <>
      {authCon.loggedIn === false ? (
        pleaseLogin
      ) : (
        <div className="container mx-5 mt-5">
          <div className="row">
            <div className="col-6 offset-3">
              <div
                className="row justify-content-between bg-primary"
                style={{ height: "40px" }}
              >
                <div className="col-6 d-flex align-items-center">
                  <img src={onlineIcon} width="6px" height="6px" alt="online" />
                  <p className="ml-2 text-white lead m-0">
                    {props.match.params.user}
                  </p>
                </div>
                <div className="col-6 d-flex justify-content-end align-items-center">
                  <a href="/">
                    <img
                      src={closeIcon}
                      width="10px"
                      height="10px"
                      alt="close"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-6 offset-3"
              style={{ maxHeight: "400px", backgroundColor: "rgb(24,24,26)" }}
            >
              <ScrollToBottom className="ce">{renderChat()}</ScrollToBottom>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-6 offset-3">
              <div className="row justify-content-between">
                <div className="col-9 p-0">
                  <InputGroup className="mb-3" style={{ width: "98%" }}>
                    <FormControl
                      id="cc"
                      className=""
                      placeholder="Let's chat"
                      aria-describedby="basic-addon1"
                      value={state.message}
                      onChange={(e) =>
                        setState({ ...state, message: e.target.value })
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && state.message !== "") {
                          const { name, message } = state;
                          socket.emit("message", { name, message });
                          setState({ message: "", name });
                          axios.put("/apii", {
                            name: props.match.params.user,
                            message: state.message,
                          });
                        }
                      }}
                    />
                  </InputGroup>
                </div>
                <div className="col-3 p-0">
                  <Button
                    onClick={() => {
                      if (state.message !== "") {
                        const { name, message } = state;
                        socket.emit("message", { name, message });
                        setState({ message: "", name });
                        axios.put("/apii", {
                          name: props.match.params.user,
                          message: state.message,
                        });
                      }
                    }}
                    style={{ width: "100%" }}
                  >
                    Send!
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default memo(Chat);
