import React, { FunctionComponent, useContext, useState } from "react";
import { Typography } from "@material-ui/core";
import { EmailForm } from "../components/EmailForm/EmailForm";
import { Page } from "../components/Page";
import { providersContext } from "../providers/providersContext";

export const DeletionView: FunctionComponent = () => {
  const providers = useContext(providersContext);
  const [submitting, setSubmitting] = useState(false);
  function deleteEmail(email: string) {
    async function run() {
      setSubmitting(true);
      await Promise.all(
        providers.map(async (provider) => await provider.deleteMe(email))
      );
      setSubmitting(false);
    }
    run();
  }
  return (
    <Page>
      <Typography variant="h2" gutterBottom>
        Inquiries
      </Typography>
      <EmailForm onSetEmail={deleteEmail} />
      {submitting && "Submitting, please wait"}
    </Page>
  );
};
