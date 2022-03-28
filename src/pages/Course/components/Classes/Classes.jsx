import React from "react";
import { Accordion, IconButton, Label } from "../../../../components";
import { Book, Pencil, Trash } from "../../../../icons";
import "./classes.css";

export default function Classes({ course }) {
  return (
    <div>
      Classes
      {course?.modules?.map((module, index) => (
        <Accordion
          title={`${index + 1}. ${module.title}`}
          label={!module.enable && <Label color={"danger"}>DESABILITADO</Label>}
        >
          {module.classes.length ? (
            module?.classes.map((singleClass, index) => (
              <section className="accordion-content-class">
                <div className="accordion-content-class-text">
                  <IconButton
                    icon={<Book size={20} color={"#333333"} />}
                    size="x-small"
                  />
                  <p>
                    {index + 1}. {singleClass.title}
                  </p>
                </div>
                <div className="accordion-content-class-actions">
                  <IconButton icon={<Pencil size={20} />} size="x-small" />
                  <IconButton icon={<Trash size={20} />} size="x-small" />
                </div>
              </section>
            ))
          ) : (
            <section className="accordion-content-class">
              Sem aulas cadastradas
            </section>
          )}
        </Accordion>
      ))}
    </div>
  );
}
