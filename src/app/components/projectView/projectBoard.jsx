"use client";
import React, { useState } from "react";
import Column from "./column";
import ProjectCard from "./projectCard";
import { projects } from "../common/tempdata";

import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import {
  SortableContext,
  // arrayMove, imported in custom hook
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import Button from "../common/button";

import {
  useDragHandlers,
  findValueOfItems,
} from "./customHook/useDragHandlers";
import AddProjectModal from "./addProjectModal";

const ProjectBoard = () => {
  const [containers, setContainers] = useState(projects);
  const [activeId, setActiveId] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  // Custom Hook for DND Handlers
  const [handleDragStart, handleDragMove, handleDragEnd] = useDragHandlers(
    containers,
    setContainers,
    activeId,
    setActiveId,
  );

  // DND Sensors
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );


  // Modal Styles
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   console.log("modal opened");
  // }

  function closeModal() {
    setIsOpen(false);
  }





  return (
    <div className="mx-auto w-full px-10 py-5 lg:px-36 2xl:max-w-[1400px]">
      <div>
        <AddProjectModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragStart={handleDragStart}
          onDragMove={handleDragMove}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={containers.map((i) => i.id)}>
            {containers.map((container) => (
              <Column
                key={container.id}
                title={container.categorty}
                id={container.id}
                size={container.projects.length}
                openModal={setIsOpen}
                // isOpenModal={modalIsOpen}
              >
                <SortableContext items={container.projects.map((i) => i.id)}>
                  <div className="flex flex-col items-start gap-3">
                    {container.projects.map((proj) => (
                      <ProjectCard
                        key={proj.id}
                        id={proj.id}
                        project={proj}
                        openModal={setIsOpen}
                        // isOpenModal={modalIsOpen}
                      />
                    ))}
                  </div>
                </SortableContext>
              </Column>
            ))}
          </SortableContext>
          <DragOverlay>
            {activeId ? (
              <ProjectCard
                key={activeId}
                id={activeId}
                project={findValueOfItems(
                  activeId,
                  "item",
                  containers,
                )?.projects.find((item) => item.id === activeId)}
                isDragging={true}
              />
            ) : null}
          </DragOverlay>
        </DndContext>
      </div>
    </div>
  );
};

export default ProjectBoard;
