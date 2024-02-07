import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import { updateEmployee } from "../../redux/action/UpdateEmployee";
import { useDispatch } from "react-redux";
const UpdateFrom = ({ handleClose, item }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      id: item?._id || "",
      name: item?.name || "",
      position: item?.position || "",
    },
    onSubmit: (values) => {
      if (values) {
        dispatch(
          updateEmployee({
            id: values?.id,
            name: values?.name,
            position: values?.position,
          })
        );
      }
    },
  });
  const handleSubmit = (e) => {
    formik.handleSubmit();
    handleClose();
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2em",
          flexDirection: "column",
        }}
      >
        <Box>
          <TextField
            sx={{ color: "white" }}
            variant="outlined"
            size="small"
            name="name"
            placeholder="Name"
            value={formik.values.name}
            onChange={() => formik.handleChange("name")}
          />
        </Box>
        <Box>
          <TextField
            variant="outlined"
            size="small"
            name="position"
            placeholder="Position"
            value={formik.values.position}
            onChange={formik.handleChange("position")}
          />
        </Box>
        <Box>
          <Button type="submit" variant="contained">
            Update
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default UpdateFrom;
