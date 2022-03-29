import React, { useEffect, useState } from "react";
import {
  Accordion,
  Button,
  IconButton,
  Input,
  Label,
  Select,
  SlidableSidebar,
  TextArea,
} from "../../../../components";
import { Book, Pencil, Trash } from "../../../../icons";
import "./lessons.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import {
  addLessonSet,
  editLessonSet,
  removeLessonSet,
} from "../../../../store/slices/courses/actions";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Campo obrigatório"),
});

export default function Lessons({
  lessons,
  modules,
  showSideBar,
  setShowSideBar,
}) {
  const [lessonToEdit, setLessonToEdit] = useState(null);
  const [lessonsPerModule, setLessonsPerModule] = useState([]);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      id: "",
      module: modules[0]?.id,
      title: "",
      description: "",
    },
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: () => {
      handleHideSidebar();
    },
  });

  useEffect(() => {
    var newLessonsPerModule = [[]];
    for (let moduleIndex = 0; moduleIndex < modules.length; moduleIndex++) {
      for (let lessonIndex = 0; lessonIndex < lessons.length; lessonIndex++) {
        if (modules[moduleIndex].id === lessons[lessonIndex].moduleId) {
          if (newLessonsPerModule[moduleIndex] === undefined) {
            newLessonsPerModule[moduleIndex] = [];
          }

          newLessonsPerModule[moduleIndex].push(lessons[lessonIndex]);
        }
      }
    }

    setLessonsPerModule(newLessonsPerModule);
  }, [modules, lessons]);

  const handleShowSidebar = (lesson) => {
    if (lesson?.title) {
      formik.setFieldValue("module", lesson.module);
      formik.setFieldValue("title", lesson.title);
      formik.setFieldValue("description", lesson.description);
      setLessonToEdit(lesson);
    }
    setShowSideBar(true);
  };

  const handleHideSidebar = () => {
    formik.resetForm();
    setLessonToEdit(null);
    setShowSideBar(false);
  };

  const addLesson = async () => {
    await formik.handleSubmit();
    if (
      formik.errors &&
      Object.keys(formik.errors).length === 0 &&
      Object.getPrototypeOf(formik.errors) === Object.prototype
    ) {
      const newLesson = {
        title: formik.values.title,
        description: formik.values.description,
        moduleId: Number(formik.values.module),
        //check what is the last id, if have none, assumes 1
        id: lessons?.length ? lessons[lessons.length - 1].id + 1 : 1,
      };

      const newLessons = [...lessons, newLesson];
      dispatch(addLessonSet(newLessons));
    }
  };
  const editLesson = async (changeEnable) => {
    await formik.handleSubmit();
    if (
      formik.errors &&
      Object.keys(formik.errors).length === 0 &&
      Object.getPrototypeOf(formik.errors) === Object.prototype
    ) {
      const updatedLesson = {
        ...formik.values,
        enable:
          typeof changeEnable === "boolean"
            ? !lessonToEdit.enable
            : lessonToEdit.enable,
        id: lessonToEdit.id,
        classes: lessonToEdit.classes,
        moduleId: lessonToEdit.moduleId,
      };

      const updatedLessons = lessons.map((lesson) => {
        if (lesson.id === updatedLesson.id) {
          lesson = { ...updatedLesson };
        }
        return lesson;
      });

      dispatch(editLessonSet(updatedLessons));
    }
  };
  const removeLesson = (lessonId) => {
    var filteredLessons = lessons.filter((lesson) => lesson.id !== lessonId);
    dispatch(removeLessonSet(filteredLessons));
  };

  const handleClickRemove = () => {
    removeLesson(lessonToEdit.id);
    handleHideSidebar();
  };

  return (
    <div className="lessons-container">
      {modules?.map((module, index) => (
        <Accordion
          title={`${index + 1}. ${module.title}`}
          label={!module.enable && <Label color={"danger"}>DESABILITADO</Label>}
          key={module.id}
        >
          <div className="lessons-accordion-content animated-accordion">
            {!!lessonsPerModule.length &&
              lessonsPerModule.map(
                (lessons) =>
                  !!lessons.length &&
                  lessons[0].moduleId === module.id &&
                  lessons.map((lesson, lessonIndex) => (
                    <section
                      className="lessons-accordion-section-content"
                      key={lesson.id}
                    >
                      <div className="lessons-accordion-content-text">
                        <IconButton
                          icon={<Book size={20} color={"#333333"} />}
                          size="x-small"
                        />
                        <p>
                          {lessonIndex + 1}. {lesson.title}
                        </p>
                      </div>
                      <div className="lessons-accordion-content-actions">
                        <IconButton
                          icon={<Pencil size={20} />}
                          size="x-small"
                          onClick={() => handleShowSidebar(lesson)}
                        />
                        <IconButton
                          icon={<Trash size={20} />}
                          size="x-small"
                          onClick={() => removeLesson(lesson.id)}
                        />
                      </div>
                    </section>
                  ))
              )}

            {((lessons.length &&
              lessons.filter((lesson) => lesson.moduleId === module.id)
                .length === 0) ||
              lessons.length === 0) && (
              <section className="lessons-accordion-section-content">
                Sem aulas cadastradas
              </section>
            )}
          </div>
        </Accordion>
      ))}
      <SlidableSidebar
        open={showSideBar}
        handleClose={handleHideSidebar}
        title="NOVO MÓDULO"
        tooltipText="Você está prestes a criar um novo módulo, é dentro dele que suas aulas ficarão, pense que é como um tópico de agrupamento!"
      >
        <div className="course-details-sidebar">
          <form className="course-details-form">
            <div className="course-details-inputs">
              <Select
                label="Módulo"
                id="module"
                name="module"
                error={formik?.errors?.module}
                value={formik?.values?.module}
                options={modules}
                onChange={formik.handleChange}
              />
              <Input
                label="Nome"
                id="title"
                name="title"
                onChange={formik.handleChange}
                error={formik?.errors?.title}
                value={formik?.values?.title}
              />
              <TextArea
                label="Descrição"
                size="large"
                id="description"
                name="description"
                onChange={formik.handleChange}
                value={formik?.values?.description}
              />
              <div className="module-sidebar-footer">
                {!lessonToEdit && (
                  <div className="course-details-bottom-button">
                    <Button color="success" onClick={addLesson}>
                      CRIAR
                    </Button>
                  </div>
                )}
                {lessonToEdit && (
                  <div className="course-details-bottom-buttons">
                    <Button color="danger" onClick={handleClickRemove}>
                      DELETAR
                    </Button>
                    <Button color="success" onClick={editLesson}>
                      SALVAR
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </SlidableSidebar>
    </div>
  );
}
