export interface Provider {
  readonly name: string;
  deleteMe(email: string): Promise<void>;
  fetchDetails(email: string): Promise<Record<string, string> | null>;
  trackEmail(email: string): Promise<void>;
}
