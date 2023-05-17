import React, { useState,useEffect } from 'react'
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/acction';
import './home.css'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {  useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import AddIcon from '@mui/icons-material/Add';
import { deleteProduct } from '../../redux/acction';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

function Home() {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [err,setErr] =useState(false)
  const [selectAll, setSelectAll] = useState(false);
  const [items,setItems] = useState([])
  const [edit,setEdit] = useState()
  const [deletee,setDeletee] = useState([])
  const product = useSelector(state => state.product)
 useEffect(() => {
      setItems(product.products.data)

}, [])
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const nav = useNavigate()
const dispatch = useDispatch()
useEffect(()=>{
  dispatch(fetchProducts())
  setItems(product.products.data)
},[dispatch])

// const [checkboxes, setCheckboxes] = useState([])

  const handleCheckboxChange = (id)=>{
    const updatedCheckboxes = product.products.data?.data.map((checkbox) => {
      if (checkbox._id === id) {
        checkbox.isChecked = !checkbox.isChecked;
      }
      return checkbox;
    });
    const deleid = updatedCheckboxes.filter(val =>{
      return val.isChecked === true
    })
    setDeletee(deleid)
   
  }
const handleSelectAll = ()=>{
  setSelectAll(!selectAll)
  const updatedCheckboxes = product.products.data?.data.map((checkbox) => {
   checkbox.isChecked = !selectAll
    return checkbox;
  });
  const deleid = updatedCheckboxes.filter(val =>{
    return val.isChecked === true
  })
  setDeletee(deleid)

}
function adduserredirt(){
  localStorage.setItem('token','')
  nav('/add')

}
function idedit(id,name,email,address,age){
  localStorage.setItem('bken','')
  const user = {
    id:id,
    name:name,
    email:email,
    address:address,
    age:age
    }
    localStorage.setItem('user',JSON.stringify(user))
setEdit(id)
nav('/edit')
}
function dele(){
if(deletee.length === 0){
 setOpen(false) ; setErr('vui long chon truong de xoa') ; setNoti(true)
}else{
  setOpen(true)
}
}
const [open, setOpen] = React.useState(false);
const handleClose = () => setOpen(false);

function deleteuser(){
let ketqua = []
  for(let i=0;i<deletee.length;i++){
    console.log(98,deletee[i]._id)
    ketqua.push(deletee[i]._id)
   }
  dispatch(deleteProduct({userIds:ketqua}))
  setNoti(true);
  setOpen(false)
}
function huy(){
  setErr('Xoa khong thanh cong')
  setOpen(false)
  setNoti(true)
}

const [noti, setNoti] = React.useState(false);
  const handleClosee = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setNoti(false);
  };
  function handleClick() {
   nav(-1)
 localStorage.setItem('token','')
 localStorage.setItem('bken','')
  }
  return (
  <React.Fragment> 
  
      <div className='checklabel'>
          <label>
            <input
              type="checkbox"
              checked={selectAll}
              onClick={handleSelectAll} 
               readOnly
            />
           <h5 className='txtretroshadow'>Select All</h5>
          </label>
      </div>
      <Link to="#" onClick={handleClick} className='back_back page'>
      Back
    </Link>
      <div className='buton-click'>
      <AddIcon className='iconnn' onClick={()=>adduserredirt()}>Add User</AddIcon>
      {deletee.length >0 ?  <DeleteIcon className='iconnn' onClick={()=>dele()}>Delete</DeleteIcon>:null}
      </div>
      <table className="table">
    <thead>
    <tr>
      <th scope="col" className='tal'>Name</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
      <th>Age</th>
      <th>Acction</th>
    </tr>
    </thead>
    <tbody>
  {product.products.data?.data?.map((item,index) => (
              <tr  key={item._id}>
                <td className='d-flex '><label>
                <input
                  type="checkbox"
                  checked={item.isChecked}
                  onChange={() => handleCheckboxChange(item._id)}
                  className='inputcheck'
                />
              </label>
              {item.name}</td>
              <td>{item.email}</td>
              <td>{item.address}</td>
              <td>{item.age}</td>
              <td><EditIcon variant="contained" className='btn' onClick={()=>idedit(item._id,item.name,item.email,item.address,item.age)}>Edit User</EditIcon></td>
              </tr>
          ))}
  </tbody>
</table>
<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Bạn Có Muốn Xoá
          </Typography>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {deletee.map(function(val,index){
            return (
              <Grid item xs={2} sm={4} md={4} key={index}>
              <p key={val._id}>
                  {val.name}
                </p> 
          </Grid>
            )
         })}
      </Grid>
      <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<DeleteIcon />} className='widthh' onClick={()=>huy()}>
        Cancel
      </Button>
      <Button variant="contained" endIcon={<SendIcon />} className='widthh' onClick={()=>deleteuser()}>
        Send
      </Button>
    </Stack>
        </Box>
      </Modal>
      <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={noti} autoHideDuration={6000} onClose={handleClosee}>
        {err ? <Alert severity="error">{err}</Alert> :  <Alert onClose={handleClosee} severity="success" className='noti'>
          Delete success message!
        </Alert>}
      </Snackbar>
    </Stack>    
  </React.Fragment>
  
  )
}

export default Home