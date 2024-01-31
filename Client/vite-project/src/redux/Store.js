import { configureStore } from "@reduxjs/toolkit";
import EmployeeReducer from "./reducers/EmployeeReducer";
import UserReducer from "./reducers/auth/UserReducer";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "user",
  storage,
};
const store = configureStore({
  reducer: {
    employee: EmployeeReducer,
    user: UserReducer,
  },
});
export default store;
