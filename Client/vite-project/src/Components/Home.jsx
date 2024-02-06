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
import { addEmployee } from "../redux/action/AddEmployee";
import { fetchEmployee } from "../redux/action/FetchEmployee";
import useLogout from "../hooks/useLogout";
import { updateEmployee } from "../redux/action/UpdateEmployee";
import { CustomModal as Modal } from "./common/CustomModal";
import UpdateFrom from "./forms/UpdateFrom";
import DeleteForm from "./forms/DeleteForm";
const Home = () => {
  const { employeeList, loading, error } = useSelector(
    (state) => state.root.employee
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { logout } = useLogout();
  const [item, setItem] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [check, setCheck] = useState();

  //
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleUpdateShow = (item) => {
    setShow(true);
    setItem(item);
    setCheck("update");
  };
  const handleDeleteShow = (item) => {
    setItem(item);
    setShow(true);
    setCheck("delete");
  };
  useEffect(() => {
    dispatch(fetchEmployee());
  }, []);
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
    toast.warn("Logout");
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

            {/* <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={(e) => handleUpdate(e)}
            >
              Update
            </Button> */}

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
                {loading ? <TableCell> Loading... </TableCell> : null}
                {!loading && employeeList.length == 0 ? (
                  <TableCell> No Records </TableCell>
                ) : null}
                {error ? <TableCell> {error} </TableCell> : null}

                {!!employeeList.length &&
                  employeeList?.map((item, index) => {
                    return (
                      <TableRow
                        key={index}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="left">
                          <Typography> {index + 1} </Typography>
                        </TableCell>
                        <TableCell align="left">
                          <Typography> {item.name} </Typography>
                        </TableCell>
                        <TableCell align="left">
                          <Typography> {item.position}</Typography>
                        </TableCell>
                        <TableCell align="left">
                          <Box sx={{ display: "flex", cursor: "pointer" }}>
                            <Box
                              sx={{ color: "black", mr: 1, cursor: "pointer" }}
                              onClick={() => handleUpdateShow(item)}
                            >
                              <EditIcon />
                            </Box>
                            <Box
                              sx={{ color: "red", cursor: "pointer" }}
                              onClick={() => handleDeleteShow(item)}
                            >
                              <DeleteIcon />
                            </Box>
                          </Box>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </div>
      <Modal
        title={check == "update" ? "Update Employee " : "Delete Employee"}
        size={check == "update" ? "sm" : "md"}
        show={show}
        onHide={handleClose}
      >
        {check == "update" ? (
          <UpdateFrom item={item} handleClose={handleClose} />
        ) : (
          <DeleteForm item={item} handleClose={handleClose} />
        )}
      </Modal>
    </div>
  );
};

export default Home;
