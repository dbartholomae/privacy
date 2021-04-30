import { Provider } from "./Provider";
import Mailchimp from "mailchimp-api-v3";

export class MailChimpProvider implements Provider {
  private mailchimp: Mailchimp;

  constructor(apiKey: string) {
    this.mailchimp = new Mailchimp(apiKey);
  }

  async fetchDetails(email: string): Promise<Record<string, string> | null> {
    const response = await this.mailchimp.get({
      path: `/search-members?query=${email}`,
    });
    return response.exact_matches.members[0] ?? null;
  }

  async trackEmail(email: string): Promise<void> {
    const response = await this.mailchimp.get("/lists");
    const listId = response.lists[0].id;
    await this.mailchimp.post(`/lists/${listId}`, {
      members: [{ email_address: email, status: "subscribed" }],
      update_existing: true,
    });
  }
}
