import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import App from '../App';
import FeeEdit from '../components/master/FeeEdit';
import SessionMaster from '../components/master/SessionMaster';
import Classsection from '../components/master/Classsection';

// Lazy-loaded pages
const ViewPage = lazy(() => import('../components/view/ViewPage'));
const Student = lazy(() => import('../components/students/Student'));
const AllStudents = lazy(() => import('../components/students/AllStudents'));
const StudentForm = lazy(() => import('../components/students/StudentForm'));
const Router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <App />,
  //   children: [
  //     { path: "/", element: <ViewPage /> },
  //     {
  //       path: "/students",
  //       element: <Student />,
  //       children: [
  //         { path: "allstudents", element: <AllStudents /> },
  //         { path: "studentForm", element: <StudentForm /> },
  //       ],
  //     },
  //   ],
  // },
  {
    path: '/',
    element: (
      <Suspense fallback={<div className="loader">Loading...</div>}>
        <App />
      </Suspense>
    ),
    errorElement: <Navigate to="/view" replace />,
    children: [
      { index: true, element: <Navigate to="/view" replace /> },
      { path: 'view', element: <ViewPage /> },
      { path: 'feeEdit', element: <FeeEdit /> },
      { path: 'sessionEdit', element: <SessionMaster /> },
      { path: 'classesEdit', element: <Classsection /> },
      {
        path: 'students',
        element: (
          <Suspense fallback={<div className="loader">Loading...</div>}>
            <Student />
          </Suspense>
        ),
        children: [
          { index: true, element: <Navigate to="allstudents" replace /> },
          { path: 'allstudents', element: <AllStudents /> },
          { path: 'studentForm', element: <StudentForm /> },
        ],
      },
      { path: '*', element: <Navigate to="/view" replace /> },
    ],
  }

]);

function Root() {
  return <RouterProvider router={Router} />;
}
export default Router;
