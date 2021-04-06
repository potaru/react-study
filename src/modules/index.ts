import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import task from './task';

const rootReducer = combineReducers({
  task
});

export const store = configureStore({ reducer: rootReducer })

export type RootState = ReturnType<typeof rootReducer>;