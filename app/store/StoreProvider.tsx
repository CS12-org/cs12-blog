import { createContext, type ReactNode, useContext, useRef } from "react";
import { useStore } from "zustand";
import { createGlobalStore, type GlobalStore } from "~/store/StoreGlobal";

export type GlobalStoreApi = ReturnType<typeof createGlobalStore>;

export const GlobalStoreContext = createContext<GlobalStoreApi | undefined>(
  undefined,
);

export interface GlobalStoreProviderProps {
  children: ReactNode;
}

export const GlobalStoreProvider = ({ children }: GlobalStoreProviderProps) => {
  const storeRef = useRef<GlobalStoreApi | null>(null);

  if (storeRef.current === null) {
    storeRef.current = createGlobalStore();
  }

  return (
    <GlobalStoreContext value={storeRef.current}>{children}</GlobalStoreContext>
  );
};

export const useGlobalStore = <T,>(selector: (store: GlobalStore) => T): T => {
  const globalStoreContext = useContext(GlobalStoreContext);

  if (!globalStoreContext) {
    throw new Error(`useGlobalStore must be used within GlobalStoreProvider`);
  }

  return useStore(globalStoreContext, selector);
};
