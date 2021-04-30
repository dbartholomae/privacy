import { useContext, useEffect, useState } from "react";
import { providersContext } from "./providersContext";

interface ProviderData {
  name: string;
  data: unknown;
}

export function useProviderData(email: string | null) {
  const providers = useContext(providersContext);
  const [providerData, setProviderData] = useState<{
    [providerName: string]: ProviderData;
  }>({});
  useEffect(() => {
    if (email === null) {
      return;
    }
    providers.map(async (provider) => {
      const data = await provider.fetchDetails(email);
      setProviderData((oldData) => ({
        ...oldData,
        [provider.name]: {
          name: provider.name,
          data,
        },
      }));
    });
  }, [email, providers]);
  return Object.values(providerData);
}
