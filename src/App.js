import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/user";
import axios from "axios";

import About from "./components/pages/about";
import { Provider } from "react-redux";
import store from "./store";
const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [repos, setRepos] = useState([]);

  /*componentDidMount(){
  console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
  setState({loading:true});
  axios.get("https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}}").then(res =>setState({users:res.data,loading:false}));
} */

  //get a single user details
  /* const getUser = async username => {
    setLoading(true);
    console.log(username);
    const res = await axios.get("https://api.github.com/users/" + username);
    setUser(res.data);
    setLoading(false);
  };

  //get users repos
  const getUserRepos = async username => {
    setLoading(true);
    console.log(username);
    const res = await axios.get(
      "https://api.github.com/users/" +
        username +
        "/repos?per_page=5&sort=created:asc"
    );
    setRepos(res.data);
    setLoading(false);
  };

  //clear users
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };
  const showAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
   */
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar title="Github Finder" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Users} />

              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
