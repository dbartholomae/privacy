import { Provider } from "./Provider";

export class MockProvider implements Provider {
  trackEmail = jest.fn();
}
