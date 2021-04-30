import React, { FunctionComponent, useContext } from "react";
import { Typography } from "@material-ui/core";
import { EmailForm } from "../components/EmailForm/EmailForm";
import { Page } from "../components/Page";
import { providersContext } from "../providers/providersContext";

export const DeletionView: FunctionComponent = () => {
  const providers = useContext(providersContext);
  function deleteEmail(email: string) {
    providers.map(async (provider) => await provider.deleteMe(email));
  }
  return (
    <Page>
      <Typography variant="h2" gutterBottom>
        Inquiries
      </Typography>
      <EmailForm onSetEmail={deleteEmail} />
    </Page>
  );
};
