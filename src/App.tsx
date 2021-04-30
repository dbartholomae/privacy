import "fontsource-roboto";
import React from "react";
import { TrackingView } from "./TrackingView/TrackingView";
import { Redirect, Route, Switch } from "react-router-dom";
import { InquiryView } from "./InquiryView/InquiryView";
import { DeletionView } from "./DeletionView/DeletionView";

export function App() {
  return (
    <Switch>
      <Route path="/track-me">
        <TrackingView />
      </Route>
      <Route path="/inquiry">
        <InquiryView />
      </Route>
      <Route path="/delete-me">
        <DeletionView />
      </Route>
      <Redirect to="/track-me" />
    </Switch>
  );
}
