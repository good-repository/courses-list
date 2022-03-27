import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./course.css";
import { Button, Label } from "../../components";
import { Classes, Modules } from "./components";

const MODULES = "modules";
const CLASSES = "classes";

export default function Course() {
  const [activeTab, setActiveTab] = useState(MODULES);
  const [showSideBar, setShowSideBar] = useState(false);
  const courses = useSelector((state) => state.courses.courses);
  const { id } = useParams();
  const course = courses.find((course) => course.id === Number(id));

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
          <Modules
            courses={courses}
            course={course}
            showSideBar={showSideBar}
            setShowSideBar={setShowSideBar}
          />
        )}

        {activeTab === CLASSES && <Classes />}
      </div>
      <div className="course-details">
        <Button size="large" onClick={() => setShowSideBar(true)}>
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
