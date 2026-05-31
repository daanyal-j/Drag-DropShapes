import { shapes } from "./state.js";

// Responsible for rendering all shapes on screen
// The UI is rebuilt from the current state whenever a shape is moved

export function render(): void {
  // Clear existing shapes before re-rendering
  document.querySelectorAll(".shape-container").forEach((el) => el.remove());

  const quadrants = document.querySelectorAll(".quadrant");

  // render empty containers for shapes in each quadrant
  quadrants.forEach((q) => {
    const container = document.createElement("div");

    container.className = "shape-container";

    q.appendChild(container);
  });

  // Loop through all shapes in the state
  // Create corresponding DOM elements in the correct quadrants with the correct shape types
  shapes.forEach((shape) => {
    const quadrant = document.querySelector(
      `[data-quadrant="${shape.quadrant}"] .shape-container`,
    );

    if (!quadrant) return;

    const element = document.createElement("div");

    element.className = `shape ${shape.type}`;

    element.draggable = true;
    element.dataset.id = shape.id;

    quadrant.appendChild(element);
  });
}
