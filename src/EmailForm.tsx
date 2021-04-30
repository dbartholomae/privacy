import { Button, TextField } from "@material-ui/core";
import React, { FunctionComponent } from "react";

export const EmailForm: FunctionComponent = () => (
  <form style={{ display: "flex", gap: "4px" }}>
    <TextField id="email" label="Email" type="email" />
    <Button variant="contained" color="primary" type="submit">
      Sign up
    </Button>
  </form>
);
