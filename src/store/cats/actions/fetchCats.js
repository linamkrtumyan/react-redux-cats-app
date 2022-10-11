import request from "../../request";
import {
  FETCH_CATS_REQUEST,
  FETCH_CATS_SUCCESS,
  FETCH_CATS_FAILURE,
} from "../types";

export const fetchCats = (id) => {
  return (dispatch, getState) => {
    const page = getState().catsReducer.page;

    dispatch(fetchCatsRequest());
    request(`images/search?limit=10&page=${page}&category_ids=${id}`)
      .then((data) => {
        dispatch(fetchCatsSuccess(data));
      })
      .catch((e) => {
        dispatch(fetchCatsFailure(e));
      });
  };
};

const fetchCatsRequest = () => {
  return {
    type: FETCH_CATS_REQUEST,
  };
};

const fetchCatsSuccess = (data) => {
  const cats = data ? data : [];

  return {
    type: FETCH_CATS_SUCCESS,
    payload: {
      cats,
    },
  };
};

const fetchCatsFailure = (error) => {
  return {
    type: FETCH_CATS_FAILURE,
    payload: { error },
  };
};
