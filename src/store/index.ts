import { combineReducers, configureStore } from '@reduxjs/toolkit';
import globalReducer from './reducers/global';
import authReducer from './reducers/auth';
import vaccinesReducer from './reducers/vaccines';

const reducer = combineReducers({
    global: globalReducer,
    auth: authReducer,
    vaccines: vaccinesReducer
});

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
