import React from "react";
import "./coursesList.css";
import { Button } from "../../Components";
import { CourseCard } from "./Components";

import svelte from "../../Assets/svelte-banner.svg";
import react from "../../Assets/react-banner.svg";

export default function CoursesList() {
  return (
    <div className="container">
      <div className="container-header">
        <h2 className="title">SEUS TREINAMENTOS</h2>
        <Button>NOVO TREINAMENTO</Button>
      </div>
      <CourseCard
        labelText="HABILITADO"
        img={svelte}
        subtitle="Um curso para introdução ao Svelte com..."
        title="Curso de Svelte"
      />
      <CourseCard
        labelText="DESABILITADO"
        labelColor="danger"
        img={react}
        subtitle="Como criar aplicativos utilizando React..."
        title="Curso de React"
      />
    </div>
  );
}
