import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import {
  addModuleSet,
  editModuleSet,
  removeModuleSet,
} from "../../../../store/slices/courses/actions";
import ModuleCard from "../ModuleCard/ModuleCard";
import {
  Button,
  ImageUploader,
  Input,
  SlidableSidebar,
  TextArea,
} from "../../../../components";
import "./modules.css";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Campo obrigatório"),
});

export default function Modules({
  modules,
  courseId,
  courseModules,
  showSideBar,
  setShowSideBar,
}) {
  const [moduleToEdit, setModuleToEdit] = useState(null);
  const dispatch = useDispatch();
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

  const addModule = async () => {
    await formik.handleSubmit();
    if (
      formik.errors &&
      Object.keys(formik.errors).length === 0 &&
      Object.getPrototypeOf(formik.errors) === Object.prototype
    ) {
      const newModule = {
        ...formik.values,
        enable: true,
        //check what is the last id, if have none, assumes 1
        id: modules?.length ? modules[modules.length - 1].id + 1 : 1,
        courseId: Number(courseId),
        lessons: 0,
      };

      const newModules = [...modules, newModule];
      dispatch(addModuleSet(newModules));
    }
  };
  const editModule = async (changeEnable) => {
    await formik.handleSubmit();
    if (
      formik.errors &&
      Object.keys(formik.errors).length === 0 &&
      Object.getPrototypeOf(formik.errors) === Object.prototype
    ) {
      const updatedModule = {
        ...formik.values,
        enable:
          typeof changeEnable === "boolean"
            ? !moduleToEdit.enable
            : moduleToEdit.enable,
        id: moduleToEdit.id,
        lessons: moduleToEdit.lessons,
        courseId: moduleToEdit.courseId,
      };

      const updatedModules = modules.map((module) => {
        if (module.id === updatedModule.id) {
          module = { ...updatedModule };
        }
        return module;
      });

      dispatch(editModuleSet(updatedModules));
    }
  };
  const removeModule = (moduleId) => {
    var filteredModules = modules.filter((module) => module.id !== moduleId);
    dispatch(removeModuleSet(filteredModules));
  };

  return (
    <>
      <div className="module-cards">
        {courseModules?.map((module, index) => (
          <ModuleCard
            module={module}
            index={index}
            key={module.id}
            editModule={handleShowSidebar}
            removeModule={removeModule}
          />
        ))}
      </div>

      <SlidableSidebar
        open={showSideBar}
        handleClose={handleHideSidebar}
        title="NOVO MÓDULO"
        tooltipText="Você está prestes a criar um novo módulo, é dentro dele que suas aulas ficarão, pense que é como um tópico de agrupamento!"
      >
        <div className="course-details-sidebar">
          <form className="course-details-form">
            <ImageUploader
              image={formik?.values?.image}
              name="image"
              setImage={(img) => formik.setFieldValue("image", img)}
            />
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
                {!moduleToEdit && (
                  <div className="course-details-bottom-button">
                    <Button color="success" onClick={addModule}>
                      CRIAR
                    </Button>
                  </div>
                )}
                {moduleToEdit && (
                  <div className="course-details-bottom-buttons">
                    <Button
                      color={moduleToEdit.enable ? "danger" : "success"}
                      onClick={() => editModule(true)}
                    >
                      {moduleToEdit.enable ? "DESABILITAR" : "HABILITAR"}
                    </Button>
                    <Button color="success" onClick={editModule}>
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
  );
}
