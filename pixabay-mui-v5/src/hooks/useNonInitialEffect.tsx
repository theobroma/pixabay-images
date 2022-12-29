// https://github.com/thivi/use-non-initial-effect-hook
import { useEffect, useRef } from 'react';
import type { DependencyList, EffectCallback } from 'react';

/**
 * This hook gets called only when the dependencies change but not during initial render.
 *
 * @param {EffectCallback} effect The `useEffect` callback function.
 * @param {DependencyList} deps An array of dependencies.
 *
 * @example
 * ```
 *  useNonInitialEffect(()=>{
 *      alert("Dependency changed!");
 * },[dependency]);
 * ```
 */
export const useNonInitialEffect = (
  effect: EffectCallback,
  deps?: DependencyList,
) => {
  const initialRender = useRef(true);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let effectReturns: any = () => {
      // do nothing.
    };

    if (initialRender.current) {
      initialRender.current = false;
    } else {
      effectReturns = effect();
    }

    if (effectReturns && typeof effectReturns === 'function') {
      return effectReturns;
    }
    return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
