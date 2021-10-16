import { createAction } from "redux-actions";

export const getCatsCategoriesRequest = createAction(
  "GET_CATS_CATEGORIES_REQUEST"
);
export const getCatsCategoriesSuccess = createAction(
  "GET_CATS_CATEGORIES_SUCCESS"
);
export const getCatsCategoriesFailure = createAction(
  "GET_CATS_CATEGORIES_FAILURE"
);

export const getCatsRequest = createAction("GET_CATS_REQUEST");
export const getCatsSuccess = createAction("GET_CATS_SUCCESS");
export const getCatsFailure = createAction("GET_CATS_FAILURE");

export const getMoreCatsRequest = createAction("GET_MORE_CATS_REQUEST");
export const getMoreCatsSuccess = createAction("GET_MORE_CATS_SUCCESS");
export const getMoreCatsFailure = createAction("GET_MORE_CATS_FAILURE");
