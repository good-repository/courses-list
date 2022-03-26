import produce from "immer";

import svelte from "../../../assets/svelte-banner.svg";
import react from "../../../assets/react-banner.svg";

const INITIAL_STATE = {
  courses: [
    {
      image: svelte,
      title: "Curso de Svelte",
      description:
        "Um curso para introdução ao Svelte com tecnologias modernas",
      enable: true,
    },
    {
      image: react,
      title: "Curso de React",
      description:
        "Como criar aplicativos utilizando React para escalar as suas aplicações ao infinito",
      enable: false,
    },
  ],
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@courses/ADD_COURSE_SUCCESS":
        draft.courses = [...draft.courses, action.payload.course];
        break;

      default:
        return state;
    }
  });
}
