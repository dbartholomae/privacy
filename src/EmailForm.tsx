import { Button, TextField } from "@material-ui/core";
import React, { FormEventHandler, FunctionComponent, useState } from "react";

interface Props {
  onSetEmail: (email: string) => void;
}

export const EmailForm: FunctionComponent<Props> = ({ onSetEmail }) => {
  const [email, setEmail] = useState("");

  const onSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    onSetEmail(email);
  };

  return (
    <form style={{ display: "flex", gap: "4px" }} onSubmit={onSubmit}>
      <TextField
        id="email"
        label="Email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Button variant="contained" color="primary" type="submit">
        Sign up
      </Button>
    </form>
  );
};
