import { createSlice } from '@reduxjs/toolkit';

const lightboxInitialState = {
  toggler: false,
  slide: 1,
};

export const lightboxSlice = createSlice({
  name: 'lightbox',
  initialState: lightboxInitialState,
  reducers: {
    setLightboxSlideAC(state, action) {
      state.toggler = true;
      state.slide = action.payload;
    },
  },
});

export const { setLightboxSlideAC } = lightboxSlice.actions;
