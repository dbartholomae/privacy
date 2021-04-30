import { App } from "./App";
import React from "react";
import { providersContext } from "./providers/providersContext";

export function ConnectedApp() {
  return (
    <providersContext.Provider value={[]}>
      <App />
    </providersContext.Provider>
  );
}
