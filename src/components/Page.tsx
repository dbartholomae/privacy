import React, { FunctionComponent } from "react";
import { Container } from "@material-ui/core";
import { NavBar } from "./NavBar";

export const Page: FunctionComponent = ({ children }) => (
  <>
    <NavBar />
    <Container>{children!}</Container>
  </>
);
