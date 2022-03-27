import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./course.css";
import { Button, Label } from "../../components";
import { ModuleCard } from "./components";

export default function Course() {
  const [activeTab, setActiveTab] = useState("modules");
  const courses = useSelector((state) => state.courses.courses);
  const { id } = useParams();
  const course = courses.find((course) => course.id === Number(id));
  console.log("🚀 ~ file: Course.jsx ~ line 12 ~ Course ~ course", course);

  return (
    <div className="courses-container">
      <div className="modules-container">
        <div className="course-tabs">
          <button
            className={`${
              activeTab === "modules"
                ? "course-active-tab"
                : "course-inactive-tab"
            }`}
            onClick={() => setActiveTab("modules")}
          >
            Módulos
          </button>
          <button
            className={`${
              activeTab === "classes"
                ? "course-active-tab"
                : "course-inactive-tab"
            }`}
            onClick={() => setActiveTab("classes")}
          >
            Aulas
          </button>
        </div>
        <div className="module-cards">
          {course?.modules?.map((module, index) => (
            <ModuleCard module={module} index={index} key={module.id} />
          ))}
        </div>
      </div>
      <div className="course-details">
        <Button size="large">
          {activeTab === "modules" ? "NOVO MÓDULO" : "NOVA AULA"}
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
        <div>
          <p>Duração:</p>
          <p>20h</p>
        </div>
      </div>
    </div>
  );
}
