import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { beerAPI } from '../api/BeerAPI';
import { BeerData } from '../api/BeerData';
import { RootState } from '../app/store';

interface BeerState {
  beers: BeerData[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: BeerState = {
  beers: [],
  loading: 'idle',
};

export const fetchBeer = createAsyncThunk(
  'beer/fetchBeer',
  async (page: number) => {
    const responseBeerArray = await beerAPI.fetchByPage(page);

    return responseBeerArray;
  }
);

const beerSlice = createSlice({
  name: 'beer',
  initialState,
  reducers: {
    idleLoading(state) {
      state.loading = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBeer.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(fetchBeer.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.beers = action.payload;
    });
    builder.addCase(fetchBeer.rejected, (state) => {
      state.loading = 'failed';
    });
  },
});

export const loading = (state: RootState) => state.beerReducer.loading;
export const beers = (state: RootState) => state.beerReducer.beers;

export const { idleLoading } = beerSlice.actions;

export default beerSlice.reducer;
