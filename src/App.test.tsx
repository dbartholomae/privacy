import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";
import { enterEmail } from "./EmailForm.po";
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

  it("signs the email up to the providers", async () => {
    const email = "test@test.com";
    enterEmail(email);
    expect(mockProvider.trackEmail).toHaveBeenCalledWith(email);
  });

  it("shows the information tracked about me", async () => {
    expect(screen.getByText("MockProvider")).toBeInTheDocument();
  });
});
