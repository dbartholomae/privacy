import { MailChimpProvider } from "./MailChimpProvider";

describe("MailChimpProvider", () => {
  let mailChimpProvider: MailChimpProvider;
  beforeEach(() => {
    mailChimpProvider = new MailChimpProvider(
      process.env.REACT_APP_MAILCHIMP_API_KEY!,
      process.env.REACT_APP_CORS_PROXY!
    );
  });

  describe("#fetchDetails", () => {
    it("returns null if there is no information", async () => {
      const email = "this-email-does-not-exist@neither-does-this-domain.com";
      const response = await mailChimpProvider.fetchDetails(email);
      expect(response).toBe(null);
    });

    it("shows information about a previously added email", async () => {
      const email = "newsletter@bartholomae.name";
      await mailChimpProvider.trackEmail(email);
      const response = await mailChimpProvider.fetchDetails(email);
      expect(response!.id).toBeDefined();
    });

    it("does not return links", async () => {
      const email = "newsletter@bartholomae.name";
      await mailChimpProvider.trackEmail(email);
      const response = await mailChimpProvider.fetchDetails(email);
      expect(response!._links).toBeUndefined();
    });
  });
});
