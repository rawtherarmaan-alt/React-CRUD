# React CRUD Application

A full-stack CRUD (Create, Read, Update, Delete) application built with React.js 
for the frontend, Spring Boot for the backend, and MySQL as the database. 
This project demonstrates REST API integration and complete data management 
operations through a connected client-server architecture.

## Features
- Create, view, update, and delete records through a REST API
- Toast notifications for user feedback on actions
- Client-side routing for multi-page navigation
- Responsive UI using Bootstrap

## Tech Stack
- **Frontend:** React.js, React Router, Axios, React Toastify, Bootstrap
- **Backend:** Spring Boot (REST API)
- **Database:** MySQL
- **Build Tool:** Vite

## What I Learned
- Connecting a React frontend to a Spring Boot REST API
- Performing CRUD operations end-to-end across frontend and backend
- Managing application state and routing in React
- Using Axios for API requests and handling responses/errors

## Setup Instructions

### 1. Create the project
```bash
npm create vite
```

### 2. Install dependencies
```bash
npm install
```

### 3. Install third-party packages
- `react-router` — handles client-side routing
- `axios` — for making API requests
- `bootstrap` — CSS framework for styling
- `react-toastify` — custom toast notifications

```bash
npm install --save react-router axios react-toastify bootstrap
```

### 4. Run the project
```bash
npm run dev
```
