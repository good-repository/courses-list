import React, { useState } from "react";
import {
  Accordion,
  Button,
  IconButton,
  Input,
  Label,
  SlidableSidebar,
  TextArea,
} from "../../../../components";
import { Book, Pencil, Trash } from "../../../../icons";
import "./lessons.css";
import * as Yup from "yup";
import { useFormik } from "formik";

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
  const formik = useFormik({
    initialValues: {
      image: "",
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

  const handleShowSidebar = (lesson) => {
    if (lesson?.title) {
      formik.setFieldValue("image", lesson.image);
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

  return (
    <div className="lessons-container">
      {modules?.map((module, index) => (
        <Accordion
          title={`${index + 1}. ${module.title}`}
          label={!module.enable && <Label color={"danger"}>DESABILITADO</Label>}
        >
          <div className="lessons-accordion-content animated-accordion">
            {lessons.length ? (
              lessons.map((lesson, index) => (
                <section className="lessons-accordion-section-content">
                  <div className="lessons-accordion-content-text">
                    <IconButton
                      icon={<Book size={20} color={"#333333"} />}
                      size="x-small"
                    />
                    <p>
                      {index + 1}. {lesson.title}
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
                      onClick={() => {}}
                    />
                  </div>
                </section>
              ))
            ) : (
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
                    <Button color="success">CRIAR</Button>
                  </div>
                )}
                {lessonToEdit && (
                  <div className="course-details-bottom-buttons">
                    <Button color={lessonToEdit.enable ? "danger" : "success"}>
                      {lessonToEdit.enable ? "DESABILITAR" : "HABILITAR"}
                    </Button>
                    <Button color="success">SALVAR</Button>
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
