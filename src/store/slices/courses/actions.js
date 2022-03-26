export function addCourseRequest(payload) {
  return {
    type: "@courses/ADD_COURSE_REQUEST",
    payload,
  };
}
export function addCourseSuccess(course) {
  return {
    type: "@courses/ADD_COURSE_SUCCESS",
    payload: { course },
  };
}
export function addCourseFailure() {
  return {
    type: "@courses/ADD_COURSE_FAILURE",
  };
}

export function editCourseRequest(payload) {
  return {
    type: "@courses/EDIT_COURSE_SET",
    payload,
  };
}
export function removeCourseRequest(payload) {
  return {
    type: "@courses/REMOVE_COURSE_SET",
    payload,
  };
}
