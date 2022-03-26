import React, { useState } from "react";
import "./coursesList.css";
import {
  Button,
  DateInput,
  ImageUploader,
  Input,
  SlidableSidebar,
} from "../../components";
import { CourseCard } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { addCourseRequest } from "../../store/slices/courses/actions";

export default function CoursesList() {
  const [showSideBar, setShowSideBar] = useState(false);
  const [image, setImage] = useState(null);
  const courses = useSelector((state) => state.courses.courses);
  console.log(
    "🚀 ~ file: CoursesList.jsx ~ line 17 ~ CoursesList ~ courses",
    courses
  );
  const dispatch = useDispatch();

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
          <ImageUploader image={image} setImage={setImage} />
          <div className="course-list-name-input">
            <Input label="Nome" id="name" />
            <Input label="Descrição" size="large" id="description" />
            <Input label="Carga horária" id="workload" />
            <div className="course-list-double-inputs">
              <DateInput label="Ativação do curso" id="course-activation" />
              <DateInput
                label="Desativação do curso"
                id="course-deactivation"
                //format to today ISO format yyyy-mm-dd
                minDate={new Date().toISOString().substring(0, 10)}
              />
            </div>
            <div className="course-list-bottom-button">
              <Button color="success" onClick={addCourse}>
                CRIAR
              </Button>
            </div>
          </div>
        </div>
      </SlidableSidebar>
    </div>
  );
}
