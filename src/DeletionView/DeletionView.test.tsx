import React from "react";
import { render } from "@testing-library/react";
import { MockProvider } from "../providers/MockProvider";
import { Provider } from "../providers/Provider";
import { DeletionView } from "./DeletionView";
import { enterEmail } from "../components/EmailForm/EmailForm.po";
import { createTestProvider } from "../createTestProvider";

describe("DeletionView", () => {
  let mockProvider: Provider;

  beforeEach(() => {
    mockProvider = new MockProvider();
    render(<DeletionView />, {
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

    it("deletes my data", async () => {
      expect(mockProvider.deleteMe).toHaveBeenCalledWith(email);
    });
  });
});
