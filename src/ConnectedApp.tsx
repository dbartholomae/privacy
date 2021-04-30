import { App } from "./App";
import React from "react";
import { providersContext } from "./providers/providersContext";
import { MailChimpProvider } from "./providers/MailChimpProvider";
import { BrowserRouter } from "react-router-dom";

export function ConnectedApp() {
  return (
    <providersContext.Provider
      value={[
        new MailChimpProvider(
          process.env.REACT_APP_MAILCHIMP_API_KEY!,
          process.env.REACT_APP_CORS_PROXY!
        ),
      ]}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </providersContext.Provider>
  );
}
