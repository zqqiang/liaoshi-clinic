import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Index from "views/Index.js";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Switch>
          <Route path="/index" render={(props) => <Index {...props} />} />
          <Redirect to="/index" />
          <Redirect from="/" to="/index" />
        </Switch>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
