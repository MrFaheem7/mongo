import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const removeEmployee = createAsyncThunk(
  "employee/removeEmployee",
  async (data) => {
    const response = await axios.delete(
      `http://localhost:3000/api/data/${data}`
    );
    console.log(response.data);
    return response.data;
  }
);
