import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "../pages/App/App";

function Routes() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/">
              <App />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
  
  export default Routes;