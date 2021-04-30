import { App } from "./App";
import React from "react";
import { providersContext } from "./providers/providersContext";
import { MailChimpProvider } from "./providers/MailChimpProvider";
import { BrowserRouter } from "react-router-dom";
import { mailChimpApiKey } from "./providers/mailChimpApiKey";

export function ConnectedApp() {
  return (
    <providersContext.Provider
      value={[
        new MailChimpProvider(
          mailChimpApiKey,
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
