import { createSlice } from "@reduxjs/toolkit";
import { fetchEmployee } from "../action/FetchEmployee";
import { addEmployee } from "../action/AddEmployee";
import { updateEmployee } from "../action/UpdateEmployee";
import { removeEmployee } from "../action/RemoveEmployee";
const employeeSlice = createSlice({
  name: "Employee",
  initialState: {
    loading: false,
    updateState: false,
    employeeList: [],
    error: "",
    response: "",
  },
  reducers: {
    updateStateTrue: (state) => {
      state.updateState = true;
    },
    updateStateFalse: (state) => {
      state.updateState = false;
    },
    resetData: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEmployee.fulfilled, (state, action) => {
      state.employeeList = action.payload;
    });
    builder.addCase(fetchEmployee.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(addEmployee.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addEmployee.fulfilled, (state, action) => {
      state.loading = false;
      state.employeeList.push(action.payload);
      state.response = "Added";
    });
    builder.addCase(addEmployee.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(updateEmployee.fulfilled, (state, action) => {
      const updateItem = action.payload;
      console.log(updateItem);
      const index = state.employeeList.findIndex(
        (item) => item._id === updateItem._id
      );
      if (index !== -1) {
        state.employeeList[index] = updateItem;
      }
      state.response = "update";
    });
    builder.addCase(removeEmployee.fulfilled, (state, action) => {
      state.employeeList = state.employeeList.filter((item) => {
        item._id != action.payload;
      });
      state.response = "deleted";
    });
  },
});
export default employeeSlice.reducer;
export const { updateStateTrue, updateStateFalse, resetData } =
  employeeSlice.actions;
