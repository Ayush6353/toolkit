import { createSlice } from "@reduxjs/toolkit";

const SliceData = createSlice({
  name: "formdata",
  initialState: [],
  reducers: {
    adddata(state, action) {
      console.log([...state, action.payload], "state");
      return [...state, action.payload];
    },
    removedata(state, action) {
      console.log(action.payload.id, "ididididdi");
      return state.filter((fData) => action.payload.id !== fData.id);
    },
    updatedata(state, action) {
      state.map((fData) => {
        if (fData.id === action.payload.id) {
          fData.email = action.payload.email;
          fData.password = action.payload.password;
        }
        return fData;
      });
    },
  },
});
console.log(SliceData.actions);
export default SliceData.reducer;
export const { adddata, removedata, updatedata } = SliceData.actions;
