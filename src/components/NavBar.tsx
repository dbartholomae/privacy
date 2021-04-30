import React, { FunctionComponent } from "react";
import { AppBar, Button, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";

export const NavBar: FunctionComponent = () => (
  <AppBar position="static">
    <Toolbar>
      <Button color="inherit" component={Link} to="/track-me">
        Track me
      </Button>
      <Button color="inherit" component={Link} to="/inquiry">
        Inquire
      </Button>
    </Toolbar>
  </AppBar>
);
