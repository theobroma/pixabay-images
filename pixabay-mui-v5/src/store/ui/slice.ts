import { createSlice } from '@reduxjs/toolkit';

import { ThemeEnum } from '@/enums/theme.enum';

export const uiInitialState = {
  theme: ThemeEnum.Light,
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
