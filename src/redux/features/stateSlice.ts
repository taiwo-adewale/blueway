import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface StateType {
  isSearch: boolean;
  isNavMobile: boolean;
}

const initialState: StateType = {
  isSearch: false,
  isNavMobile: false,
};

const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setIsSearch: (state, action: PayloadAction<boolean>) => {
      state.isSearch = action.payload;
    },
    setIsNavMobile: (state, action: PayloadAction<boolean>) => {
      state.isNavMobile = action.payload;
    },
  },
});

export const { setIsSearch, setIsNavMobile } = stateSlice.actions;

export default stateSlice.reducer;
