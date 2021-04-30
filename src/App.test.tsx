import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";
import { providersContext } from "./providers/providersContext";
import { MockProvider } from "./providers/MockProvider";
import { Provider } from "./providers/Provider";

describe("App", () => {
  let mockProvider: Provider;

  beforeEach(() => {
    mockProvider = new MockProvider();
    render(
      <providersContext.Provider value={[mockProvider]}>
        <App />
      </providersContext.Provider>
    );
  });

  it("shows a title", () => {
    expect(screen.getByText("Data collection")).toBeInTheDocument();
  });

  it("shows the information tracked about me", async () => {
    expect(screen.getByText("MockProvider")).toBeInTheDocument();
  });
});
