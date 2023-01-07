import { RootState } from '@/store/configureStore';

export const lightboxSelector = (state: RootState) => {
  return state.lightbox;
};
