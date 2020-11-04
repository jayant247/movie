import React, { Suspense } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Detail from "./components/Detail";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Suspense fallback={<div>Loading....</div>}>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/review" component={Detail} />
          </Switch>
        </Suspense>
      </Router>
    </React.Fragment>
  );
}

export default App;
