import React, { useState } from "react";
import "./coursesList.css";
import {
  Button,
  DateInput,
  ImageUploader,
  Input,
  SlidableSidebar,
  TextArea,
} from "../../components";
import { CourseCard } from "./components";
import { useDispatch, useSelector } from "react-redux";
import {
  addCourseRequest,
  editCourseSet,
  removeCourseSet,
  removeLessonSet,
  removeModuleSet,
} from "../../store/slices/courses/actions";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Campo obrigatório"),
});

export default function CoursesList() {
  const [showSideBar, setShowSideBar] = useState(false);
  const [courseToEdit, setCourseToEdit] = useState(null);
  const { modules, lessons, courses } = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      image: "",
      title: "",
      description: "",
      workload: "",
      courseActivation: "",
      courseDeactivation: "",
      enable: true,
    },
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: () => {
      handleHideSidebar();
      !courseToEdit ? addCourse() : editCourse();
    },
  });

  const addCourse = () => {
    const payload = {
      ...formik.values,
      //check what is the last id, if have none, assumes 1
      id: courses.length ? courses[courses.length - 1].id + 1 : 1,
      modules: [],
    };
    dispatch(addCourseRequest(payload));
  };

  const editCourse = () => {
    const updatedCourse = {
      ...formik.values,
      id: courseToEdit.id,
      modules: courseToEdit.modules,
    };
    const newCoursesArray = courses.map((courseOnMap) => {
      if (courseOnMap.id === updatedCourse.id) {
        courseOnMap = updatedCourse;
      }
      return courseOnMap;
    });

    dispatch(editCourseSet(newCoursesArray));
  };

  const handleChangeEnable = () => {
    formik.setFieldValue("enable", !courseToEdit.enable);
    formik.handleSubmit();
  };

  const removeCourse = (id) => {
    const arrayWithRemovedCourse = courses.filter((course) => course.id !== id);
    dispatch(removeCourseSet(arrayWithRemovedCourse));

    const modulesIdFromThisCourse = modules.map((module) =>
      module.courseId === id ? module.id : null
    );

    const filteredModules = modules.filter((module) => module.courseId !== id);
    dispatch(removeModuleSet(filteredModules));

    const filteredLessons = lessons.filter(
      (lesson) => !modulesIdFromThisCourse.includes(lesson.moduleId)
    );
    dispatch(removeLessonSet(filteredLessons));
  };

  const handleShowSidebar = (course) => {
    if (course?.title) {
      formik.setFieldValue("image", course.image);
      formik.setFieldValue("title", course.title);
      formik.setFieldValue("description", course.description);
      formik.setFieldValue("workload", course.workload);
      formik.setFieldValue("courseActivation", course.courseActivation);
      formik.setFieldValue("courseDeactivation", course.courseDeactivation);
      formik.setFieldValue("enable", course.enable);
      setCourseToEdit(course);
    }

    setShowSideBar(true);
  };
  const handleHideSidebar = () => {
    formik.resetForm();
    setCourseToEdit(null);
    setShowSideBar(false);
  };

  return (
    <div className="container">
      <div className="container-header">
        <h2 className="title">SEUS TREINAMENTOS</h2>
        <Button size="large" onClick={handleShowSidebar}>
          NOVO TREINAMENTO
        </Button>
      </div>
      {courses?.length &&
        courses.map((course, index) => (
          <CourseCard
            key={index}
            course={course}
            editCourse={handleShowSidebar}
            removeCourse={removeCourse}
          />
        ))}

      <SlidableSidebar
        open={showSideBar}
        handleClose={handleHideSidebar}
        title="NOVO TREINAMENTO"
        tooltipText="Você está prestes a criar um novo treinamento, capriche nas informações, quanto mais detalhadas melhor!"
      >
        <div className="course-list-sidebar">
          <form className="course-list-form" onSubmit={formik.handleSubmit}>
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
              <Input
                label="Carga horária"
                id="workload"
                name="workload"
                onChange={formik.handleChange}
                value={formik?.values?.workload}
              />
              <div className="course-list-double-inputs">
                <DateInput
                  label="Ativação do curso"
                  id="course-activation"
                  name="courseActivation"
                  onChange={formik.handleChange}
                  value={formik?.values?.courseActivation}
                />
                <DateInput
                  label="Desativação do curso"
                  id="course-deactivation"
                  //format to today ISO format yyyy-mm-dd
                  minDate={new Date().toISOString().substring(0, 10)}
                  name="courseDeactivation"
                  onChange={formik.handleChange}
                  value={formik?.values?.courseDeactivation}
                />
              </div>
              {!courseToEdit && (
                <div className="course-list-bottom-button">
                  <Button color="success" onClick={formik.handleSubmit}>
                    CRIAR
                  </Button>
                </div>
              )}
              {courseToEdit && (
                <div className="course-list-bottom-buttons">
                  <Button
                    color={courseToEdit.enable ? "danger" : "success"}
                    onClick={handleChangeEnable}
                  >
                    {courseToEdit.enable ? "DESABILITAR" : "HABILITAR"}
                  </Button>
                  <Button color="success" onClick={formik.handleSubmit}>
                    SALVAR
                  </Button>
                </div>
              )}
            </div>
          </form>
        </div>
      </SlidableSidebar>
    </div>
  );
}
