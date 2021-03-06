import React from "react";
import { render, screen } from "@testing-library/react";
import { enterEmail } from "../components/EmailForm/EmailForm.po";
import { MockProvider } from "../providers/MockProvider";
import { Provider } from "../providers/Provider";
import { TrackingView } from "./TrackingView";
import { createTestProvider } from "../createTestProvider";

describe("TrackingView", () => {
  let mockProvider: Provider;

  beforeEach(() => {
    mockProvider = new MockProvider();
    render(<TrackingView />, {
      wrapper: createTestProvider({ providers: [mockProvider] }),
    });
  });

  it("shows a title", () => {
    expect(screen.getByText("Data collection")).toBeInTheDocument();
  });

  it("signs the email up to the providers", async () => {
    const email = "test@test.com";
    enterEmail(email);
    expect(mockProvider.trackEmail).toHaveBeenCalledWith(email);
  });
});
