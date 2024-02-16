import {createSlice} from '@reduxjs/toolkit';

export const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    value: false,
  },
  reducers: {
    toogle: state => {
      state.value = !state.value;
    },
    close: state => {
      state.value = false;
    },
  },
});

export const {toogle, close} = menuSlice.actions;

export const selectMenu = state => state.menu.value;

export default menuSlice.reducer;
