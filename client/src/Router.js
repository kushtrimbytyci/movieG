import React, { useEffect, useContext, useLayoutEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import PrivRoute from "./Components/PrivRoute";
import AuthContext from "./Context/Auth/authContext";
import MobileNav from "./Components/MobileNav";
const Home =React.lazy(()=>import ( './Components/Home'));
const Dmca =React.lazy(()=>import ('./Components/Dmca'));
const Privacy =React.lazy(()=>import ( "./Components/Privacy"));
const Login =React.lazy(()=>import ( "./Components/Login"));
const AdminDashboard =React.lazy(()=>import (  "./Components/AdminDashboard"));
const Join =React.lazy(()=>import ( "./Components/Join"));
const Search =React.lazy(()=>import (  "./Components/Search"));
const Genre =React.lazy(()=>import  ('./Components/Genre'))
const Chat =React.lazy(()=>import  ('./Components/Chat'))
// import Video from "./Components/Video";
// import nProgress from "nprogress";
// import "nprogress/nprogress.css";



const Router = () => {
  const AuthCon = useContext(AuthContext);
  // nProgress.configure({speed:2000,easing:'ease'})
  useEffect(() => {
    if (localStorage.getItem("token")) {
      AuthCon.loadUser(localStorage.getItem("token"));
    }
    // nProgress.set(1.0);
    // ReactGA.pageview(window.location.pathname)
    // eslint-disable-next-line
  }, []);

  // useLayoutEffect(() => {
  //   nProgress.set(0.0);
  //   nProgress.set(0.3);
  // }, []);
  return (
    <React.Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter >
        <Navbar />
        <MobileNav />
        <Switch >
          <Route exact path='/' component={Home} />
          <Route exact path='/privacy' component={Privacy} />
          <Route exact path='/dmca' component={Dmca} />
          <Route exact path='/veryprivate' component={Login} />
          <PrivRoute exact path='/admindashboard' component={AdminDashboard} />
          <Route exact path='/movies/:type' component={Genre}/>
          <Route exact path='/search' component={Search} />
          <Route exact path='/join' component={Join} />
          <Route exact path='/chat/:user' component={Chat} />
          <Route render={() => <Redirect to='/' />} />
        </Switch>
        <Footer />
      </BrowserRouter>
      </React.Suspense>
  );
};

export default Router;
