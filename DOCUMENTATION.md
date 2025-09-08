# GSTApp Documentation

## General Architecture

GSTApp is a React-based application structured around a modular component system. The main architectural concepts are:

- **State Management:**
  - Uses custom hooks (e.g., `useTodosState`, `useModalWindowState`, `useClickCoords`) for global state, likely powered by a state management library or React Context.
- **Component Structure:**
  - Components are organized into logical folders: `components/`, `components/tabs/`, and `components/viewers/`.
  - Each major feature (Inbox, Projects, Notes, etc.) has both a Tab (for navigation) and a Viewer (for displaying content).
- **UI Flow:**
  - The main UI is composed of a central area (`Center`), left and right sidebars (`Left`, `Right`), and a modal system (`ModalWindow`).
  - The `MainList` component likely displays the primary list of items (todos, notes, etc.).
  - `DarkmodeButton` toggles the application's theme.

### Component Overview

- **App.js**: Root component, sets up the main layout and routes.
- **store.jsx**: Contains global state hooks and logic.
- **ModalWindow.jsx**: Contextual menu/modal for item actions (move, delete, etc.).
- **MainList.jsx**: Displays the main list of items (todos, etc.).
- **LoginButton.jsx**: Handles authentication UI.
- **DarkmodeButton.jsx**: Toggles dark/light mode.
- **Center.jsx, Left.jsx, Right.jsx**: Layout components for main content and sidebars.
- **Tabs (InboxTab, ProjectsTab, etc.)**: Navigation tabs for switching between sections.
- **Viewers (InboxWindow, ProjectsWindow, etc.)**: Display content for each section.

---

# Visuals & UI Library Documentation

## Visual Component Philosophy

- **Atomic Design:**
  - Components are small, reusable, and focused on a single responsibility.
- **Styling:**
  - Uses Tailwind CSS for utility-first styling.
  - Custom styles in `App.css` and `index.css`.
- **Theming:**
  - Supports dark mode via `DarkmodeButton` and conditional classes.
- **Modals & Overlays:**
  - `ModalWindow` is a floating contextual menu, positioned based on user interaction.
- **Icons & Fonts:**
  - Uses custom fonts (e.g., PT Mono) and SVG icons.

## Visual Components

- **ModalWindow**: Floating menu for item actions, styled with Tailwind and custom classes.
- **Tabs**: Styled navigation elements for switching sections.
- **Viewers**: Main content windows, each with their own layout and style.
- **Buttons**: Consistent button styles for actions (e.g., `LoginButton`, `DarkmodeButton`).
- **Lists**: Main lists (`MainList`, etc.) use consistent spacing, hover, and selection styles.

## Building a UI Library

- Extract visual components (Modal, Tabs, Buttons, List Items) into a separate folder or package.
- Ensure all components are stateless and receive props for data and callbacks.
- Document props and expected usage for each component.
- Provide default Tailwind classes and allow for overrides via props.

---

*This documentation provides a high-level overview. For detailed props and usage, see individual component files.*
