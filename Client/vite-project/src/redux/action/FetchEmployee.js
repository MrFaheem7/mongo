import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEmployee = createAsyncThunk(
  "employee/fetchEmployee",
  async () => {
    const response = await axios.get("http://localhost:3000/api/data");
    return response.data;
  }
);
