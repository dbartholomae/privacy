import React, { FunctionComponent, useContext } from "react";
import { Container, Typography } from "@material-ui/core";
import { providersContext } from "./providers/providersContext";

export const InquiryView: FunctionComponent = () => {
  const providers = useContext(providersContext);
  return (
    <Container>
      {providers.map((provider) => (
        <Typography variant="h3" gutterBottom>
          {provider.name}
        </Typography>
      ))}
    </Container>
  );
};
