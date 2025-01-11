import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    // Додавання action для зміни фільтра
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});


export const { changeFilter } = filtersSlice.actions;


export const selectFilter = (state) => state.filters.filter;


export default filtersSlice.reducer;
