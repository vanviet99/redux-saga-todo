export const actiontype ={
    FETCH_PRODUCTS : 'FETCH_PRODUCTS',
    FETCH_PRODUCTS_SUCCESS : 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_ERROR : 'FETCH_PRODUCTS_ERROR',

    ADD_PRODUCT : 'ADD_PRODUCT',
    ADD_PRODUCT_SUCCESS : 'ADD_PRODUCT_SUCCESS',
    ADD_PRODUCT_ERROR: 'ADD_PRODUCT_ERROR',
    
    EDIT_PRODUCT : 'EDIT_PRODUCT',
    EDIT_PRODUCT_SUCCESS : 'EDIT_PRODUCT_SUCCESS',
    EDIT_PRODUCT_ERROR : 'EDIT_PRODUCT_ERROR',
    
    DELETE_PRODUCT : 'DELETE_PRODUCT',
    DELETE_PRODUCT_SUCCESS : 'DELETE_PRODUCT_SUCCESS',
    DELETE_PRODUCT_ERROR :'DELETE_PRODUCT_ERROR',   
    
    SEARCH_PRODUCT : 'SEARCH_PRODUCT',
    SEARCH_PRODUCT_SUCCESS : 'SEARCH_PRODUCT_SUCCESS',
    SEARCH_PRODUCT_ERROR : 'SEARCH_PRODUCT_ERROR'

}


export const fetchProducts = (products) => ({ type: actiontype.FETCH_PRODUCTS, payload: products });
export const fetchProductsSuccess = (products) => ({ type: actiontype.FETCH_PRODUCTS_SUCCESS, payload: products });
export const fetchProductsError = (products) => ({ type: actiontype.FETCH_PRODUCTS_ERROR, payload: products });

export const addProduct = (product) => ({ type: actiontype.ADD_PRODUCT, payload: product });
export const addProductSuccess = (product) =>{return  ({ type:actiontype.ADD_PRODUCT_SUCCESS, payload: product })};
export const addProductError = (product) => ({ type:actiontype.ADD_PRODUCT_ERROR, payload: product });


export const editProduct = (product) => ({ type: actiontype.EDIT_PRODUCT, payload: product });
export const editProductSuccess = (product) => ({ type:actiontype.EDIT_PRODUCT_SUCCESS ,payload: product});
export const editProductError = (product) => ({ type: actiontype.EDIT_PRODUCT_ERROR, payload: product });

export const deleteProduct = (productId) => ({ type: actiontype.DELETE_PRODUCT, payload: productId });
export const deleteProductSuccess = (productId) => ({ type:actiontype.DELETE_PRODUCT_SUCCESS,payload: productId  });
export const deleteProductError = (productId) => ({ type: actiontype.DELETE_PRODUCT_ERROR, payload: productId });
  
export const searchProduct = (name) => ({ type: actiontype.SEARCH_PRODUCT , payload: name });
export const searchProductSuccess = (name) => ({ type:actiontype.SEARCH_PRODUCT_SUCCESS,payload: name  });
export const searchProductError = (name) => ({ type: actiontype.SEARCH_PRODUCT_ERROR, payload: name });
  