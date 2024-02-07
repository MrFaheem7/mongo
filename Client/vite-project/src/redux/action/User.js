import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const UserAction = createAsyncThunk("user", async (data) => {
  try {
    const response = await axios.post("http://localhost:3000/login", {
      email: data.email,
      password: data.password,
    });
    if (response.data.message == "Login Successfully") {
      toast.success(response.data.message);
      // data?.navigate("/home");
    } else {
      toast.error(response.data);
    }
    return response.data;
  } catch (error) {
    console.log(error, "error");
  }
});
