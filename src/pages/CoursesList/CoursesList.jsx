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
import { addCourseRequest } from "../../store/slices/courses/actions";
import { useFormik } from "formik";

export default function CoursesList() {
  const [showSideBar, setShowSideBar] = useState(false);
  const courses = useSelector((state) => state.courses.courses);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      image: null,
      name: "",
      description: "",
      workload: "",
      courseActivation: null,
      courseDeactivation: null,
    },
    onSubmit: (values) => {
      addCourse(values);
      setShowSideBar(false);
      formik.resetForm();
    },
  });

  const addCourse = (data) => {
    dispatch(addCourseRequest(data));
  };

  return (
    <div className="container">
      <div className="container-header">
        <h2 className="title">SEUS TREINAMENTOS</h2>
        <Button size="large" onClick={() => setShowSideBar(true)}>
          NOVO TREINAMENTO
        </Button>
      </div>
      {courses?.length &&
        courses.map((course) => (
          <CourseCard
            labelText={course.enable ? "HABILITADO" : "DESABILITADO"}
            labelColor={course.enable ? "success" : "danger"}
            img={course.image}
            subtitle={course.description}
            title={course.title}
          />
        ))}

      <SlidableSidebar
        open={showSideBar}
        handleClose={setShowSideBar}
        title="NOVO TREINAMENTO"
        tooltipText="Você está prestes a criar um novo treinamento, capriche nas informações, quanto mais detalhadas melhor!"
      >
        <div className="course-list-sidebar">
          <form onSubmit={formik.handleSubmit} className="course-list-form">
            <ImageUploader
              image={formik.values.image}
              name="image"
              setImage={(img) => formik.setFieldValue("image", img)}
            />
            <div className="course-list-name-input">
              <Input
                label="Nome"
                id="name"
                name="title"
                onChange={formik.handleChange}
              />
              <TextArea
                label="Descrição"
                size="large"
                id="description"
                name="description"
                onChange={formik.handleChange}
              />
              <Input
                label="Carga horária"
                id="workload"
                name="workload"
                onChange={formik.handleChange}
              />
              <div className="course-list-double-inputs">
                <DateInput
                  label="Ativação do curso"
                  id="course-activation"
                  name="courseActivation"
                  onChange={formik.handleChange}
                />
                <DateInput
                  label="Desativação do curso"
                  id="course-deactivation"
                  //format to today ISO format yyyy-mm-dd
                  minDate={new Date().toISOString().substring(0, 10)}
                  name="courseDeactivation"
                  onChange={formik.handleChange}
                />
              </div>
              <div className="course-list-bottom-button">
                <Button color="success" type="submit">
                  CRIAR
                </Button>
              </div>
            </div>
          </form>
        </div>
      </SlidableSidebar>
    </div>
  );
}
