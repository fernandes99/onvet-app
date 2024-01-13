import { combineReducers, configureStore } from '@reduxjs/toolkit';
import globalReducer from './reducers/global';
import authReducer from './reducers/auth';
import scheduleReducer from './reducers/schedule';
import checkoutReducer from './reducers/checkout';

const reducer = combineReducers({
    global: globalReducer,
    auth: authReducer,
    schedule: scheduleReducer,
    checkout: checkoutReducer
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
