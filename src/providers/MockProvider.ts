import { Provider } from "./Provider";

export class MockProvider implements Provider {
  name = "MockProvider";
  deleteMe = jest.fn();
  fetchDetails = jest.fn();
  trackEmail = jest.fn();
}
