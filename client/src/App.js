import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Community from './Components/Community'
import ProfileLanding from './Components/Profile/ProfileLanding'
import Comments from './Components/Comments'
import Posts from './Components/Profile/Posts'
import Downvoted from './Components/Profile/Downvoted'
import Upvoted from './Components/Profile/Upvoted'
// import PostForm from './Components/PostForm'
import PostNavBar from './Components/PostForms/PostNavBar'
import { connect } from 'react-redux'
import { logoutUser } from './redux/actions/userActions'
import "./App.css";

function App({ user }) {
  return (
    <div className="App">
      <Navbar
        logoutUser={logoutUser}
        user={user.user}
      />
      <div className="app-route">
        <Switch>
          {/* <Route path="/r/:community/submit/" component={PostForm} /> */}
          <Route path="/r/:community/submit/" component={PostNavBar} />
          <Route path="/r/:community/" component={Community} />
          <Route path="/user/:username/" component={ProfileLanding} />
          <Route path="/user/:username/comments/" component={Comments} />
          <Route path="/user/:username/posts/" component={Posts} />
          <Route path="/user/:username/downvoted/" component={Downvoted} />
          <Route path="/user/:username/upvoted/" component={Upvoted} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>

    </div>
  );
}

const mapStateToProps = (state) => {

  return {
    user: state.user,
  };
}


const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser()),

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)