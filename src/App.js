import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./reoutes/About";
import Home from "./reoutes/Home";
import Navigation from "./components/Navigation";
import Detail from "./reoutes/Detail";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
