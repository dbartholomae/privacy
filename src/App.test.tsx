import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { enterEmail } from "./EmailForm.po";
import { providersContext } from "./providers/providersContext";
import { MockProvider } from "./providers/MockProvider";

describe("App", () => {
  it("shows a title", () => {
    render(<App />);
    expect(screen.getByText("Data collection")).toBeInTheDocument();
  });

  it("signs the email up to the providers", async () => {
    const mockProvider = new MockProvider();
    render(
      <providersContext.Provider value={[mockProvider]}>
        <App />
      </providersContext.Provider>
    );
    const email = "test@test.com";
    enterEmail(email);
    expect(mockProvider.trackEmail).toHaveBeenCalledWith(email);
  });
});
