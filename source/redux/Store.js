import {configureStore} from '@reduxjs/toolkit';
import {authReducer, taskReducer} from './reducer/Reducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    task : taskReducer
  },
});

export default store;
