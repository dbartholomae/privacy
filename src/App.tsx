import "fontsource-roboto";
import React from "react";
import { Button, Container, TextField, Typography } from "@material-ui/core";

function App() {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Data collection
      </Typography>
      <form style={{ display: "flex", gap: "4px" }}>
        <TextField id="email" label="Email" />
        <Button variant="contained" color="primary">
          Sign up
        </Button>
      </form>
    </Container>
  );
}

export default App;
