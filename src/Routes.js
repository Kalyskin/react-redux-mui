import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "./components/App/App";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  );
}
