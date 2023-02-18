import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { ThemeEnum } from '@/enums/theme.enum';

interface UIState {
  theme: ThemeEnum;
  setTheme: any;
}

export const useUIStore = create<UIState>()(
  devtools(
    (set) => ({
      theme: ThemeEnum.Light,
      setTheme: (newTheme: ThemeEnum) => set((state) => ({ theme: newTheme })),
      resetTheme: () => set((state) => ({ theme: ThemeEnum.Light })),
    }),
    {
      name: 'ui-storage',
    },
  ),
);
