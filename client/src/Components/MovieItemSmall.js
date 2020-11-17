import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const MovieItemSmall = (props) => {
  return (
    <Fragment>
      <Link to={{ pathname: "/video", state: { ...props } }}>
        <div
          className="movie-item"
          style={{
            background: `url(${props.src}) no-repeat`,
            backgroundSize: "100% 100%",
            margin: 10,
          }}
        >
          <h3
            style={{
              display: "block",
              position: "absolute",
              bottom: 0,
              width: "100%",
              textAlign: "center",
              backgroundColor: "#1b262c",
              color: "white",
              fontSize: "1rem",
              lineHeight: "unset",
            }}
          >
            {props.title}
          </h3>
        </div>
      </Link>
    </Fragment>
  );
};

export default React.memo(MovieItemSmall);
