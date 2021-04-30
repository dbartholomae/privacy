import "fontsource-roboto";
import React from "react";
import { TrackingView } from "./TrackingView";
import { Redirect, Route, Switch } from "react-router-dom";
import { InquiryView } from "./InquiryView";

export function App() {
  return (
    <Switch>
      <Route path="/track-me">
        <TrackingView />
      </Route>
      <Route path="/inquiry">
        <InquiryView />
      </Route>
      <Redirect to="/track-me" />
    </Switch>
  );
}
