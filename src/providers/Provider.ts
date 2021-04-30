export interface Provider {
  readonly name: string;
  fetchDetails(email: string): Promise<Record<string, string> | null>;
  trackEmail(email: string): Promise<void>;
}
