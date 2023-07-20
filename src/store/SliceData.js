import { createSlice } from "@reduxjs/toolkit";

const SliceData = createSlice({
  name: "formdata",
  initialState: [],
  reducers: {
    adddata(state, action) {
        console.log([...state, action.payload], "state");
      return  [...state, action.payload];
      
    },
    removedata(state, action) {
        console.log(action.payload.id,"ididididdi")
        return state.filter((fData)=> action.payload.id !== fData.id);
    },
    updatedata(state, action) {
        
    },
  },
});
console.log(SliceData.actions);
export default SliceData.reducer;
export const { adddata, removedata } = SliceData.actions;
