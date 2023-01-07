import { createSlice } from '@reduxjs/toolkit';

const lightboxInitialState = {
  toggler: false,
  slide: 1,
};

export const lightboxSlice = createSlice({
  name: 'lightbox',
  initialState: lightboxInitialState,
  reducers: {
    setLightboxAC(state, action) {
      state.toggler = action.payload.toggler;
      state.slide = action.payload.slide;
    },
  },
});

export const { setLightboxAC } = lightboxSlice.actions;
