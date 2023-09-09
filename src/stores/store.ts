import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import { pokemonApi } from '../apis'
import { helloWorldApi } from '../apis/helloWorldApi';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import counterSlice from '../features/counterSlice';
import authReducer from '../features/authSlice';

const apiList = [pokemonApi, pokemonApi, pokemonApi];

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(pokemonApi.middleware),
        preloadedState,
    });
}
const rootReducer = combineReducers({
    // Add your reducers here
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    counter: counterSlice,
    auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

