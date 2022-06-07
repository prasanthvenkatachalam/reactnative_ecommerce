import {configureStore} from '@reduxjs/toolkit';
import ecommSlice from '../reduxStore/ecommSlice';
export const store = configureStore({
  reducer: {
    eCommStore: ecommSlice,
  },
});
