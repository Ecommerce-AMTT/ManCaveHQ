import { createSlice } from "@reduxjs/toolkit";

export const translateSlice = createSlice({
  name: "translate",
  initialState: {
    t: function () {
      return undefined;
    },
    i18n: function () {
      return undefined;
    },
  },
  reducers: {
    changeT: (state, action) => {
      // console.log("changeT.t = ", action.payload);
      state.t = action.payload;
    },
    changeI18n: (state, action) => {
      state.i18n = action.payload;
    },
  },
});

export const { changeT, changeI18n } = translateSlice.actions;

export default translateSlice.reducer;
