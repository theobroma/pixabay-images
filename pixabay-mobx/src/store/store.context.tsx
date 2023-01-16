import { createContext, PropsWithChildren } from 'react';

import { rootStore } from '@/store/store.root';

export const StoreContext = createContext<typeof rootStore>(rootStore);

export const StoreProvider = ({ children }: PropsWithChildren) => (
  <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
);
