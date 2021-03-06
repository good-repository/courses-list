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
        "Um curso para introdução ao Svelte com uso de programação funcional utilizando Ramda e Rx.JS",
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
  modules: [
    {
      id: 1,
      courseId: 1,
      image: svelte,
      title: "Introdução",
      description: "Introdução ao Svelte",
      lessons: 10,
      enable: true,
    },
    {
      id: 2,
      courseId: 1,
      image: svelte,
      title: "Programação funcional",
      description: "Biblioteca Ramda e conceito.",
      lessons: 8,
      enable: true,
    },
    {
      id: 3,
      courseId: 1,
      image: svelte,
      title: "Rx.JS",
      description: "Aprendendo sobre Rx.JS",
      lessons: 8,
      enable: false,
    },
    {
      id: 4,
      courseId: 1,
      image: svelte,
      title: "Finalização",
      description: "Finalizando o WebApp",
      lessons: 5,
      enable: true,
    },
  ],
  lessons: [
    { id: 1, moduleId: 1, title: "Primeira aula", content: "" },
    { id: 2, moduleId: 1, title: "Segunda aula", content: "" },
    { id: 3, moduleId: 1, title: "Terceira aula", content: "" },
    { id: 4, moduleId: 1, title: "Quarta aula", content: "" },
  ],
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      //COURSE
      case "@courses/ADD_COURSE_SUCCESS":
        draft.courses = [...draft.courses, action.payload.course];
        break;
      case "@courses/EDIT_COURSE_SET":
        draft.courses = action.payload;
        break;
      case "@courses/REMOVE_COURSE_SET":
        draft.courses = action.payload;
        break;

      //MODULE
      case "@courses/ADD_MODULE_SET":
        draft.modules = action.payload;
        break;
      case "@courses/EDIT_MODULE_SET":
        draft.modules = action.payload;
        break;
      case "@courses/REMOVE_MODULE_SET":
        draft.modules = action.payload;
        break;

      //LESSONS
      case "@courses/ADD_LESSON_SET":
        draft.lessons = action.payload;
        break;
      case "@courses/EDIT_LESSON_SET":
        draft.lessons = action.payload;
        break;
      case "@courses/REMOVE_LESSON_SET":
        draft.lessons = action.payload;
        break;

      default:
        return state;
    }
  });
}
