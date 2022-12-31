import { createSlice } from '@reduxjs/toolkit';

import { ThemeColorsEnum } from '@/types';

const uiInitialState = {
  theme: ThemeColorsEnum.LIGHT,
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
