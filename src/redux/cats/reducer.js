import { handleActions } from "redux-actions";
import {
  getCatsCategoriesRequest,
  getCatsCategoriesSuccess,
  getCatsCategoriesFailure,
  getCatsRequest,
  getCatsSuccess,
  getCatsFailure,
  getMoreCatsRequest,
  getMoreCatsSuccess,
  getMoreCatsFailure,
} from "./action";

const initialState = {
  isGettingCatsCategories: false,
  catsCategories: [],
  isGetCatsCategoriesSuccess: false,
  isGetCatsCategoriesFailure: false,
  isGettingCats: false,
  cats: [],
  category: null,
  isGetCatsSuccess: false,
  isGetCatsFailure: false,
  errorMessages: false,
};

const reducer = handleActions(
  {
    [getCatsCategoriesRequest]: (state) => ({
      ...state,
      isGettingCatsCategories: true,
      isGetCatsCategoriesSuccess: false,
      isGetCatsCategoriesFailure: false,
    }),
    [getCatsCategoriesSuccess]: (state, { payload }) => ({
      ...state,
      isGettingCatsCategories: false,
      isGetCatsCategoriesSuccess: true,
      catsCategories: payload,
    }),
    [getCatsCategoriesFailure]: (state, { payload }) => ({
      ...state,
      isGettingCatsCategories: false,
      isGetCatsCategoriesFailure: true,
      errorMessages: payload,
    }),

    [getCatsRequest]: (state) => ({
      ...state,
      isGettingCats: true,
      cats: [],
      isGetCatsSuccess: false,
      isGetCatsFailure: false,
    }),
    [getCatsSuccess]: (state, { payload }) => ({
      ...state,
      isGettingCats: false,
      isGetCatsSuccess: true,
      cats: payload.data,
      category: payload.category,
    }),
    [getCatsFailure]: (state, { payload }) => ({
      ...state,
      isGettingCats: false,
      isGetCatsFailure: true,
      errorMessages: payload,
    }),

    [getMoreCatsRequest]: (state) => ({
      ...state,
      isGettingMoreCats: true,
      isGetMoreCatsSuccess: false,
      isGetMoreCatsFailure: false,
    }),
    [getMoreCatsSuccess]: (state, { payload }) => ({
      ...state,
      isGettingMoreCats: false,
      isGetMoreCatsSuccess: true,
      cats: [...state.cats, ...payload],
    }),
    [getMoreCatsFailure]: (state, { payload }) => ({
      ...state,
      isGettingMoreCats: false,
      isGetMoreCatsFailure: true,
      errorMessages: payload,
    }),
  },
  initialState
);

export default reducer;
