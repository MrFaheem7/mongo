import { createSlice } from "@reduxjs/toolkit";
import { UserAction } from "../../action/User";
const initialState = {
  user: "",
  token: "",
  loading: false,
  error: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUser: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(UserAction.fulfilled, (state, action) => {
      if (action.payload.message == "Login Successfully") {
        state.user = action.payload;
      } else {
        state.user = "";
      }
      state.loading = false;
      state.token = action.payload.token;
    });
    builder.addCase(UserAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(UserAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});
export default userSlice.reducer;
export const { resetUser } = userSlice.actions;
