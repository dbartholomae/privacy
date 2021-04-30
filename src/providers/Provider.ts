export interface Provider {
  fetchDetails(email: string): Promise<Record<string, string> | null>;
  trackEmail(email: string): Promise<void>;
}
