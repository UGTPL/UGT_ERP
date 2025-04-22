// StudentsTable.js
import React, { useState } from "react";
import "./AllStudents.css";
import { useNavigate } from "react-router-dom";
import StudentForm from "./StudentForm";

const AllStudents = () => {
  const navigate = useNavigate();
  const students = [
    {
      id: 1,
      admissionNo: "ADM001",
      rollNo: "ROLL001",
      name: "Samar",
      parent_Name: "Ashok",
      phone: "9876543210",
      fees: "₹1,50,000",
      status: "Active",
      createdAt: "2023-01-15",
      updatedAt: "2023-03-20",
    },
    // Add more sample data as needed
  ];

  //   const handleCreateNew = () => {
  //     console.log("Create new student clicked");
  //     navigate("/students/studentForm");

  //     // Add your create logic here
  //   };

  const [isModalOpen, setModalOpen] = useState(false);

  const handleEdit = (studentId) => {
    console.log("Edit student:", studentId);
  };

  const handleDelete = (studentId) => {
    console.log("Delete student:", studentId);
  };

  return (
    <div className="students-container">
      <div className="header-section">
        <h2>Students Management</h2>
        <button className="create-button" onClick={() => setModalOpen(true)}>
          Create New Student
        </button>
        {isModalOpen && (
          <StudentForm
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
          />
        )}
      </div>

      <div className="table-wrapper">
        <table className="students-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Admission No</th>
              <th>Roll No</th>
              <th>Student Details</th>
              <th>Fees</th>
              <th>Status</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.id}>
                <td>{index + 1}</td>
                <td>{student.admissionNo}</td>
                <td>{student.rollNo}</td>
                <td>
                  <div className="student-details">
                    <div className="student-name">{student.name}</div>
                    <div className="student-email">{student.parent_Name}</div>
                    <div className="student-phone">{student.phone}</div>
                  </div>
                </td>
                <td>{student.fees}</td>
                <td>
                  <span
                    className={`status-badge ${student.status.toLowerCase()}`}
                  >
                    {student.status}
                  </span>
                </td>
                <td>{student.createdAt}</td>
                <td>{student.updatedAt}</td>
                <td>
                  <button
                    className="action-button edit"
                    onClick={() => handleEdit(student.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="action-button delete"
                    onClick={() => handleDelete(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllStudents;
