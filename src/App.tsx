import "fontsource-roboto";
import React, { useContext } from "react";
import { Typography } from "@material-ui/core";
import { providersContext } from "./providers/providersContext";
import { TrackingView } from "./TrackingView";

export function App() {
  const providers = useContext(providersContext);
  return (
    <>
      <TrackingView />
      {providers.map((provider) => (
        <Typography variant="h3" gutterBottom>
          {provider.name}
        </Typography>
      ))}
    </>
  );
}
