import React, { Fragment, useState, useContext } from "react";
import { Nav, Dropdown } from "rsuite";
import { withRouter } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import { InputGroup, Icon, Input, Alert } from "rsuite";
import ProfileCon from "../Context/Profiles/profileContext";

const MobileNav = (props) => {
  const profileCon = useContext(ProfileCon);
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-width: 1020px)",
  });
  const [search, setSearch] = useState("");
  const searchh = (value, e) => {
    setSearch(value);
  };
  const enterSearch = async () => {
    if (search !== "") {
      try {
        profileCon.clearProfile();
        const data = await axios.post("/api/movies/search", { search });
        profileCon.setProfile(data.data.data);
        console.log(data.data.data);
        if (props.location.pathname !== "/search") {
          props.history.push("/search");
        }
      } catch (error) {
        Alert.warning("No movie found", 3000);
      }
    } else {
      Alert.warning("Please do your search", 3000);
    }
  };

  return (
    <Fragment>
      {isTabletOrMobileDevice && (
        <div className="mobile-nav">
          <Nav>
            <Nav.Item onClick={() => window.location.assign("/")}>
              Home
            </Nav.Item>
            {/* <Nav.Item onClick={()=>props.history.push('/series')}>Series</Nav.Item>z */}
            <Nav.Item
              onClick={() => props.history.push("/movies/documentaries")}
            >
              Documentaries
            </Nav.Item>
            <Nav.Item onClick={() => props.history.push("/movies/hindi")}>
              Hindi
            </Nav.Item>
            <Nav.Item onClick={() => props.history.push("/join")}>
              Discussion
            </Nav.Item>
            <Dropdown title="Genre">
              <Dropdown.Item
                onClick={() => props.history.push("/movies/action")}
              >
                Action
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => props.history.push("/movies/horror")}
              >
                Horror
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => props.history.push("/movies/animation")}
              >
                Animation
              </Dropdown.Item>
              {/* <Dropdown.Item onSelect={()=>props.history.push('/movies/documentaries')}>Documentaries</Dropdown.Item> */}
              <Dropdown.Item
                onClick={() => props.history.push("/movies/drama")}
              >
                Drama
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => props.history.push("/movies/romance")}
              >
                Romance
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => props.history.push("/movies/comedy")}
              >
                Comedy
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => props.history.push("/movies/crime")}
              >
                Crime
              </Dropdown.Item>
              <Dropdown.Item
                onSelect={() => props.history.push("/movies/fantasy")}
              >
                Fantasy
              </Dropdown.Item>
              <Dropdown.Item
                onSelect={() => props.history.push("/movies/thriller")}
              >
                Thriller
              </Dropdown.Item>
              <Dropdown.Item
                onSelect={() => props.history.push("/movies/mystery")}
              >
                Mystery
              </Dropdown.Item>
            </Dropdown>
          </Nav>
          <div>
            <InputGroup
              size="sm"
              inside
              className="searchbar"
              style={{ maxWidth: "100vw" }}
            >
              <Input
                size="sm"
                placeholder="Enter Movies or series name..."
                onChange={searchh}
                onPressEnter={enterSearch}
              />
              <InputGroup.Button onClick={enterSearch}>
                <Icon icon="search" />
              </InputGroup.Button>
            </InputGroup>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default withRouter(MobileNav);
