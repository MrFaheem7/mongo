import React from "react";
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
const Home = () => {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("token");
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
            />
            <TextField variant="outlined" size="small" placeholder="Position" />

            <Button variant="contained" color="primary" size="small">
              Update
            </Button>

            <Button variant="contained" color="primary" size="small">
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
