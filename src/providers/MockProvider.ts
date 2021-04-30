import { Provider } from "./Provider";

export class MockProvider implements Provider {
  name = "MockProvider";
  fetchDetails = jest.fn();
  trackEmail = jest.fn();
}
