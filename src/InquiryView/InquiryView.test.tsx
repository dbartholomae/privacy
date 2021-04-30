import React from "react";
import { render, screen } from "@testing-library/react";
import { MockProvider } from "../providers/MockProvider";
import { Provider } from "../providers/Provider";
import { InquiryView } from "./InquiryView";
import { enterEmail } from "../components/EmailForm/EmailForm.po";
import { createTestProvider } from "../createTestProvider";

describe("InquiryView", () => {
  let mockProvider: Provider;

  beforeEach(() => {
    mockProvider = new MockProvider();
    render(<InquiryView />, {
      wrapper: createTestProvider({ providers: [mockProvider] }),
    });
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
