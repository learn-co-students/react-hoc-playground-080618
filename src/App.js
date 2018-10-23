import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Listings from "./components/Listings";
import Likes from "./components/SecretLikes";
import "./App.css";

const Menu = () => (
  <>
    <h1>HOC Components examples</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/listings">Listings (with Ads)</Link>
      </li>
      <li>
        <Link to="/likes">Likes (with Auth)</Link>
      </li>
    </ul>
  </>
);

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Route path="/" component={Menu} />
          <Route path="/listings" component={Listings} />
          <Route path="/likes" component={Likes} />
        </>
      </Router>
    );
  }
}

export default App;
