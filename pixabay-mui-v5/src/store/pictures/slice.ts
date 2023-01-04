import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import { pictureAPI } from '@/api/picture-api';
import type { RootState } from '@/store/configureStore';
import { PicturesDataResponseSchema, PicturesDataResponseType } from '@/types';
import { waitForMe } from '@/utils/waitforme';

const picturesInitialState = {
  data: {
    total: 0,
    totalHits: 0,
    hits: [],
  } as PicturesDataResponseType,
  // params
  // page: 1,
  pictureSearch: 'nature',
  // utils
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: '' as string | null,
};

export const getPicturesTC = createAsyncThunk<
  PicturesDataResponseType,
  { page: number },
  { state: RootState; rejectValue: string }
>('pictures/picturesTC', async (param, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    await waitForMe(1000);
    const res = await pictureAPI.fetchImages(
      state.pictures.pictureSearch,
      param.page,
    );

    // ZOD validation
    try {
      PicturesDataResponseSchema.parse(res.data);
    } catch (error) {
      console.log(error);
    }

    return res.data;
  } catch (err: any) {
    // return thunkAPI.rejectWithValue(err.response.data);
    return thunkAPI.rejectWithValue(
      `Server Error fetching pictures. Error:
      ${JSON.stringify(err.response.data)}`,
    );
  }
});
export const picturesSlice = createSlice({
  name: 'pictures',
  initialState: picturesInitialState,
  reducers: {
    setPictureSearchAC(state, action) {
      state.data.hits = []; // clear
      state.pictureSearch = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPicturesTC.pending, (state) => {
        state.isLoading = true;
        //   clear data
        state.isSuccess = false;
        state.isError = false;
        state.error = '';
      })
      .addCase(getPicturesTC.fulfilled, (state, action) => {
        if (action.payload) {
          state.data.total = action.payload.total;
          state.data.totalHits = action.payload.totalHits;
          state.data.hits.push(...action.payload.hits);
        }
        state.isLoading = false;
        state.isSuccess = true;
      })
      // .addCase(picturesTC.rejected, (state, action) => {
      //   if (action.payload) {
      //     state.error = action.payload;
      //   }
      //   state.isError = true;
      //   state.isFetching = false;
      // })
      // error
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.isError = true;
        state.isLoading = false;
      });
  },
});

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}

export const { setPictureSearchAC } = picturesSlice.actions;
