import { MailChimpProvider } from "./MailChimpProvider";
import { mailChimpApiKey } from "./mailChimpApiKey";

describe("MailChimpProvider", () => {
  let mailChimpProvider: MailChimpProvider;
  beforeEach(() => {
    mailChimpProvider = new MailChimpProvider(
      mailChimpApiKey,
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
      const email = "this-exists@bartholomae.name";
      await mailChimpProvider.trackEmail(email);
      const response = await mailChimpProvider.fetchDetails(email);
      expect(response!.id).toBeDefined();
    });

    it("does not return links", async () => {
      const email = "this-exists@bartholomae.name";
      await mailChimpProvider.trackEmail(email);
      const response = await mailChimpProvider.fetchDetails(email);
      expect(response!._links).toBeUndefined();
    });
  });

  describe("#deleteMe", () => {
    it("deletes me", async () => {
      const email = "delete-me@bartholomae.name";
      await mailChimpProvider.trackEmail(email);
      await mailChimpProvider.deleteMe(email);
      const response = await mailChimpProvider.fetchDetails(email);
      expect(response).toBe(null);
    });
  });
});
