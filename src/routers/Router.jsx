import React from "react";
import App from "../App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/home/Home";
import AllStudents from "../components/students/AllStudents";
import StudentForm from "../components/students/StudentForm";
import Student from "../components/students/Student";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/students",
        element: <Student />,
        children: [
          { path: "allstudents", element: <AllStudents /> },
          { path: "studentForm", element: <StudentForm /> },
        ],
      },
    ],
  },
]);

function Root() {
  return <RouterProvider router={Router} />;
}
export default Router;
