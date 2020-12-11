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
  },
  extraReducers: {
    'todos/addTodo': (state, action) => {
      // This is for demonstration purpose
      // this slice state can be modified by hearing to other slice actions
      return VisibilityFilters.SHOW_ALL;
    }
  }
});

export const { setVisibilityFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
