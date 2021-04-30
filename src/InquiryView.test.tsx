import React from "react";
import { render, screen } from "@testing-library/react";
import { providersContext } from "./providers/providersContext";
import { MockProvider } from "./providers/MockProvider";
import { Provider } from "./providers/Provider";
import { InquiryView } from "./InquiryView";
import { enterEmail } from "./EmailForm.po";

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

  describe("when I enter my email", () => {
    beforeEach(() => {
      const email = "test@test.com";
      enterEmail(email);
    });

    it("shows the information tracked about me", async () => {
      expect(screen.getByText(mockProvider.name)).toBeInTheDocument();
    });
  });
});
