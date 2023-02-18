import { useBearStore } from '@/store/bear.store';

export const ZustandExample = () => {
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  const bears = useBearStore((state) => state.bears);

  return (
    <>
      <button type="button" onClick={increasePopulation}>
        one up
      </button>
      <h1>{bears} around here ...</h1>
    </>
  );
};
