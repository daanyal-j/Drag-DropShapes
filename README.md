# Shape Transformer

A drag-and-drop app where shapes can be added, moved between quadrants, and deleted.

## How to run

1. Clone the repository onto your computer.
2. Open termninal and cd into the project. Ensure you are in the correct directory level before proceeding.
3. Install dependencies:  `npm install`.
4. Build the TypeScript:  `npm run build`.
5. Start the dev server: `npm start`.
6. Open `http://localhost:3000` in your browser.

## Brief

**Stack:**
- TypeScript: Application Logic - Preffered over JavaScript and easier to catch errors while typing.
- HTML/CSS: Structure and Styling - No framework such as Angular required for a project of this scope.
- Native Drag and Drop API: Drag and Drop interactions - Built into the browser, no external library needed.

**Design Choices:**
- The codebase is split into four focused modules (`state`, `render`, `dragDrop`, `app`) rather than one large file. Each module has a single responsibility, making the logic easier to follow and modify independently.
- Centralised state — all shapes live in a single `shapes` array in `state.ts`. Every user action (add, move, delete) mutates this array and then calls `render()` to rebuild the UI from scratch. This makes the data flow straightforward.
- Full re-render on change — rather than updating individual DOM elements, `render()` clears and rebuilds all shape containers on every state change. This keeps the rendering logic simple and eliminates the risk of the DOM getting out of sync with state.
- Quadrant-to-shape mapping — a `quadrantShapeMap` dictionary defines which shape belongs to which quadrant. This means adding a new shape type or quadrant only requires updating the map.

**Trade Offs & Ways to Improve:**
- Full re-render is simple but inefficient — rebuilding the entire page on every change works fine at this scale, but would become slow with a large number of shapes. A more scalable approach would be update only the changed elements.
- No persistence — state lives only in memory and is lost on page refresh. Adding a way to store data would allow shapes to persist between sessions with minimal extra code.
- No keyboard accessibility - due to time limitations, the option for keyboard accessibility was not completed, instead the options to add and delete shapes was added.
- No limit on shapes per quadrant— a quadrant can hold an unlimited number of shapes, which could overflow the layout. Adding a cap or making the container scroll would improve the experience at scale.
