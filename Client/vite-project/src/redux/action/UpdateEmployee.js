import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateEmployee = createAsyncThunk(
  "employee/updateEmployee",
  async (data) => {
    const response = await axios.put(
      `http://localhost:3000/api/data/${data.id}`,
      {
        name: data.name,
        position: data.position,
      }
    );
    return response;
  }
);
