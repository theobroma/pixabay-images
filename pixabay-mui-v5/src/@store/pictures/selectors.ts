import { RootState } from '../configureStore';

export const picturesSelector = (state: RootState) => {
  return state.pictures;
};
