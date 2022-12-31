import { createSlice } from '@reduxjs/toolkit';

import { ThemeColorsType } from '@/types';

const uiInitialState = {
  theme: 'light' as ThemeColorsType,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState: uiInitialState,
  reducers: {
    setThemeAC(state, action) {
      state.theme = action.payload;
    },
  },
});

export const { setThemeAC } = uiSlice.actions;
