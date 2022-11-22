import axios from "axios";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const CREATE_DISCOUNT = "CREATE_DISCOUNT";
export const PUT_PRODUCT = "PUT_PRODUCT";
export const PUT_INVENTORY = "PUT_INVENTORY";
export const PUT_DISCOUNT = "PUT_DISCOUNT";
export const DELETE_PRODUCT = "DELETE_PRODUCT"
export const FAIL_CREATED_MSG = "FAIL_CREATED_MSG";
export const GET_CATEGORY_DETAILS = "GET_CATEGORY_DETAILS";
export const FILTER1 = "FILTER1";


export const getProduct = () => {
  return async function (dispatch) {
    let product = await axios.get("http://localhost:3001/product");
    return dispatch({ type: GET_ALL_PRODUCTS, payload: product.data });
  };
};

export const getProductById = (id) => {
  return async function (dispatch) {
    let productById = await axios.get(`http://localhost:3001/product/${id}`);
    return dispatch({ type: GET_PRODUCT_BY_ID, payload: productById.data });
  };
};

export const createProduct = (product) => {
  return async function (dispatch) {
    try {
      const createProdu = await axios.post(
        "http://localhost:3001/product",
        product
      );
      return dispatch({ type: CREATE_PRODUCT, payload: createProdu });
    } catch (error) {
      return dispatch({ type: FAIL_CREATED_MSG, payload: error.response.data });
    }
  };
};
export const createDiscount = (product) => {
  return async function (dispatch) {
    try {
      const createDiscount = await axios.post(
        "http://localhost:3001/discount",
        product
      );
      return dispatch({ type: CREATE_DISCOUNT, payload: createDiscount.data });
    } catch (error) {
      return dispatch({
        type: FAIL_CREATED_MSG,
        payload: error.response.error.data,
      });
    }
  };
};

export const putProductById = (id, product) => {
  return async function (dispatch) {
    const putProduct = await axios.put(
      `http://localhost:3001/product/${id}`,
      product
    );
    return dispatch({ type: PUT_PRODUCT, payload: putProduct.data });
  };
};

export const putInventory = (id, product) => {
  return async function (dispatch) {
    const putInventory = await axios.put(
      `http://localhost:3001/inventory/${id}`,
      product
    );
    return dispatch({ type: PUT_INVENTORY, payload: putInventory.data });
  };
};

export const putDiscount = (product) => {
  return async function (dispatch) {
    const putInventory = await axios.put(
      "http://localhost:3001/discount/",
      product
    );
    return dispatch({ type: PUT_DISCOUNT, payload: putInventory.data });
  };
};

export const deleteProdut = (id) => {
  return async function (dispatch) {
    const deleteProduct = await axios.delete(
      `http://localhost:3001/product/${id}`
    );
    return dispatch({ type: DELETE_PRODUCT, payload: deleteProduct.data });
  };
};

export const getCategoryDetails = (category) => {
  return async function (dispatch) {
    const categoryDetails = await axios.get(
      `http://localhost:3001/categoryDetails/${category}`
    );
    return dispatch({
      type: GET_CATEGORY_DETAILS,
      payload: categoryDetails.data,
    });
  };
};

export const filter1 = (payload) => {
  return {
    type: FILTER1,
    payload: payload,
  };
};