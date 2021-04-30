import "fontsource-roboto";
import React from "react";
import { Container, Typography } from "@material-ui/core";
import { EmailForm } from "./EmailForm";

function App() {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Data collection
      </Typography>
      <EmailForm />
    </Container>
  );
}

export default App;
