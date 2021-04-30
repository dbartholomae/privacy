import React from "react";
import { render, screen } from "@testing-library/react";
import { providersContext } from "./providers/providersContext";
import { MockProvider } from "./providers/MockProvider";
import { Provider } from "./providers/Provider";
import { InquiryView } from "./InquiryView";

describe("InquiryView", () => {
  let mockProvider: Provider;

  beforeEach(() => {
    mockProvider = new MockProvider();
    render(
      <providersContext.Provider value={[mockProvider]}>
        <InquiryView />
      </providersContext.Provider>
    );
  });

  it("shows the information tracked about me", async () => {
    expect(screen.getByText("MockProvider")).toBeInTheDocument();
  });
});
