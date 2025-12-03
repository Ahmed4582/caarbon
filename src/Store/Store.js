import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  REGISTER,
  PURGE,
  PERSIST,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import ProductSlice from "./productSlice/ProductSlice";
import categorySlice from "./Catogries/categorySlice";
import loginSlice from "./Login/loginSlice";
import ProductDetailsSlice from "./ProductDetails/ProductDetailsSlice";
import CartSlice from "./Cart/CartSlice";
import userInfoSlice from "./userInfo/userInfoSlice";

const persistedConfig = {
  key: "root",
  storage,
  whiteList: ["cart", "auth"],
};

const rootReducers = combineReducers({
  ProductSlice,
  categorySlice,
  loginSlice,
  ProductDetailsSlice,
  CartSlice,
  userInfoSlice,
});

const persistedReducer = persistReducer(persistedConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, REGISTER, PURGE, PERSIST],
      },
    });
  },
});

const persistor = persistStore(store);

export { store, persistor };
