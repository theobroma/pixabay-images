import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface BearState {
  bears: number;
  //   increasePopulation: (by: number) => void;
  increasePopulation: any;
}

export const useBearStore = create<BearState>()(
  devtools(
    (set) => ({
      bears: 997755,
      increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
      removeAllBears: () => set({ bears: 0 }),
    }),
    {
      name: 'bear-storage',
    },
  ),
);
