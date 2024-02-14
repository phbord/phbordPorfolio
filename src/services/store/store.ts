import {configureStore} from '@reduxjs/toolkit';
import langReducer from './features/langs/langSlice';

export default configureStore({
  reducer: {
    lang: langReducer,
  },
});
