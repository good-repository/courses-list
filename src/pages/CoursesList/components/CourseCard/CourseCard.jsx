import React from "react";
import "./courseCard.css";
import { IconButton, Label } from "../../../../components";
import { Pencil, Trash } from "../../../../icons";

export default function CourseCard({ course, editCourse, removeCourse }) {
  if (!course) return <div />;

  return (
    <div className="container-course-card">
      {course.image && (
        <img
          src={course.image}
          alt="course logo"
          className="course-card-banner"
        />
      )}
      {!course.image && <div className="course-card-no-image" />}
      <div className="course-card-content">
        <div>
          <p className="course-card-title">{course.title}</p>
          <p className="course-card-subtitle">{course.description}</p>
        </div>
        <div className="cours-card-cta">
          <Label color={course.enable ? "success" : "danger"}>
            {course.enable ? "HABILITADO" : "DESABILITADO"}
          </Label>
          <div className="course-card-actions">
            <IconButton
              icon={<Pencil />}
              size="small"
              onClick={() => editCourse(course)}
            />
            <IconButton
              icon={<Trash />}
              size="small"
              onClick={() => removeCourse(course.id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
