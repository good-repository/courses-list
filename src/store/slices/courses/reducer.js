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
      modules: [
        {
          id: 1,
          image: svelte,
          title: "Introdução",
          description: "Introdução ao Svelte",
          classes: 10,
          enable: true,
        },
        {
          id: 2,
          image: svelte,
          title: "Programação funcional",
          description: "Biblioteca Ramda e conceito.",
          classes: 8,
          enable: true,
        },
        {
          id: 3,
          image: svelte,
          title: "Rx.JS",
          description: "Aprendendo sobre Rx.JS",
          classes: 8,
          enable: false,
        },
        {
          id: 4,
          image: svelte,
          title: "Finalização",
          description: "Finalizando o WebApp",
          classes: 5,
          enable: true,
        },
      ],
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
      modules: [],
    },
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

      //MODULE
      case "@courses/ADD_MODULE_SET":
        console.log(action.payload);
        break;
      case "@courses/EDIT_MODULE_SET":
        console.log(action.payload);
        break;
      case "@courses/REMOVE_MODULE_SET":
        const { courseId, moduleId } = action.payload;
        const arrayWithRemovedModule = draft.courses.map((course) => {
          if (course.id === courseId) {
            var filteredModules = course.modules.filter(
              (module) => module.id !== moduleId
            );
            var updatedCourse = { ...course, modules: filteredModules };

            return updatedCourse;
          }
          return course;
        });

        draft.courses = arrayWithRemovedModule;
        break;

      default:
        return state;
    }
  });
}
