import React, { FunctionComponent, useContext, useState } from "react";
import { Typography } from "@material-ui/core";
import { providersContext } from "./providers/providersContext";
import { EmailForm } from "./EmailForm";
import { Page } from "./Page";

export const InquiryView: FunctionComponent = () => {
  const [email, setEmail] = useState<string | null>(null);
  const providers = useContext(providersContext);
  return (
    <Page>
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
    </Page>
  );
};
