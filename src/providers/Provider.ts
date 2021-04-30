export interface Provider {
  fetchDetails(email: string): Promise<Record<string, string>>;
  trackEmail(email: string): void;
}
