import React, { useState } from "react";
import "./coursesList.css";
import {
  Button,
  DateInput,
  ImageUploader,
  Input,
  SlidableSidebar,
} from "../../Components";
import { CourseCard } from "./Components";

import svelte from "../../Assets/svelte-banner.svg";
import react from "../../Assets/react-banner.svg";

export default function CoursesList() {
  const [showSideBar, setShowSideBar] = useState(true);
  const [image, setImage] = useState(null);

  return (
    <div className="container">
      <div className="container-header">
        <h2 className="title">SEUS TREINAMENTOS</h2>
        <Button size="large" onClick={() => setShowSideBar(true)}>
          NOVO TREINAMENTO
        </Button>
      </div>
      <CourseCard
        labelText="HABILITADO"
        img={svelte}
        subtitle="Um curso para introdução ao Svelte com tecnologias modernas"
        title="Curso de Svelte"
      />
      <CourseCard
        labelText="DESABILITADO"
        labelColor="danger"
        img={react}
        subtitle="Como criar aplicativos utilizando React para escalar as suas aplicações ao infinito"
        title="Curso de React"
      />

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
              <Button color="success">CRIAR</Button>
            </div>
          </div>
        </div>
      </SlidableSidebar>
    </div>
  );
}
