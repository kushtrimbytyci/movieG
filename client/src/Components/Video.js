import React, { useEffect, Fragment, useContext } from "react";
import axios from "axios";
import { useState } from "react";
import MovieItem from "./MovieItem";
import profilContext from "../Context/Profiles/profileContext";
const Video = (props) => {
  const profileCon = useContext(profilContext);
  const [gen, setGen] = useState([]);
  useEffect(() => {
    if (props.location.state === undefined) {
      props.history.push("/home");
    }
    const getGen = async () => {
      try {
        const data = await axios.get(
          `/api/movies/${props.location.state.genre}?limit=3}`
        );

        setGen(data.data.data);
      } catch (error) {}
    };
    getGen();
  }, []);

  return (
    <Fragment>
      {props.location.state === undefined ? null : (
        <div
          className="video-container"
          style={{ backgroundColor: `${profileCon.backgroundColor}` }}
        >
          <div className="video">
            <video width="100%" height="30%" controls>
              <source src={props.location.state.link} type="video/mp4" />
              <source src={props.location.state.link} type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="description">
            <div
              className="description-image"
              style={{ background: `url(${props.location.state.src})` }}
            ></div>
            <div className="title-description">
              <h3>{props.location.state.title}</h3>
              <h6>{props.location.state.desc}</h6>
            </div>
          </div>
          <div className="may-like">
            <span>You may like</span>
            <div className="may-like-items">
              {gen.length === 0
                ? null
                : gen.map((e) => (
                    <MovieItem
                      link={e.link}
                      src={e.imgsrc}
                      title={e.title}
                      key={e._id}
                      desc={e.desc}
                      genre={e.genre}
                      quality={e.quality}
                    />
                  ))}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Video;
