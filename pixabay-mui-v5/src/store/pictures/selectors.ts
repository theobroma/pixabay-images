import { RootState } from '@/store/configureStore';

export const picturesSelector = (state: RootState) => {
  return state.pictures;
};
