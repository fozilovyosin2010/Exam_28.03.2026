import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import AddIcon from "@mui/icons-material/Add";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules

import { Navigation } from "swiper/modules";
import Button from "@mui/material/Button";

const Info = () => {
  const { id } = useParams();

  const api = "http://37.27.29.18:8001";

  const [user, setUser] = useState(null);

  const getById = async () => {
    try {
      const { data } = await axios.get(`${api}/api/to-dos/${id}`);
      setUser(data.data);
      console.log(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const delImgData = async (idx) => {
    try {
      await axios.delete(`${api}/api/to-dos/images/${idx}`);
      getById();
    } catch (error) {
      console.error(error);
    }
  };

  const postImgData = async (id, obj) => {
    try {
      await axios.post(`${api}/api/to-dos/${id}/images`, obj);
      getById();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getById();
  }, []);

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

    formData.append("Images", event.target["image"].files[0]);

    postImgData(id, formData);

    handleCloseAdd();
    event.target["image"].files[0] = "";
  };

  return (
    <div>
      <div className="p-4">
        <Button variant="outlined" onClick={handleClickOpenAdd}>
          <AddIcon /> Add items
        </Button>
        <div className="flex items-center">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper max-w-full"
          >
            {user?.images.map((e) => {
              return (
                <SwiperSlide>
                  <img
                    className="w-[500px]"
                    src={`${api}/images/${e.imageName}`}
                    alt=""
                  />
                  <div className="flex justify-center items-center">
                    <Button
                      onClick={() => delImgData(e.id)}
                      variant="outlined"
                      sx={{ color: "red" }}
                    >
                      Delete
                    </Button>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div>Name: {user?.name}</div>
        <div>Description: {user?.description}</div>
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
    </div>
  );
};

export default Info;
