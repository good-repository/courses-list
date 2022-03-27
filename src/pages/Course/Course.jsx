import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./course.css";
import {
  Button,
  ImageUploader,
  Input,
  Label,
  SlidableSidebar,
  TextArea,
} from "../../components";
import { ModuleCard } from "./components";
import { useFormik } from "formik";
import * as Yup from "yup";

const MODULES = "modules";
const CLASSES = "classes";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Campo obrigatório"),
});

export default function Course() {
  const [activeTab, setActiveTab] = useState(MODULES);
  const [showSideBar, setShowSideBar] = useState(false);
  const [moduleToEdit, setModuleToEdit] = useState(null);
  const courses = useSelector((state) => state.courses.courses);
  const { id } = useParams();
  const course = courses.find((course) => course.id === Number(id));
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
  console.log("🚀 ~ file: Course.jsx ~ line 12 ~ Course ~ course", course);

  const handleShowSidebar = (module) => {
    if (module?.title) {
      formik.setFieldValue("image", module.image);
      formik.setFieldValue("title", module.title);
      formik.setFieldValue("description", module.description);
      setModuleToEdit(module);
    }
    setShowSideBar(true);
  };

  const handleHideSidebar = () => {
    formik.resetForm();
    setModuleToEdit(null);
    setShowSideBar(false);
  };

  return (
    <div className="courses-container">
      <div className="modules-container">
        <div className="course-tabs">
          <button
            className={`${
              activeTab === MODULES
                ? "course-active-tab"
                : "course-inactive-tab"
            }`}
            onClick={() => setActiveTab(MODULES)}
          >
            Módulos
          </button>
          <button
            className={`${
              activeTab === CLASSES
                ? "course-active-tab"
                : "course-inactive-tab"
            }`}
            onClick={() => setActiveTab(CLASSES)}
          >
            Aulas
          </button>
        </div>
        {activeTab === MODULES && (
          <>
            <div className="module-cards">
              {course?.modules?.map((module, index) => (
                <ModuleCard
                  module={module}
                  index={index}
                  key={module.id}
                  editModule={handleShowSidebar}
                />
              ))}
            </div>

            <SlidableSidebar
              open={showSideBar}
              handleClose={handleHideSidebar}
              title="NOVO MÓDULO"
              tooltipText="Você está prestes a criar um novo módulo, é dentro dele que suas aulas ficarão, pense que é como um tópico de agrupamento!"
            >
              <div className="course-list-sidebar">
                <form className="course-list-form">
                  <ImageUploader
                    image={formik?.values?.image}
                    name="image"
                    setImage={(img) => formik.setFieldValue("image", img)}
                  />
                  <div className="course-list-inputs">
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
                      {!moduleToEdit && (
                        <div className="course-list-bottom-button">
                          <Button color="success" onClick={() => {}}>
                            CRIAR
                          </Button>
                        </div>
                      )}
                      {moduleToEdit && (
                        <div className="course-list-bottom-buttons">
                          <Button
                            color={moduleToEdit.enable ? "danger" : "success"}
                            onClick={() => {}}
                          >
                            {moduleToEdit.enable ? "DESABILITAR" : "HABILITAR"}
                          </Button>
                          <Button color="success" onClick={() => {}}>
                            SALVAR
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </SlidableSidebar>
          </>
        )}

        {activeTab === CLASSES && <div>classes</div>}
      </div>
      <div className="course-details">
        <Button size="large" onClick={handleShowSidebar}>
          NOVO MÓDULO
        </Button>
        <img
          src={course.image}
          alt="logo curso"
          className="course-details-logo"
        />
        <div className="course-details-title-status">
          <p className="course-details-title">{course.title}</p>
          <Label color={course.enable ? "success" : "danger"}>
            {course.enable ? "HABILITADO" : "DESABILITADO"}
          </Label>
        </div>
        <p className="course-details-description">{course.description}</p>
        <p className="course-details-description">
          <strong>Duração:</strong> {course.workload}
        </p>
      </div>
    </div>
  );
}
