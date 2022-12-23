import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { pictureAPI } from '../../@api/picture-api';
import { PicturesDataResponseType } from '../../@types';
import { waitForMe } from '../../@utils/waitforme';

const picturesInitialState = {
  data: {
    total: 0,
    totalHits: 0,
    hits: [],
  } as PicturesDataResponseType,
  loading: false,
  page: 1,
  pictureSearch: 'nature',
};

export const getPicturesTC = createAsyncThunk<
  PicturesDataResponseType,
  { pictureSearch: string; page: number },
  any
>('pictures/picturesTC', async (param, thunkAPI) => {
  thunkAPI.dispatch(setLoading(true));
  try {
    await waitForMe(1000);
    const res = await pictureAPI.fetchImages(param.pictureSearch, param.page);
    return res.data;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response.data);
  } finally {
    thunkAPI.dispatch(setLoading(false));
  }
});

export const picturesSlice = createSlice({
  name: 'pictures',
  initialState: picturesInitialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    incrementPage(state) {
      state.page += 1;
    },
    setPictureSearch(state, action) {
      state.data.hits = []; // clear
      state.page = 1;
      state.pictureSearch = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPicturesTC.fulfilled, (state, action) => {
      if (action.payload) {
        // state.data = action.payload.data;
        state.data.total = action.payload.total;
        state.data.totalHits = action.payload.totalHits;
        state.data.hits.push(...action.payload.hits);
      }
    });
  },
});

export const picturesReducer = picturesSlice.reducer;
export const { setLoading, incrementPage, setPictureSearch } =
  picturesSlice.actions;
