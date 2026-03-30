# Task Flow

A modern Kanban-style ToDo dashboard built with React, Redux, React Query, Tailwind CSS, and Material UI.

## Live Demo

👉 https://wa-task-flow.netlify.app

Note: The mock server may take a few seconds to start, so tasks might load with a slight delay on first visit.

---

## Project Management

Tasks and progress are managed using Trello:

👉 https://trello.com/invite/b/69c97a3f53219a4d0b3731cd/ATTI9366e883613b0a1ebc9678510426d0feC305D5A6/task-flow

---

## Overview

Task Flow is a task management application that helps users organize their work across four stages:

- Backlog
- In Progress
- Review
- Done

The application provides a clean and interactive Kanban board with drag-and-drop functionality, task management, and optimized performance using caching.

---

## Tech Stack

### Core

- React
- Redux Toolkit (UI State Management)
- React Query (Server State & Caching)

### UI / Styling

- Tailwind CSS (Utility-first styling)
- Material UI (Component library)

### Additional [Drag Functionality]

- DnD Kit (Drag & Drop)

---

## Project Setup

### 1. Clone repository

```bash
git clone https://github.com/Waleedsaber22/wa-task-flow.git
cd task_flow
```

---

### 2. Install dependencies

```bash
npm install
```

### 3. Run Mock API (json-server)

This project uses json-server to simulate a backend API for tasks.

- npm install -g json-server
- json-server --watch db.json --port 4000
- API Endpoint: http://localhost:4000/tasks

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

## Features

- [-] Display tasks in 4 columns
- [-] Create task
- [-] Edit task
- [-] Delete task
- [-] Drag & drop between columns
- [-] Pagination / infinite scroll
- [-] Search tasks
- [-] State management using Redux
- [-] Data caching using React Query

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

## Color System

The application uses a clean, minimal color palette inspired by modern Kanban dashboards.

These colors are implemented using Tailwind CSS utility classes and aligned with the UI design.

Base Colors:

| Purpose               | Tailwind Class   | Description                |
| :-------------------- | :--------------- | :------------------------- |
| **App Background**    | `bg-gray-100/80` | Main page background       |
| **Column Background** | `bg-[#ebf0f0]`   | Column in Board background |

---

## Architecture Overview

API (json-server)
↓
React Query (server state)
↓
Components
↑
Redux (UI state)
