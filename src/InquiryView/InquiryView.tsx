import React, { FunctionComponent, useState } from "react";
import { Typography } from "@material-ui/core";
import { EmailForm } from "../components/EmailForm/EmailForm";
import { Page } from "../components/Page";
import { useProviderData } from "../providers/useProviderData";

export const InquiryView: FunctionComponent = () => {
  const [email, setEmail] = useState<string | null>(null);
  const providerData = useProviderData(email);
  return (
    <Page>
      <Typography variant="h2" gutterBottom>
        Inquiries
      </Typography>
      <EmailForm onSetEmail={setEmail} />
      {providerData.map((data) => (
        <>
          <Typography variant="h3" gutterBottom>
            {data.name}
          </Typography>
          <Typography variant="body1">
            {data.data === null
              ? "No data"
              : JSON.stringify(data.data, null, 2)}
          </Typography>
        </>
      ))}
    </Page>
  );
};
