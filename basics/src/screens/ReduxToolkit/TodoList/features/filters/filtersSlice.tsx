import { createSlice } from '@reduxjs/toolkit';

export enum VisibilityFilters {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
}

const filtersSlice = createSlice({
  name: 'visibilityFilters',
  initialState: VisibilityFilters.SHOW_ALL,
  reducers: {
    setVisibilityFilter(state, action) {
      return action.payload;
    }
  }
});

export const { setVisibilityFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
