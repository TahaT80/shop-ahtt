import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './index'

import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist'
import { combineReducers } from "@reduxjs/toolkit";


const persiscon= {
    key:'root',
    version:1,
    storage
};

const reducer = combineReducers({
    cart:cartReducer,
})

const persisrred = persistReducer(persiscon,reducer);


export const store = configureStore({
    reducer:persisrred
})