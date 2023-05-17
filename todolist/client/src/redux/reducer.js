
const initialState = {
    products: {},
    loading: false,
    error: '',
  };
  
  export const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PRODUCTS':
        return {
          ...state,
          loading: true,
          error: '',
        };                                                                              
      case 'FETCH_PRODUCTS_SUCCESS':
        const products = action.payload;
        return {
          ...state,
          products,
          loading: false,
          error: '',
        };
      case 'FETCH_PRODUCTS_ERROR':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
        case 'SEARCH_PRODUCT':
          return {
            ...state,
            loading: true,
            error: action.payload,
          };
      case 'SEARCH_PRODUCT_SUCCESS':
        const search = action.payload;
        return {
          ...state,
          products:search,
          loading: false,
          error: '',
        };
      case 'SEARCH_PRODUCT_ERROR':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
        case 'ADD_PRODUCT':
        return {
          ...state,
          loading: true,
          error: '',
        };
      case 'ADD_PRODUCT_SUCCESS':
        const newProduct = action.payload;
        return {
          ...state,
          products:  newProduct,
          loading: false,
          error: '',
        };
      case 'ADD_PRODUCT_ERROR':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case 'EDIT_PRODUCT_SUCCESS':
        const updatedProduct = action.payload;
        return {
          ...state,
          products: updatedProduct,
          loading: false,
          error: '',
        };
      case 'EDIT_PRODUCT_ERROR':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case 'DELETE_PRODUCT_SUCCESS':
        const data = action.payload;
        return {
          ...state,
          products: data,
          loading: false,
          error: '',
        };
      case 'DELETE_PRODUCT_ERROR':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  export default productReducer

