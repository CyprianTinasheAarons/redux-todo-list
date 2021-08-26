import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';

export const store = configureStore({
    reducer: todosReducer
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;