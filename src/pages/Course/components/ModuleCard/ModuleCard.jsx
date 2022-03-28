import React from "react";
import { IconButton, Label } from "../../../../components";
import { Pencil, Trash } from "../../../../icons";
import "./moduleCard.css";

export default function ModuleCard({
  module,
  index,
  editModule,
  removeModule,
}) {
  return (
    <div className="module-card">
      {module.image && (
        <img
          src={module.image}
          alt="module logo"
          className="module-card-logo"
        />
      )}
      <div className="module-card-texts">
        <div className="module-card-header">
          <p className="module-card-title">
            {index + 1}. {module.title}
          </p>
          <IconButton
            icon={<Pencil />}
            size="small"
            onClick={() => editModule(module)}
          />
        </div>
        <p className="module-card-description">{module.description}</p>
        <p className="module-card-classes">
          <strong>Aulas:</strong> {module.classes.length}
        </p>
      </div>
      <div className="module-card-footer">
        <Label color={module.enable ? "success" : "danger"}>
          {module.enable ? "HABILITADO" : "DESABILITADO"}
        </Label>
        <IconButton
          icon={<Trash />}
          size="small"
          onClick={() => removeModule(module.id)}
        />
      </div>
    </div>
  );
}
