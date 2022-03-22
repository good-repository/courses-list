import React from "react";
import { Routes, Route } from "react-router-dom";
import CoursesList from "./Pages/CoursesList/CoursesList";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<NoMatch />} />
      <Route path="courses-list" element={<CoursesList />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
    </div>
  );
}
