import {createSlice} from '@reduxjs/toolkit';

export const langSlice = createSlice({
  name: 'lang',
  initialState: {
    value: 'fr',
  },
  reducers: {
    toogleLang: state => {
      state.value = state.value === 'fr' ? 'en' : 'fr';
    },
  },
});

export const {toogleLang} = langSlice.actions;

export const selectLang = state => state.lang.value;

export default langSlice.reducer;
