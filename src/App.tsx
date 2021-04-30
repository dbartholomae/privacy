import "fontsource-roboto";
import React, { useContext } from "react";
import { Container, Typography } from "@material-ui/core";
import { EmailForm } from "./EmailForm";
import { providersContext } from "./providers/providersContext";

export function App() {
  const providers = useContext(providersContext);
  function setEmail(email: string) {
    providers.forEach((provider) => provider.trackEmail(email));
  }
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Data collection
      </Typography>
      <EmailForm onSetEmail={setEmail} />
      {providers.map((provider) => (
        <Typography variant="h3" gutterBottom>
          {provider.name}
        </Typography>
      ))}
    </Container>
  );
}
