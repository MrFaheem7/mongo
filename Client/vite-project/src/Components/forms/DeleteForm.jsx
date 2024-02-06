import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import ReportIcon from "@mui/icons-material/Report";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { removeEmployee } from "../../redux/action/RemoveEmployee";
import { fetchEmployee } from "../../redux/action/FetchEmployee";
const DeleteForm = ({ handleClose, item }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeEmployee(item._id));
    handleClose();
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h6">
          Are You Sure To want to Delete This Employee!!
        </Typography>
        <Box
          sx={{ color: "#dc3545", mr: 1, cursor: "pointer", fontSize: "4em" }}
        >
          <ReportIcon fontSize="inherit" />
        </Box>
        <Box sx={{ mt: "1em", display: "flex", gap: "2em" }}>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Confirm{" "}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default DeleteForm;
