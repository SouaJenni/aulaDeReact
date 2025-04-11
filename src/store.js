import {configureStore} from '@reduxjs/toolkit';
import {pessoaReducer} from './reducer.js';

export const store = configureStore({
    reducer: {
        pessoa: pessoaReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true
});