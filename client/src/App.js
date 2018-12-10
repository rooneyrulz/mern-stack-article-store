import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import './App.css';
import Navbar from "./components/layouts/Navbar";
import AddArticle from "./containers/add-article/AddArticle";
import ShowArticle from "./containers/show-article/ShowArticle";
import Home from "./components/layouts/Home";
import About from "./components/layouts/About";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <header className="header">
              <Navbar />
            </header>
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route exact path="/add-article" component={ AddArticle } />
              <Route exact path="/show-article" component={ ShowArticle } />
              <Route exact path="/about" component={ About } />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
