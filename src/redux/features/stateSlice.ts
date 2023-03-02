import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface StateType {
  isSearch: boolean;
  isNavMobile: boolean;
  pageNo: string;
}

const initialState: StateType = {
  isSearch: false,
  isNavMobile: false,
  pageNo: "1",
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
    setPageNo: (state, action: PayloadAction<string>) => {
      state.pageNo = action.payload;
    },
  },
});

export const { setIsSearch, setIsNavMobile, setPageNo } = stateSlice.actions;

export default stateSlice.reducer;
