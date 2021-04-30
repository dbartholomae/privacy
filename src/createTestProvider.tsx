import { Provider } from "./providers/Provider";
import { providersContext } from "./providers/providersContext";
import React, { FunctionComponent } from "react";
import { MemoryRouter } from "react-router-dom";

interface TestProviderOptions {
  providers: Provider[];
}

export function createTestProvider(
  { providers }: TestProviderOptions = { providers: [] }
): FunctionComponent {
  return ({ children }) => (
    <MemoryRouter>
      <providersContext.Provider value={providers}>
        {children}
      </providersContext.Provider>
    </MemoryRouter>
  );
}
