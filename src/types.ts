// Available shapes and quadrants in the application

export type ShapeType = "circle" | "hexagon" | "square" | "triangle";

export type Quadrant =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

// Defines a draggable shape
export interface Shape {
  id: string;
  type: ShapeType;
  quadrant: Quadrant;
}
