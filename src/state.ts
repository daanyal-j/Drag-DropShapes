import { Shape, Quadrant, ShapeType } from "./types.js";

// Application state: Five circles start in the top-left quadrant

export const shapes: Shape[] = Array.from({ length: 5 }, (_, index) => ({
  id: `${index + 1}`,
  type: "circle",
  quadrant: "top-left",
}));

// Mapping to match a shape type to each quadrant
export const quadrantShapeMap: Record<Quadrant, ShapeType> = {
  "top-left": "circle",
  "top-right": "hexagon",
  "bottom-left": "square",
  "bottom-right": "triangle",
};
