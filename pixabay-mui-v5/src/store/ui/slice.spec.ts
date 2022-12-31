import { ThemeColorsEnum } from '@/types';

import { setThemeAC, uiSlice } from './slice';

const uiReducer = uiSlice.reducer;

describe('counter reducer sync actions', () => {
  const initialState = {
    theme: ThemeColorsEnum.LIGHT,
  };

  it('should handle initial state', () => {
    expect(uiReducer(undefined, { type: 'unknown' })).toEqual({
      theme: ThemeColorsEnum.LIGHT,
    });
  });

  it('should handle setTheme', () => {
    const newTheme = ThemeColorsEnum.DARK;
    const actual = uiReducer(initialState, setThemeAC(newTheme));
    expect(actual.theme).toEqual(newTheme);
  });
});
