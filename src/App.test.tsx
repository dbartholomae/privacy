import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";
import { providersContext } from "./providers/providersContext";
import { MockProvider } from "./providers/MockProvider";
import { Provider } from "./providers/Provider";
import { MemoryRouter } from "react-router-dom";

describe("App", () => {
  let mockProvider: Provider;

  beforeEach(() => {
    mockProvider = new MockProvider();
    render(
      <MemoryRouter>
        <providersContext.Provider value={[mockProvider]}>
          <App />
        </providersContext.Provider>
      </MemoryRouter>
    );
  });

  it("shows a title", () => {
    expect(screen.getByText("Data collection")).toBeInTheDocument();
  });
});
