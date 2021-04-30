import { Typography } from "@material-ui/core";
import { EmailForm } from "./EmailForm";
import React, { useContext } from "react";
import { providersContext } from "./providers/providersContext";
import { Page } from "./Page";

export function TrackingView() {
  const providers = useContext(providersContext);
  function trackEmail(email: string) {
    providers.forEach((provider) => provider.trackEmail(email));
  }
  return (
    <Page>
      <Typography variant="h2" gutterBottom>
        Data collection
      </Typography>
      <EmailForm onSetEmail={trackEmail} />
    </Page>
  );
}
