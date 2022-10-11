import request from "../../request";
import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
} from "../types";

export const fetchCategories = () => {
  return (dispatch) => {
    dispatch(fetchCategoriesRequest());
    request("categories")
      .then((data) => {
        dispatch(fetchCategoriesSuccess(data));
      })
      .catch((e) => {
        dispatch(fetchCategoriesFailure(e));
      });
  };
};

const fetchCategoriesRequest = () => {
  return {
    type: FETCH_CATEGORIES_REQUEST,
  };
};

const fetchCategoriesSuccess = (data) => {
  const categories = data ? data : [];

  return {
    type: FETCH_CATEGORIES_SUCCESS,
    payload: {
      categories,
    },
  };
};

const fetchCategoriesFailure = (error) => {
  return {
    type: FETCH_CATEGORIES_FAILURE,
    payload: { error },
  };
};
