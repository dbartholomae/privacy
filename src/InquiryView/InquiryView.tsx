import React, { FunctionComponent, useState } from "react";
import { Box, Card, CardContent, Typography } from "@material-ui/core";
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
      <Box m={1} style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
        {providerData.map((data) => (
          <Card style={{ maxWidth: "600px" }}>
            <CardContent>
              <Typography variant="h3" gutterBottom>
                {data.name}
              </Typography>
              {data.data === null ? (
                <Typography variant="body1">No data</Typography>
              ) : (
                <pre>{JSON.stringify(data.data, null, 2)}</pre>
              )}
            </CardContent>
          </Card>
        ))}
      </Box>
    </Page>
  );
};
