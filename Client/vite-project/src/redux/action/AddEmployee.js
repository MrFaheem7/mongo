import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addEmployee = createAsyncThunk(
  "employee/addEmployee",
  async (data) => {
    const response = await axios.post("http://localhost:3000/api/data", {
      name: data.name,
      position: data.position,
    });
    console.log(response.data.response, "add employee");
    return response?.data;
  }
);
