export function addCourseRequest(data) {
  return {
    type: "@courses/ADD_COURSE_REQUEST",
    payload: { data },
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
