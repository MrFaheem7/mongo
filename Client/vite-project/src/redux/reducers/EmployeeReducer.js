import { createSlice } from "@reduxjs/toolkit";
import { fetchEmployee } from "../action/FetchEmployee";
import { addEmployee } from "../action/AddEmployee";
import { updateEmployee } from "../action/UpdateEmployee";
import { removeEmployee } from "../action/RemoveEmployee";
import { toast } from "react-toastify";
const initialState = {
  loading: false,
  employeeList: [],
  error: "",
  response: "",
};
const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    resetData: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEmployee.fulfilled, (state, action) => {
      state.employeeList = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchEmployee.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchEmployee.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
    builder.addCase(addEmployee.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addEmployee.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      if (Array.isArray(state.employeeList)) {
        state.employeeList.unshift(action.payload.response);
      } else {
        state.employeeList = [action.payload.response];
      }

      state.response = action.payload.message;
      toast.success(action.payload.message);
    });
    builder.addCase(addEmployee.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      toast.error(action.error.message);
    });
    builder.addCase(updateEmployee.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateEmployee.fulfilled, (state, action) => {
      const updateItem = action.payload.updateEmployee;

      const index = state.employeeList.findIndex(
        (item) => item._id === updateItem._id
      );
      if (index !== -1) {
        state.employeeList[index] = updateItem;
      }
      state.response = "update";
      state.loading = false;
      toast.success(action.payload.message);
    });
    builder.addCase(removeEmployee.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(removeEmployee.fulfilled, (state, action) => {
      state.employeeList = state.employeeList.filter((item) => {
        return item._id !== action.payload.deleteEmployee._id;
      });
      toast.success(action.payload.message);
      state.response = "deleted";
      state.loading = false;
    });
  },
});
export default employeeSlice.reducer;
export const { resetData } = employeeSlice.actions;
