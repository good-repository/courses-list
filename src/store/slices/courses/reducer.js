import produce from "immer";

import svelte from "../../../assets/svelte-banner.svg";
import react from "../../../assets/react-banner.svg";

const INITIAL_STATE = {
  courses: [
    {
      id: 1,
      image: svelte,
      title: "Curso de Svelte",
      description:
        "Um curso para introdução ao Svelte com tecnologias modernas",
      enable: true,
      workload: "20h",
      courseActivation: "",
      courseDeactivation: "",
    },
    {
      id: 2,
      image: react,
      title: "Curso de React",
      description:
        "Como criar aplicativos utilizando React para escalar as suas aplicações ao infinito",
      enable: false,
      workload: "10h",
      courseActivation: "",
      courseDeactivation: "",
    },
  ],
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@courses/ADD_COURSE_SUCCESS":
        draft.courses = [...draft.courses, action.payload.course];
        break;
      case "@courses/EDIT_COURSE_SET":
        const updatedCourse = action.payload;
        const newArray = [...draft.courses];
        newArray[updatedCourse.id - 1] = updatedCourse;
        draft.courses = newArray;
        break;
      case "@courses/REMOVE_COURSE_SET":
        const arrayWithRemovedCourse = draft.courses.filter(
          (course) => course.id !== action.payload
        );
        draft.courses = arrayWithRemovedCourse;
        break;

      default:
        return state;
    }
  });
}
