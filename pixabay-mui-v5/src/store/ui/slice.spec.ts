import { ThemeEnum } from '@/enums/theme.enum';

import { setThemeAC, uiSlice, uiInitialState } from './slice';

const uiReducer = uiSlice.reducer;

describe('counter reducer sync actions', () => {
  it('should handle initial state', () => {
    expect(uiReducer(undefined, { type: 'unknown' })).toEqual(uiInitialState);
  });

  it('should handle setTheme', () => {
    const newTheme = ThemeEnum.Dark;
    const actual = uiReducer(uiInitialState, setThemeAC(newTheme));
    expect(actual.theme).toEqual(newTheme);
  });
});
