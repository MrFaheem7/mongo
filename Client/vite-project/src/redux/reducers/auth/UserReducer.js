import { createSlice } from "@reduxjs/toolkit";
import { UserAction } from "../../action/User";
const initialState = {
  user: "",
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
      console.log(action);
      state.user = action.payload;
      state.loading = false;
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
