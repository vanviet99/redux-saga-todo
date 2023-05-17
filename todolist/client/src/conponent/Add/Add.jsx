import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./add.css";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/acction";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Link } from "react-router-dom";
function Add() {
  const nav = useNavigate();
  function handleClick() {
    nav(-1);
  }

  const [err,setErr] = useState('')
  const selectloading = useSelector((state) => state.product); 
  const messeges =selectloading.products.data?selectloading.products.data.message:'failure'
useEffect(()=>{
  const token = localStorage.getItem('token')
  if(messeges ==='sucsess' && Boolean(token)){
    setErr('')
   nav('/')
  }else{
    setErr('email da duoc danh ky')
    localStorage.setItem('token','')
  }
},[messeges,nav])

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
      age: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().min(6, "Name qua ngan"),
      email: Yup.string().matches(
        /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
        "Dinh dang co dang nam@gmail.com , khong co dau "
      ),
      address: Yup.string(),
      age: Yup.number(),
    }),
    onSubmit: (value) => {
      dispatch(
        addProduct({
          name: value.name,
          email: value.email,
          address: value.address,
          age: value.age,
        })
      );
       setOpen(true)
      setErr('')
        localStorage.setItem('token','1')
    },
      
  });
  return (
    <React.Fragment>
      <h1>ADD USER</h1>
      <Link to="#" onClick={handleClick} className="back_back">
        Back
      </Link>
      {selectloading.loading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <form onSubmit={formik.handleSubmit} className="formmm">
          <div className="group">
            <input
              type="text"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="input_homeadmin"
              required
            ></input>
            {formik.errors.name && (
              <p className="error">{formik.errors.name}</p>
            )}
            <span className="highlight"></span>
            <span className="bar"></span>
            <label className="lable_admin">Name</label>
          </div>
          <div className="group">
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="input_homeadmin"
              required
            ></input>
            {formik.errors.email && (
              <p className="error">{formik.errors.email}</p>
            )}
            <span className="highlight"></span>
            <span className="bar"></span>
            <label className="lable_admin">Email</label>
          </div>
          <div className="group">
            <input
              type="text"
              id="address"
              name="address"
              onChange={formik.handleChange}
              value={formik.values.address}
              className="input_homeadmin"
              required
            ></input>
            {formik.errors.address && (
              <p className="error">{formik.errors.address}</p>
            )}
            <span className="highlight"></span>
            <span className="bar"></span>
            <label className="lable_admin">Address</label>
          </div>
          <div className="group">
            <input
              type="number"
              id="age"
              name="age"
              onChange={formik.handleChange}
              value={formik.values.age}
              className="input_homeadmin"
              required
            ></input>
            {formik.errors.age && <p className="error">{formik.errors.age}</p>}
            <span className="highlight"></span>
            <span className="bar"></span>
            <label className="lable_admin">Age</label>
          </div>
          <div className="form_btn">
            <button>ADD</button>
          </div>
        </form>
      )}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        {err.length >1 ? <Alert severity="error">{err}</Alert> :  <Alert onClose={handleClose} severity="success" className="noti">
          Add User Success Message!
        </Alert>}
      </Snackbar>
    </React.Fragment>
  );
}

export default Add;
