# Task Flow

A modern Kanban-style ToDo dashboard built with React, Redux, React Query, Tailwind CSS, and Material UI.

---

## Overview

Task Flow is a task management application that helps users organize their work across four stages:

* Backlog
* In Progress
* Review
* Done

The application provides a clean and interactive Kanban board with drag-and-drop functionality, task management, and optimized performance using caching.

---

## Tech Stack

### Core

* React
* Redux Toolkit (State Management)
* React Query (Data Fetching & Caching)

### UI / Styling

* Tailwind CSS (Utility-first styling)
* Material UI (Component library)

### Additional [Drag Functionality]

* DnD Kit (Drag & Drop)

---

## Project Setup

### 1. Create the project

```bash
npx create-react-app task_flow
cd task_flow
```

---

### 2. Install dependencies

#### Core dependencies

```bash
npm install @reduxjs/toolkit react-redux
npm install @tanstack/react-query
```

#### UI & Styling

```bash
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

#### Drag & Drop

```bash
npm install @dnd-kit/core @dnd-kit/sortable
```

---

### 3. Setup Tailwind CSS

Update `tailwind.config.js`:

```js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Update `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. Mock API Setup (json-server)

This project uses json-server to simulate a backend API for tasks.

* npm install -g json-server
* Create db.json in project root
{
  "tasks": [
    {
      "id": "1",
      "title": "Design homepage",
      "description": "Include hero section",
      "column": "backlog",
      "priority": "high"
    }
  ]
}
* json-server --watch db.json --port 4000
* API Endpoint: http://localhost:4000/tasks

---

### 4. Run the project

```bash
npm start
```

App will run on:

```
http://localhost:3000
```

---

## Project Structure

```
src/
│
├── app/                # Redux store setup
├── components/         # Reusable UI components
├── constants/          # App-wide constants (IMPORTANT)
├── features/           # Feature-based modules (tasks, columns)
├── services/           # React Query logic / API layer
├── hooks/              # Custom hooks
├── layouts/            # Layout components (Kanban board)
├── pages/              # Main views
├── utils/              # Helper functions
└── App.js
```

---

## Features

* [ ] Display tasks in 4 columns
* [ ] @ToDo Create task
* [ ] @ToDo Edit task
* [ ] @ToDo Delete task
* [ ] @ToDo Drag & drop between columns
* [ ] @ToDo Pagination / infinite scroll
* [ ] @ToDo Search tasks
* [ ] @ToDo State management using Redux
* [ ] @ToDo Data caching using React Query

---

## Color System

The application uses a clean, minimal color palette inspired by modern Kanban dashboards.

These colors are implemented using Tailwind CSS utility classes and aligned with the UI design.

Base Colors:

| Purpose | Tailwind Class | Description |
| :--- | :--- | :--- |
| **App Background** | `bg-gray-100/80` | Main page background |
| **Column Background** | `bg-[#ebf0f0]` | Column in Board background |

---

## Architecture Overview
API (json-server)
      ↓
React Query (server state)
      ↓
Components
      ↑
Redux (UI state) [ToDo]

---

## Project Management

Tasks and progress are managed using Trello:

👉 https://trello.com/invite/b/69c97a3f53219a4d0b3731cd/ATTI9366e883613b0a1ebc9678510426d0feC305D5A6/task-flow
