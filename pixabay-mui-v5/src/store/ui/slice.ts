import { ThemeColorsType } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

const uiInitialState = {
  theme: 'light' as ThemeColorsType,
};

export type UIInitialStateType = typeof uiInitialState;

export const uiSlice = createSlice({
  name: 'ui',
  initialState: uiInitialState,
  reducers: {
    setThemeAC(state, action) {
      state.theme = action.payload;
    },
  },
});

export const uiReducer = uiSlice.reducer;
export const { setThemeAC } = uiSlice.actions;
