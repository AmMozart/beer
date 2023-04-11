import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { BeerData } from '../api/BeerData';
import { RootState } from '../app/store';

interface FavouriteState {
  favourites: BeerData[];
}

const initialState: FavouriteState = {
  favourites: [],
};

const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    addFavouriteBeer(state, action: PayloadAction<BeerData>) {
      if (!state.favourites.find((beer) => beer.id === action.payload.id)) {
        state.favourites.push(action.payload);
      }
    },
    removeFavouriteBeer(state, action: PayloadAction<BeerData>) {
      state.favourites = state.favourites.filter(
        (beer) => action.payload.id !== beer.id
      );
    },
  },
});

export const favourites = (state: RootState) => state.favouriteSlice.favourites;

export const { addFavouriteBeer, removeFavouriteBeer } = favouriteSlice.actions;

export default favouriteSlice.reducer;
