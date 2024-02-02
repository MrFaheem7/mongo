import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Alert,
  Box,
  Button,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { resetUser } from "../redux/reducers/auth/UserReducer";
import { addEmployee } from "../redux/action/AddEmployee";
import { fetchEmployee } from "../redux/action/FetchEmployee";
import useLogout from "../hooks/useLogout";
import { updateEmployee } from "../redux/action/UpdateEmployee";
const Home = () => {
  const { response } = useSelector((state) => state.root.employee);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { logout } = useLogout();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");

  useEffect(() => {
    dispatch(fetchEmployee());
  }, [dispatch]);
  const handleUpdate = (item) => {
    dispatch(
      updateEmployee({
        id: "65ba2c9e3f8cb3cf8a3c1e5b",
        name: name,
        position: position,
      })
    );
    setId("");
    setName("");
    setPosition("");
  };
  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addEmployee({ name: name, position: position }));
    setName("");
    setPosition("");
  };
  const logOut = () => {
    logout();
    toast.info("Logout");
    navigate("/login");
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "rgb(28 55 84 / 77%)",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            boxShadow: "rgb(227 0 0 / 84%) 0px 6px 4px",
            margin: "1rem",
          }}
          onClick={logOut}
        >
          LogOut
        </button>
        <Typography variant="h5">CRUD operation using MERN</Typography>
        <Box
          sx={{
            width: "55%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              gap: "8px",
            }}
          >
            <TextField
              sx={{ color: "white" }}
              variant="outlined"
              size="small"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              variant="outlined"
              size="small"
              placeholder="Position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />

            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={(e) => handleUpdate(e)}
            >
              Update
            </Button>

            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={(e) => {
                handleAdd(e);
              }}
            >
              Add
            </Button>
          </Box>
          <TableContainer component={Paper} sx={{ marginTop: "16px" }}>
            <Table sx={{ minWidth: 659 }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{ backgroundColor: "black" }}>
                  <TableCell align="left">
                    <Typography sx={{ fontWeight: 600, color: "white" }}>
                      No
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography sx={{ fontWeight: 600, color: "white" }}>
                      Name
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography sx={{ fontWeight: 600, color: "white" }}>
                      Position
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography sx={{ fontWeight: 600, color: "white" }}>
                      Event
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableCell> Loading... </TableCell>
                <TableCell> Loading... </TableCell>
                <TableCell> Loading... </TableCell>
                <TableCell> No Records </TableCell>
                <TableRow
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell align="left">
                    <Typography> vvc </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography> jon doe </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography> HR </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Box sx={{ display: "flex", cursor: "pointer" }}>
                      <Box sx={{ color: "black", mr: 1 }}>
                        <EditIcon />
                      </Box>
                      <Box sx={{ color: "red" }}>
                        <DeleteIcon />
                      </Box>
                    </Box>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </div>
    </div>
  );
};

export default Home;
