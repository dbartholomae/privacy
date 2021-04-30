import { Provider } from "./Provider";

export class MockProvider implements Provider {
  fetchDetails = jest.fn();
  trackEmail = jest.fn();
}
