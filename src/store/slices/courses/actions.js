//the 3 first simulate a flow with necessity of asynchronism, but how i don't need it in this example, the others go direct to the reducer

//COURSE
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
export function editCourseSet(payload) {
  return {
    type: "@courses/EDIT_COURSE_SET",
    payload,
  };
}
export function removeCourseSet(payload) {
  return {
    type: "@courses/REMOVE_COURSE_SET",
    payload,
  };
}

//MODULE
export function addModuleSet(payload) {
  return {
    type: "@courses/ADD_MODULE_SET",
    payload,
  };
}
export function editModuleSet(payload) {
  return {
    type: "@courses/EDIT_MODULE_SET",
    payload,
  };
}
export function removeModuleSet(payload) {
  return {
    type: "@courses/REMOVE_MODULE_SET",
    payload,
  };
}

//CLASSES
export function addClassSet(payload) {
  return {
    type: "@courses/ADD_CLASS_SET",
    payload,
  };
}
export function editClassSet(payload) {
  return {
    type: "@courses/EDIT_CLASS_SET",
    payload,
  };
}
export function removeClassSet(payload) {
  return {
    type: "@courses/REMOVE_CLASS_SET",
    payload,
  };
}
