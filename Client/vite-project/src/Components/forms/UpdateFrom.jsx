import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
const UpdateFrom = ({ handleClose, item }) => {
  console.log(item, "itemmmm");
  const formik = useFormik({
    initialValues: {
      id: item._id,
      name: item.name || "",
      position: item.position || "",
    },
  });
  const handleSubmit = (e) => {
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
            placeholder="Name"
            value={formik.values.name}
            // onChange={(e) => setName(e.target.value)}
          />
        </Box>
        <Box>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Position"
            value={formik.values.position}
            // onChange={(e) => setPosition(e.target.value)}
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
