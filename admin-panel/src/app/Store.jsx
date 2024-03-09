import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ServicesSlice from "../Components/ServicesSlice";
import storage from 'redux-persist/lib/storage'

import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";


const persistConfig = {
  key: 'root',
  storage
}

const rootReducer = combineReducers({
  serviceStore: ServicesSlice,
})

const persist = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer:  persist ,
});

//create a persist store
export const persistor = persistStore(store)