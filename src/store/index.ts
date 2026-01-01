import { combineReducers, configureStore } from "@reduxjs/toolkit";
import operationsReducer from "./slices/operations.slice";

const rootReducer = combineReducers({
    operationsReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type Store = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type OperationsDispatch = Store["dispatch"];
