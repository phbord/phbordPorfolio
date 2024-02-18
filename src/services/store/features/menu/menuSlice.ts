import {createSlice} from '@reduxjs/toolkit';

export const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    value: false,
  },
  reducers: {
    toogleModal: state => {
      //state.value = !state.value;
      state.value = state.value === true ? false : true;
      console.log('-----> state.value = ', state.value);
    },
    closeModal: state => {
      state.value = false;
    },
  },
});

export const {toogleModal, closeModal} = menuSlice.actions;

export const selectMenu = state => state.menu.value;

export default menuSlice.reducer;
