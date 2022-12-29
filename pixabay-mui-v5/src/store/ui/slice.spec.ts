import { ThemeColorsType } from '@/types';

import { setThemeAC, uiReducer } from './slice';

describe('counter reducer sync actions', () => {
  const initialState = {
    theme: 'light' as ThemeColorsType,
  };

  it('should handle initial state', () => {
    expect(uiReducer(undefined, { type: 'unknown' })).toEqual({
      theme: 'light',
    });
  });

  it('should handle setTheme', () => {
    const newTheme: ThemeColorsType = 'dark';
    const actual = uiReducer(initialState, setThemeAC(newTheme));
    expect(actual.theme).toEqual(newTheme);
  });
});
