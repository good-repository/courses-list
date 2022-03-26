import React from "react";
import "./courseCard.css";
import { IconButton, Label } from "../../../../Components";
import { Pencil, Trash } from "../../../../Icons";

export default function CourseCard({
  img,
  labelText,
  labelColor = "success",
  title,
  subtitle,
}) {
  return (
    <div className="container-course-card">
      <img src={img} alt="svekte" className="course-card-banner" />
      <div className="course-card-content">
        <div>
          <p className="course-card-title">{title}</p>
          <p className="course-card-subtitle">{subtitle}</p>
        </div>
        <div>
          {labelText && <Label color={labelColor}>{labelText}</Label>}
          <div className="course-card-actions">
            <IconButton icon={<Pencil />} size="small" />
            <IconButton icon={<Trash />} size="small" />
          </div>
        </div>
      </div>
    </div>
  );
}