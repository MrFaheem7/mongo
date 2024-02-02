import { combineReducers, configureStore } from "@reduxjs/toolkit";
import EmployeeReducer from "./reducers/EmployeeReducer";
import UserReducer from "./reducers/auth/UserReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
  user: UserReducer,
  employee: EmployeeReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: { root: persistedReducer },
});
export const persistor = persistStore(store);
export default store;
