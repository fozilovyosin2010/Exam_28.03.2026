import axios from "axios";
import React, { useEffect, useState } from "react";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MenuBtn from "../Component/Menu";

import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router";

const Todo = () => {
  const api = "http://37.27.29.18:8001";

  const [todos, setTodos] = useState([]);

  const getData = async () => {
    try {
      let { data } = await axios.get(`${api}/api/to-dos`);
      setTodos(data.data);
      console.log(data.data);
    } catch (error) {
      console.error(error);
    }
  };
  const putData = async (obj) => {
    try {
      await axios.put(`${api}/api/to-dos`, obj);
      getData();
    } catch (error) {
      console.error(error);
    }
  };

  const delData = async (id) => {
    try {
      await axios.delete(`${api}/api/to-dos?id=${id}`);
      getData();
    } catch (error) {
      console.error(error);
    }
  };

  const checkedData = async (id) => {
    try {
      await axios.put(`${api}/completed?id=${id}`);
      getData();
    } catch (error) {
      console.error(error);
    }
  };

  const postData = async (obj) => {
    try {
      await axios.post(`${api}/api/to-dos`, obj);
      getData();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function handleCheckBtn(id) {
    checkedData(id);
  }

  const [openAdd, setOpenAdd] = React.useState(false);

  const handleClickOpenAdd = () => {
    setOpenAdd(true);
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  const handleSubmitAdd = (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("Name", event.target["name"].value);
    formData.append("Description", event.target["description"].value);
    formData.append("Images", event.target["image"].files[0]);

    postData(formData);
    handleCloseAdd();

    event.target["name"].value = "";
    event.target["description"].value = "";
    event.target["image"].value = "";
  };
  const [openEdit, setOpenEdit] = useState(false);

  const [idxEdit, setIdxEdit] = useState(null);
  const [nameEdit, setNameEdit] = useState("");
  const [desEdit, setDesEdit] = useState("");
  const [imgEdit, setImgEdit] = useState("");

  const handleClickOpenEdit = (e) => {
    setOpenEdit(true);
    console.log(e);

    setTimeout(() => {
      setIdxEdit(e.id);
      setDesEdit(e.description);
      setNameEdit(e.name);
    }, 0);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const handleSubmitEdit = (event) => {
    event.preventDefault();

    const obj = {
      id: idxEdit,
      name: nameEdit.trim(),
      description: desEdit.trim(),
    };
    putData(obj);

    handleCloseEdit();
  };

  const [openDel, setOpenDel] = useState(false);
  const [objDel, setObjDel] = useState(null);

  function handleBtnDel(obj) {
    setObjDel(obj);
    setOpenDel(true);
  }

  function handleCloseDel() {
    setOpenDel(false);
    setObjDel(null);
  }

  function handleClickDel() {
    delData(objDel.id);

    handleCloseDel();
  }

  const navigate = useNavigate();
  function handleBtnInfo(id) {
    navigate(`/info/${id}`);
  }

  return (
    <div>
      <div className="header p-4">
        <Button variant="outlined" onClick={handleClickOpenAdd}>
          <AddIcon /> Add items
        </Button>
      </div>
      <div className="contaier p-4">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">Descripion</StyledTableCell>
                <StyledTableCell align="right">status</StyledTableCell>
                <StyledTableCell align="right">Image</StyledTableCell>
                <StyledTableCell align="right">options</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {todos.map((elem) => (
                <StyledTableRow key={elem.id}>
                  <StyledTableCell component="th" scope="row">
                    {elem.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {elem.description}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <span
                      className={`${elem.isCompleted ? "bg-blue-500" : "bg-red-500"} text-[#fff] p-2 rounded-xl`}
                    >
                      {elem.isCompleted ? "COMPLETE" : "INCOMPLETE"}
                    </span>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <div className="flex justify-end">
                      <img
                        className="w-[100px]"
                        src={`${api}/images/${elem.images[0]?.imageName}`}
                        alt=""
                      />
                    </div>
                  </StyledTableCell>
                  <StyledTableCell>
                    <MenuBtn
                      btnEdit={() => handleClickOpenEdit(elem)}
                      btnDel={() => handleBtnDel(elem)}
                      btnCheck={() => handleCheckBtn(elem.id)}
                      btnInfo={() => handleBtnInfo(elem.id)}
                    />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* add modal */}
      <Dialog open={openAdd} onClose={handleCloseAdd}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <form onSubmit={handleSubmitAdd} id="subscription-form">
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="name"
              label="Name"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="description"
              name="description"
              label="Description"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="image"
              name="image"
              label="Description"
              type="file"
              fullWidth
              variant="standard"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAdd}>Cancel</Button>
          <Button type="submit" form="subscription-form">
            Add
          </Button>
        </DialogActions>
      </Dialog>
      {/* del modal */}
      <Dialog open={openDel} onClose={handleCloseDel}>
        <DialogTitle>Delete modal</DialogTitle>
        <DialogContent>
          <DialogContentText>
            do you really want to delete {objDel?.name}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDel}>Cancel</Button>
          <Button onClick={handleClickDel}>delete</Button>
        </DialogActions>
      </Dialog>

      {/* edit modal */}
      <Dialog open={openEdit} onClose={handleCloseEdit}>
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <form onSubmit={handleSubmitEdit} id="subscription-form">
            <TextField
              value={nameEdit}
              onChange={(e) => setNameEdit(e.target.value)}
              autoFocus
              required
              margin="dense"
              id="name"
              name="name"
              label="Name"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              value={desEdit}
              onChange={(e) => setDesEdit(e.target.value)}
              autoFocus
              required
              margin="dense"
              id="description"
              name="description"
              label="Description"
              type="text"
              fullWidth
              variant="standard"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit}>Cancel</Button>
          <Button type="submit" form="subscription-form">
            edit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Todo;
