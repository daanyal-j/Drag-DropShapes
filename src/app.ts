import { render } from "./render.js";
import { initializeDragDrop } from "./dragDrop.js";
import { quadrantShapeMap, shapes } from "./state.js";
import { Quadrant } from "./types.js";

// Main entry point of the application
// Renders the initial state and sets up the draging and dropping functionality

document.addEventListener("DOMContentLoaded", () => {
  render();

  initializeDragDrop();

  // Set up event listeners for adding new shapes to quadrants via the add buttons
  document.querySelectorAll(".add-shape-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const quadrant = (button.closest(".quadrant") as HTMLElement).dataset
        .quadrant as Quadrant;

      shapes.push({
        id: crypto.randomUUID(),
        type: quadrantShapeMap[quadrant],
        quadrant,
      });

      render();
    });
  });
});
