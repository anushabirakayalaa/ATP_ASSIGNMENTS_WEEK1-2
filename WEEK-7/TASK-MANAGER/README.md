# Task Manager

Task Manager is a React + Vite practice app built during Week 7. It demonstrates React components, props, state, conditional rendering, lists, forms, and Tailwind CSS styling.

## Tech Stack

- React
- Vite
- Tailwind CSS
- react-hook-form

## Features

- Add a task using a form.
- Store tasks in React state.
- Display the list of added tasks.
- Show an empty-state image when no tasks exist.
- Show the total task count.
- Pass data and functions between parent and child components using props.
- Includes extra practice components for forms, registration, props, and state updates.

## Project Structure

- `src/App.jsx` - main app file that renders the Task Manager.
- `src/components/TaskManager.jsx` - parent component that stores the tasks state.
- `src/components/AddTask.jsx` - form component that accepts a task name and sends it to the parent.
- `src/components/TasksList.jsx` - displays all added tasks or an empty-state image.
- `src/components/TasksCount.jsx` - displays the number of tasks.
- `src/components/FormDemo.jsx` - practice form using `react-hook-form` validations.
- `src/components/RegistrationDemo.jsx` - user registration form practice with table output.
- `src/components/StateDemo.jsx` - state practice with counter, arrays, and object updates.
- `src/components/Test1.jsx` and `src/components/Test2.jsx` - basic component and props practice.

## Run Locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal, usually:

```text
http://localhost:5173
```

## Component Flow

```text
App
└── TaskManager
    ├── AddTask
    ├── TasksList
    └── TasksCount
```

## How It Works

`TaskManager` keeps the `tasks` array in state. `AddTask` collects the task name through `react-hook-form` and calls the `addNewTask` function passed from the parent. The updated task array is then passed to `TasksList` and `TasksCount` for display.

## Output

The app displays a simple task manager interface with an add-task form, task list, and task count.
