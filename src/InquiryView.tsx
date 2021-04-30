import React, { FunctionComponent, useContext, useState } from "react";
import { Container, Typography } from "@material-ui/core";
import { providersContext } from "./providers/providersContext";
import { EmailForm } from "./EmailForm";

export const InquiryView: FunctionComponent = () => {
  const [email, setEmail] = useState<string | null>(null);
  const providers = useContext(providersContext);
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Inquiries
      </Typography>
      <EmailForm onSetEmail={setEmail} />
      {email != null &&
        providers.map((provider) => (
          <Typography variant="h3" gutterBottom>
            {provider.name}
          </Typography>
        ))}
    </Container>
  );
};
