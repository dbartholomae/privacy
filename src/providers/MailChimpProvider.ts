import { Provider } from "./Provider";

export class MailChimpProvider implements Provider {
  constructor(private apiKey: string) {}

  fetchDetails(email: string): Promise<Record<string, string>> {
    return Promise.resolve({});
  }

  trackEmail(email: string): void {}
}
