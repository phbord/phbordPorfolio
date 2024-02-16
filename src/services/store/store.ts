import {configureStore} from '@reduxjs/toolkit';

import langReducer from './features/langs/langSlice';
import menuReducer from './features/menu/menuSlice';

export default configureStore({
  reducer: {
    lang: langReducer,
    menu: menuReducer,
  },
});
