import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Root} from "./pages/root.jsx";
import {Projects} from "./pages/projects.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
    },
    {
        path: "/projects",
        element: <Projects/>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
