import { Container, Typography } from "@material-ui/core";
import { EmailForm } from "./EmailForm";
import React, { useContext } from "react";
import { providersContext } from "./providers/providersContext";

export function TrackingView() {
  const providers = useContext(providersContext);
  function trackEmail(email: string) {
    providers.forEach((provider) => provider.trackEmail(email));
  }
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Data collection
      </Typography>
      <EmailForm onSetEmail={trackEmail} />
    </Container>
  );
}
