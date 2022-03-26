import { takeLatest, all, put } from "redux-saga/effects";

import { addCourseSuccess, addCourseFailure } from "./actions";

export function* addCourse({ payload }) {
  try {
    const course = payload;
    //SE TIVESSE CHAMADA PARA APIS PASSARIA POR AQUI, SAGA PARA FINS DE DEMONSTRAÇÃO APENAS

    yield put(addCourseSuccess(course));
  } catch (erro) {
    yield put(addCourseFailure());
  }
}

export default all([takeLatest("@courses/ADD_COURSE_REQUEST", addCourse)]);
