import { MailChimpProvider } from "./MailChimpProvider";

function wait(waitTimeInMS: number) {
  return new Promise((resolve) => setTimeout(resolve, waitTimeInMS));
}

describe("MailChimpProvider", () => {
  describe("#fetchDetails", () => {
    it("shows information about a previously added email", async () => {
      const mailChimpProvider = new MailChimpProvider(
        process.env.REACT_APP_MAILCHIMP_API_KEY!
      );

      const email = "test@test.com";
      mailChimpProvider.trackEmail(email);
      await wait(200);
      const response = mailChimpProvider.fetchDetails(email);
      expect(response).toBeDefined();
    });
  });
});
