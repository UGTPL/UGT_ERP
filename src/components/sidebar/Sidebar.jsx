import React, { useState, useEffect, useRef } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const menuItems = [
    { title: "Home", href: "/" },
    {
      title: "Leads",
      subItems: [
        { title: "All Leads", href: "#allLeads" },
        { title: "Lead Assigned", href: "#leadAssign" },
        { title: "Lead Source", href: "#leadSource" },
        { title: "Lead Status", href: "#leadStatus" },
      ],
    },
    {
      title: "Students",
      subItems: [
        { title: "All Students", href: "/students/allstudents" },
        { title: "Student Bult Edit", href: "#studentBulkEdit" },
        { title: "Deleted Students", href: "#deletedStudents" },
        { title: "Passed Students", href: "#passedStudents" },
        { title: "Droped Students", href: "#dropedStudents" },
        { title: "Suspended Students", href: "#suspendedStudents" },
        { title: "Migrated / Promotion Students", href: "#migrateStudents" },
      ],
    },
    {
      title: "Teachers",
      subItems: [
        { title: "All Teachers", href: "#allTeachers" },
        { title: "Deleted Teachers", href: "#deletedTeachers" },
      ],
    },
    {
      title: "Employees",
      subItems: [
        { title: "All Employee", href: "#allEmployee" },
        { title: "Employee Roles", href: "#employeeRoles" },
      ],
    },

    { title: "Parent / Sibling", href: "#contact" },
    {
      title: "Attendance",
      subItems: [
        { title: "Student Attendance", href: "#" },
        { title: "Staff Attendance", href: "#staffAttendance" },
        { title: "Bio-Metric Attendance", href: "#biometricAttendance" },
      ],
    },
    {
      title: "Leave",
      subItems: [
        { title: "Leave Requests", href: "#" },
        { title: "My Leaves", href: "#myLeaves" },
        { title: "Leave Settings", href: "#leaveSettings" },
      ],
    },
    {
      title: "Fees",
      subItems: [
        { title: "Collect / Demand Bill", href: "#" },
        { title: "Fee Defaulters", href: "#feeDefaulters" },
        { title: "Collected Fees Log", href: "#collectedFeesLog" },
        { title: "Fees Collection Report", href: "#feesCollectionReport" },
        { title: "Monthly Fee Collection", href: "#" },
        { title: "Fees Structure [Setup]", href: "#" },
        { title: "Fees Structure Report", href: "#" },
        { title: "Student Fees Structure Log", href: "#" },
        { title: "Transport Structure [Setup]", href: "#" },
        { title: "Transport Structure report", href: "#" },
        { title: "Online Fee Payments", href: "#" },
      ],
    },
    {
      title: "Income",
      subItems: [
        { title: "Incomes", href: "#" },
        { title: "Income Types", href: "#" },
        { title: "Income Parties", href: "#" },
      ],
    },
    {
      title: "Expenses",
      subItems: [
        { title: "Expenses", href: "#" },
        { title: "Expense Type", href: "#" },
        { title: "Expense Parties", href: "#" },
      ],
    },
    {
      title: "Ledgers",
      subItems: [
        { title: "Ledgers", href: "#" },
        { title: "Day Book", href: "#" },
      ],
    },
    { title: "Text SMS", href: "#" },
    { title: "Notice on App [Free]", href: "#" },
    { title: "Notifications", href: "#" },
    { title: "House / Blocks", href: "#" },
    { title: "ID Cards", href: "#" },
    { title: "Online Quiz / Tests", href: "#" },
    { title: "Questions", href: "#" },
    { title: "Home Work", href: "#" },
    { title: "Lesson Plans", href: "#" },
    {
      title: "Admit Cards",
      subItems: [
        { title: "Admit Cards", href: "#" },
        { title: "Exam Time Tables", href: "#" },
      ],
    },
    {
      title: "Mark Sheets",
      subItems: [
        { title: "All MarkSheets", href: "#" },
        { title: "Bulk Marks Update", href: "#" },
        { title: "Mark Sheet Settings", href: "#" },
      ],
    },
    {
      title: "Certificates",
      subItems: [
        { title: "All Certificates", href: "#" },
        { title: "Certificate Types", href: "#" },
      ],
    },
    {
      title: "Custom Forms",
      subItems: [
        { title: "All Forms", href: "#" },
        { title: "Create New Form", href: "#" },
      ],
    },
    {
      title: "Transfer Certificates",
      subItems: [
        { title: "Transfer Certificates", href: "#" },
        { title: "Transfer Certificate Settings", href: "#" },
      ],
    },
    {
      title: "Study Material",
      subItems: [
        { title: "Video Lectures", href: "#" },
        { title: "PDF / Images Notes", href: "#" },
      ],
    },
    {
      title: "Events Gallery",
      subItems: [
        { title: "All Events", href: "#" },
        { title: "Create New Event", href: "#" },
      ],
    },
    {
      title: "Masters",
      subItems: [
        { title: "All Classes", href: "#" },
        { title: "All Sections", href: "#" },
        { title: "All Streams", href: "#" },
        { title: "Subject Groups", href: "#" },
        { title: "All Subjects", href: "#" },
        { title: "Books", href: "#" },
        { title: "Discount Heads", href: "#" },
        { title: "Document Types", href: "#" },
        { title: "Departments", href: "#" },
        { title: "Time Table", href: "#" },
        { title: "Data Settings", href: "#" },
      ],
    },
    {
      title: "Academic Calendar",
      subItems: [
        { title: "Academic Calendars", href: "#" },
        { title: "Academic Calendar Types", href: "#" },
      ],
    },

    { title: "Tickets", href: "#" },
    { title: "Settings", href: "#" },
    { title: "Edit Profile", href: "#" },
    { title: "Two Way Authentication", href: "#" },
  ];

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setActiveDropdown(null);
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <button className="mobile-toggle" onClick={toggleSidebar}>
        ☰
      </button>

      <div
        className={`sidebar ${isSidebarOpen ? "open" : ""}`}
        ref={sidebarRef}
      >
        <ul className="sidebar-menu">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`${item.subItems ? "has-dropdown" : ""} ${
                activeDropdown === index ? "active" : ""
              }`}
            >
              {item.subItems ? (
                <>
                  <button
                    className="dropdown-toggle"
                    onClick={() => toggleDropdown(index)}
                  >
                    {item.title}
                    <span className="arrow">▼</span>
                  </button>
                  <ul className="sub-menu">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a href={subItem.href}>{subItem.title}</a>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <a href={item.href}>{item.title}</a>
              )}
            </li>
          ))}
        </ul>

        <div className="sidebar-footer">
          <button className="sidebar-button">Logout</button>
        </div>
      </div>

      <div className="sidebar-overlay" onClick={toggleSidebar} />
    </>
  );
};

export default Sidebar;
