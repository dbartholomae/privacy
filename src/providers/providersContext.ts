import { createContext } from "react";
import { Provider } from "./Provider";

export const providersContext = createContext<Provider[]>([]);
