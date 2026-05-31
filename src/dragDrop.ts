import { shapes, quadrantShapeMap } from "./state.js";
import { render } from "./render.js";
import { Quadrant } from "./types.js";

// Handles dragging shapes between quadrants
// Updates state and triggers a re-render after a drop

let draggedId: string | null = null;

export function initializeDragDrop(): void {
  // Store the ID of the dragged shape when dragging starts
  document.addEventListener("dragstart", (event) => {
    const target = event.target as HTMLElement;

    if (target.classList.contains("shape")) {
      draggedId = target.dataset.id || null;
    }
  });

  // Functionalatiy for when a shape is dragged to the delete zone
  const deleteZone = document.getElementById("delete-zone")!;

  deleteZone.addEventListener("dragover", (event) => {
    event.preventDefault();
    deleteZone.classList.add("drag-over");
  });

  deleteZone.addEventListener("dragleave", () => {
    deleteZone.classList.remove("drag-over");
  });

  // If the shape is dropped in the delete zone, remove it from the state and re-render
  deleteZone.addEventListener("drop", (event) => {
    event.preventDefault();
    deleteZone.classList.remove("drag-over");

    if (!draggedId) return;

    const index = shapes.findIndex((s) => s.id === draggedId);
    if (index !== -1) shapes.splice(index, 1);

    draggedId = null;
    render();
  });

  document.querySelectorAll(".quadrant").forEach((quadrant) => {
    // Allow quadrants to accept dropped shapes
    quadrant.addEventListener("dragover", (event) => {
      event.preventDefault();
    });

    // Update shape location and type when dropped, then re-render the UI
    quadrant.addEventListener("drop", (event) => {
      event.preventDefault();

      if (!draggedId) return;

      const destination = (event.currentTarget as HTMLElement).dataset
        .quadrant as Quadrant;

      const shape = shapes.find((s) => s.id === draggedId);

      if (!shape) return;

      shape.quadrant = destination;

      shape.type = quadrantShapeMap[destination];

      render();
    });
  });
}
