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

  describe("when I enter an email with data", () => {
    const email = "test@test.com";
    beforeEach(() => {
      ((mockProvider.fetchDetails as unknown) as jest.MockedFunction<any>).mockResolvedValue(
        { email }
      );
      enterEmail(email);
    });

    it("shows the provider's name", async () => {
      expect(await screen.findByText(mockProvider.name)).toBeInTheDocument();
    });

    it("shows the data collected about me", async () => {
      expect(
        await screen.findByText(email, { exact: false })
      ).toBeInTheDocument();
    });
  });

  describe("when I enter an email without data", () => {
    const email = "test@test.com";
    beforeEach(() => {
      ((mockProvider.fetchDetails as unknown) as jest.MockedFunction<any>).mockResolvedValue(
        null
      );
      enterEmail(email);
    });

    it("shows the data collected about me", async () => {
      expect(await screen.findByText("No data")).toBeInTheDocument();
    });
  });
});
