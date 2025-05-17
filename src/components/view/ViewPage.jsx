import React, { useEffect, useState } from "react";
import "./ViewPage.css";
import EditPage from "./EditPage";
import ViewDetails from "./ViewDetails";
import FeeView from "./FeeView";
import axios from "axios";

const ViewPage = () => {
  const [studentType, setStudentType] = useState("");
  const [transportType, setTransportType] = useState("transport");

  const [activeTab, setActiveTab] = useState("view");

  const [student, setStudent] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/getStudent/${1}`
        );
        console.log(response);
        setStudent(response.data);
        setStudentType(response.data.admissionType)
        // setTransportType(response.data.)
        
      } catch (error) {
        console.log(error);
        if (!student) return <div>Loading...</div>;
      }
    };
    fetchData();
    
  }, [console.log(student)]);

  const renderContent = () => {
    switch (activeTab) {
      case "view":
        return (
          <div>
            <ViewDetails />{" "}
          </div>
        );
      case "edit":
        return (
          <div>
            <EditPage />
          </div>
        );
      case "fees":
        return (
          <div>
            <FeeView />
          </div>
        );
      case "reports":
        return <div>Academic reports and grades...</div>;
      case "attendance":
        return <div>Attendance record and stats...</div>;
      case "idcard":
        return <div>Student ID card view/print...</div>;
      default:
        return <div>Welcome! Select an action above.</div>;
    }
  };
  const baseTabs = [
    { key: "view", label: "View Details" },
    { key: "edit", label: "Edit" },
    { key: "fees", label: "Fees" },
    { key: "school", label: "School" },
  ];

  // const extraTab = studentType === 'DayScholar'  && transportType === 'transport'
  //   ? { key: 'transport', label: 'Transport' }
  //   : { key: 'hostel', label: 'Hostel' };
  const extraTabs = (() => {
    if (studentType === "hostel") {
      return { key: "hostel", label: "Hostel" };
    }
    if (studentType === "DayScholar" && transportType === "transport") {
      return { key: "transport", label: "Transport" };
    }
    return {}; // nothing for other cases
  })();
  const otherTabs = [
    { key: "library", label: "Library" },
    { key: "idcard", label: "ID Card" },
    { key: "subjects", label: "Subjects" },
    { key: "examschedule", label: "Exam Schedule" },
    { key: "marks", label: "Marks" },
    { key: "reportcard", label: "Report Card" },
    { key: "performance", label: "Performance Report" },
    { key: "gatepass", label: "Gate Pass" },
    { key: "activity", label: "Activity" },
  ];

  const tabs = [...baseTabs, extraTabs, ...otherTabs].filter(
    (tab) => tab && tab.key && tab.label
  );
  return (
    <>
      <div className="person-row">
        <img
          src="https://imgs.search.brave.com/Pk48b-Tm5sJEyRKPg6zpKsn-6LxQ2dPf9ERe8bULF84/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9l/YXN0ZXJuLXdvbWFu/XzEzMDMtNTI1MS5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw"
          alt=""
          className="person-row__avatar"
        />

        <table className="person-row__table">
          <tbody>
            <tr>
              <th>Admission Type </th>
              <td>NEW</td>
            </tr>
            <tr>
              <th>Admission No</th>
              <td>ABC007</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{student.firstName} {student.lastName}</td>
            </tr>
            <tr>
              <th>Father's Name</th>
              <td>samar K</td>
            </tr>
            <tr>
              <th>Class &amp; Section</th>
              <td>10th & A</td>
            </tr>
          </tbody>
        </table>

        <table className="person-row__table">
          <tbody>
            <tr>
              <th>Student Type</th>
              <td>{studentType}</td>
            </tr>
            <tr>
              <th>{studentType === "DayScholar" ? "Transport" : "Hostel"}</th>
              <td>Yes</td>
            </tr>
            <tr>
              <th>Mobile No</th>
              <td>{student.mobileNumber}</td>
            </tr>
            <tr>
              <th>Siblings</th>
              <td>-</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>Medchal-malkajgiri, TG</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <div className="person-row__actions">
        {tabs.map(({ key, label }) => (
          <button
            key={key}
            className={`person-row__btn ${activeTab === key ? "active" : ""}`}
            onClick={() => setActiveTab(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="person-row__content">{renderContent()}</div>
    </>
  );
};

export default ViewPage;
