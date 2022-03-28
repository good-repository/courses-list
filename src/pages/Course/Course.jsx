import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./course.css";
import { Button, Label } from "../../components";
import { Lessons, Modules } from "./components";

const MODULES = "modules";
const LESSONS = "lessons";

export default function Course() {
  const [activeTab, setActiveTab] = useState(MODULES);
  const [showSideBar, setShowSideBar] = useState(false);
  const modules = useSelector((state) => state.courses.modules);
  const courses = useSelector((state) => state.courses.courses);
  const lessons = useSelector((state) => state.courses.lessons);
  const { id } = useParams();
  const courseModules = modules.filter(
    (module) => module.courseId === Number(id)
  );
  const course = courses.find((course) => course.id === Number(id));

  useEffect(() => {
    setShowSideBar(false);
  }, [activeTab]);

  return (
    <div className="courses-container">
      <div className="content-course-container">
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
              activeTab === LESSONS
                ? "course-active-tab"
                : "course-inactive-tab"
            }`}
            onClick={() => setActiveTab(LESSONS)}
          >
            Aulas
          </button>
        </div>
        {activeTab === MODULES && (
          <Modules
            courseId={id}
            modules={modules}
            courseModules={courseModules}
            showSideBar={showSideBar}
            setShowSideBar={setShowSideBar}
          />
        )}
        {activeTab === LESSONS && (
          <Lessons
            lessons={lessons}
            modules={modules}
            showSideBar={showSideBar}
            setShowSideBar={setShowSideBar}
          />
        )}
      </div>
      <div className="course-details">
        <Button size="large" onClick={() => setShowSideBar(true)}>
          {activeTab === MODULES ? "NOVO MÓDULO" : "NOVA AULA"}
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
