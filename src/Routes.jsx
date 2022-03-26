import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import CoursesList from "./pages/CoursesList/CoursesList";
export default function AppRoutes() {
  let navigate = useNavigate();

  useEffect(() => {
    navigate("courses-list");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    <div style={{ color: "#000" }}>
      <h2>Nothing to see here!</h2>
    </div>
  );
}
