import { Provider } from "./Provider";
import axios, { AxiosInstance } from "axios";

export class MailChimpProvider implements Provider {
  name = "MailChimp";

  private instance: AxiosInstance;

  constructor(apiKey: string, corsProxy: string = "") {
    const dataCenterRegex = /-(.+)$/g;
    const dataCenter = dataCenterRegex.exec(apiKey)![1];
    this.instance = axios.create({
      baseURL: `${corsProxy}https://${dataCenter}.api.mailchimp.com/3.0`,
      timeout: 5000,
      auth: {
        username: "anystring",
        password: apiKey,
      },
    });
  }

  async fetchDetails(email: string): Promise<Record<string, string> | null> {
    const response = await this.instance.get(`/search-members?query=${email}`);
    const data = response.data.exact_matches.members[0];
    if (data === undefined) {
      return null;
    }
    delete data._links;
    return data;
  }

  async trackEmail(email: string): Promise<void> {
    const response = await this.instance.get("/lists");
    const listId = response.data.lists[0].id;
    await this.instance.post(`/lists/${listId}`, {
      members: [{ email_address: email, status: "subscribed" }],
      update_existing: true,
    });
  }

  deleteMe(email: string): Promise<void> {
    throw new TypeError("Not implemented yet");
  }
}
