import { call, put, takeLatest } from "redux-saga/effects";
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

import axiosApiInstance from "../../config/axios";
import { catchResponseMessages } from "../../utils";

const getCatsCategories = function* () {
  try {
    const response = yield call(() => axiosApiInstance.get("categories"));

    if (response.status === 200) {
      yield put(getCatsCategoriesSuccess(response.data));
    }
  } catch (e) {
    console.log(`Catch for getCatsCategoriesRequest: ${e}`);
    const messages = catchResponseMessages(e);
    yield put(getCatsCategoriesFailure(messages));
  }
};

const getCats = function* ({ payload }) {
  try {
    const response = yield call(() =>
      axiosApiInstance.get(
        `images/search?limit=10&page=1&category_ids=${payload}`
      )
    );

    if (response.status === 200) {
      yield put(getCatsSuccess({ data: response.data, category: payload }));
    }
  } catch (e) {
    console.log(`Catch for getCatsRequest: ${e}`);
    const messages = catchResponseMessages(e);
    yield put(getCatsFailure(messages));
  }
};

const getMoreCats = function* ({ payload }) {
  try {
    const response = yield call(() =>
      axiosApiInstance.get(
        `images/search?limit=10&page=1&category_ids=${payload}`
      )
    );

    if (response.status === 200) {
      console.log(response.data);
      yield put(getMoreCatsSuccess(response.data));
    }
  } catch (e) {
    console.log(`Catch for getMoreCatsRequest: ${e}`);
    const messages = catchResponseMessages(e);
    yield put(getMoreCatsFailure(messages));
  }
};

export default function* saga() {
  yield takeLatest(getCatsCategoriesRequest, getCatsCategories);
  yield takeLatest(getCatsRequest, getCats);
  yield takeLatest(getMoreCatsRequest, getMoreCats);
}
