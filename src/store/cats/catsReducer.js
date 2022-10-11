import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATS_REQUEST,
  FETCH_CATS_SUCCESS,
  FETCH_CATS_FAILURE,
  CHANGE_PAGE,
} from "./types";

const initialState = {
  cats: [],
  categories: [],
  error: null,
  loading: true,
  page: 1,
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        categories: action.payload.categories,
      };
    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case FETCH_CATS_REQUEST:
      return {
        ...state,
        cats: [],
        loading: true,
      };
    case FETCH_CATS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        cats: action.payload.cats,
        page: 1,
      };
    case FETCH_CATS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case CHANGE_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };

    default:
      return { ...state };
  }
};

export default contactsReducer;
