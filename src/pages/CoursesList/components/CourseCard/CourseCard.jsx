import React from "react";
import "./courseCard.css";
import { IconButton, Label } from "../../../../components";
import { Pencil, Trash } from "../../../../icons";
import { useNavigate } from "react-router-dom";

export default function CourseCard({ course, editCourse, removeCourse }) {
  const navigate = useNavigate();

  if (!course) return <div />;

  return (
    <div className="container-course-card">
      {course.image && (
        <img
          src={course.image}
          alt="course logo"
          className="course-card-banner"
          onClick={() => {
            navigate(`/courses-list/${course.id}`);
          }}
        />
      )}
      {!course.image && (
        <div
          className="course-card-no-image"
          onClick={() => {
            navigate(`/courses-list/${course.id}`);
          }}
        />
      )}
      <div className="course-card-content">
        <div
          onClick={() => {
            navigate(`/courses-list/${course.id}`);
          }}
          className="course-card-texts"
        >
          <p className="course-card-title">{course.title}</p>
          <p className="course-card-subtitle">{course.description}</p>
        </div>
        <div className="course-card-cta">
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
