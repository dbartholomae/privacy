import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";
import { MockProvider } from "./providers/MockProvider";
import { Provider } from "./providers/Provider";
import { createTestProvider } from "./createTestProvider";

describe("App", () => {
  let mockProvider: Provider;

  beforeEach(() => {
    mockProvider = new MockProvider();
    render(<App />, {
      wrapper: createTestProvider({ providers: [mockProvider] }),
    });
  });

  it("shows a title", () => {
    expect(screen.getByText("Data collection")).toBeInTheDocument();
  });
});
