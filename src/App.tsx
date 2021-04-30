import "fontsource-roboto";
import React, { useState } from "react";
import { Container, Typography } from "@material-ui/core";
import { EmailForm } from "./EmailForm";

function App() {
  const [email, setEmail] = useState<string | null>(null);
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Data collection
      </Typography>
      <EmailForm onSetEmail={setEmail} />
    </Container>
  );
}

export default App;
