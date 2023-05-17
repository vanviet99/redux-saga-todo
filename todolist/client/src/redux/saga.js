import { takeEvery, put, call } from 'redux-saga/effects';
import { addProductSuccess, addProductError,fetchProductsSuccess,fetchProductsError,deleteProductSuccess,deleteProductError,searchProductError, searchProductSuccess,editProductSuccess, editProductError, fetchProducts} from './acction';
import axios from 'axios';
const apiGetdata = async ()=>{
  return await axios.get('http://localhost:8888/user/getall')
}
const addProductToAPI = async(data)=>{
  return await axios.post('http://localhost:8888/user/adduser',data)
}

const deleteProductAPI = async(userIds )=>{
    return await fetch("http://localhost:8888/user/deleteuser", {
      method: "DELETE", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userIds),
    }).then(response => response.json())
    .then(data => {
      console.log('123123123:', {data:data});
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

const editProductAPI = async(data)=>{
  return await axios.patch(`http://localhost:8888/user/updateuser/${data.id}`, {name :data.name , email: data.email, address: data.address, age:data.age})
}
const searchProductAPI = async(name)=>{
  return await axios.get(`http://localhost:8888/user/search?searchbyname=${name}`)
}
function* fetchProductsSaga() {
  try {
    const products = yield call(apiGetdata) || [];
    yield put(fetchProductsSuccess(products));
  } catch (error) {
    yield put(fetchProductsError(error));
  }
}
function* searchProducttt(action){
  try {
    const {name} = action.payload
    const searchproductt = yield call(searchProductAPI, name) || [];
    yield put(searchProductSuccess({data: searchproductt})) 
  } catch (error) {
    yield put(searchProductError(error.response.data.message));
  }

}

function* addProduct(action) {
  try {
    const newProduct = yield call(addProductToAPI, action.payload) || [];
    yield put(addProductSuccess(newProduct));

  } catch (error) {
    yield put(addProductError(error.response.data.message)); 
  }

}

function* editProduct(action) {
  try {
    const updatedProduct = yield call(editProductAPI,action.payload);
    yield put(editProductSuccess(updatedProduct));
  } catch (error) {
    yield put(editProductError(error));
  }
}

function*  deleteProduct(action) {
  try {
   const data =  yield call(deleteProductAPI, action.payload)
   console.log(75,data)
    yield put(deleteProductSuccess({data:data}));
    yield put(fetchProducts())
  } catch (error) {
    yield put(deleteProductError(error));
  }
}
export function* handleSaga() {
  yield takeEvery('FETCH_PRODUCTS', fetchProductsSaga);
  yield takeEvery('ADD_PRODUCT', addProduct);
  yield takeEvery('DELETE_PRODUCT', deleteProduct);
  yield takeEvery('EDIT_PRODUCT', editProduct);
  yield takeEvery('SEARCH_PRODUCT',searchProducttt);
}


