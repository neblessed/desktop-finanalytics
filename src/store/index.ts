import { combineReducers, configureStore } from '@reduxjs/toolkit';
import operationsReducer from './slices/operations.slice';
import menuReducer from './slices/menu.slice';

const rootReducer = combineReducers({
   operationsReducer,
   menuReducer,
});

export const setupStore = () => {
   return configureStore({
      reducer: rootReducer,
   });
};

export type Store = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = Store['dispatch'];
