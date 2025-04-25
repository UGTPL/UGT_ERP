import React, { useEffect, useState } from "react";
import "./StudentForm.css";
import axios from "axios";

const StudentForm = ({ isOpen, onClose }) => {
  const [qualifications, setQualifications] = useState([
    {
      qualification: "",
      year: "",
      rollNo: "",
      marks: "",
      percentage: "",
      subjects: "",
      school: "",
    },
  ]);

  const [isDisabled, setIsDisabled] = useState(false);
  const [isDropout, setIsDropout] = useState(false);
  const [isMinority, setIsMinority] = useState(false);

  const parentRoles = ["Mother", "Father", "Guardian"];
  const [selectedParent, setSelectedParent] = useState("");
  const lookupParent = () => {
    // your lookup logic here
    console.log("lookup", selectedParent);
  };

  // define each row: label, type, and for selects an options array
  const rows = [
    { key: "name", label: "Name", type: "text" },
    {
      key: "qualification",
      label: "Qualification",
      type: "select",
      options: ["-- Select --", "High School", "Graduate", "Post-Graduate"],
    },
    { key: "occupation", label: "Occupation", type: "text" },
    { key: "annualIncome", label: "Annual Income", type: "number" },
    { key: "email", label: "Email Address", type: "email" },
    { key: "mobile", label: "Mobile No.", type: "text" },
    { key: "whatsappNo", label: "Whatsapp No.", type: "text" },
    { key: "emergencyNo", label: "Emergency No.", type: "text" },
    { key: "religion", label: "Religion", type: "text" },
    { key: "category", label: "Category", type: "text" },
    { key: "sub-category", label: "Sub-Category", type: "text" },
    { key: "casteName", label: "Caste Name", type: "text" },
    { key: "nationality", label: "Nationality", type: "text" },
    { key: "maritalStatus", label: "Marital Status", type: "text" },
    { key: "permanentAddress", label: "Permanent Address", type: "text" },
    { key: "currentAddress", label: "Current Address", type: "text" },
    { key: "officeAddress", label: "Office Address", type: "text" },
    { key: "aadharNo", label: "Aadhar No", type: "text" },
    { key: "panNo", label: "PAN No.", type: "text" },
    {
      key: "incomeApplicationNo",
      label: "Income Application No.",
      type: "text",
    },
    { key: "casteApplicationNo", label: "Caste Application No.", type: "text" },
    {
      key: "domicileApplicationNo",
      label: "Domicile Application No.",
      type: "text",
    },
    { key: "aadhar", label: "Aadhar.", type: "file" },
    { key: "pan", label: "PAN.", type: "file" },
    { key: "photo", label: "Photo", type: "file" },
    { key: "categoryCertificate", label: "Category Certificate", type: "file" },
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose(); // call the close function
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);
  const [openSections, setOpenSections] = useState({
    admission: true,
    student: true,
    education: true,
    transfer: true,
    health: true,
    parents: true,
    scholarship: true,
    govtPortal: true,
    bank: true,
  });

  if (!isOpen) return null;

  const toggleSection = (key) =>
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));

  const handleInput = (index, field, value) => {
    const updated = [...qualifications];
    updated[index][field] = value;
    setQualifications(updated);
  };

  const addQualification = () =>
    setQualifications([
      ...qualifications,
      {
        qualification: "",
        year: "",
        rollNo: "",
        marks: "",
        percentage: "",
        subjects: "",
        school: "",
      },
    ]);

  const removeQualification = (index) =>
    setQualifications(qualifications.filter((_, i) => i !== index));

  const sessions = ["2023/2024", "2024/2025", "2025/2026"];
  const sources = ["Walkin", "Social Media", "Reference"];
  const yesNo = ["Yes", "No"];
  const classes = ["Class 1", "Class 2", "Class 3"];
  const sections = ["A", "B", "C"];
  const streams = ["Science", "Commerce", "Arts"];
  const mediums = ["English", "Hindi", "Regional"];

  const [admissionData, setAdmissionData] = useState({
    admissionType: "",
    sourceAdmission: "",
    referredBy: "",
    admissionNo: "",
    admissionDate: "",
    registrationNo: "",
    enrollmentNo: "",
    srNo: "",
    apaarId: "",
    penNo: "",
    rollNo: "",
    appliedClass: "",
    section: "",
    stream: "",
    educationMedium: "",
    isRte: "",
    enrolledClass: "",
  });

  const handleChange = (e) => {
    setAdmissionData({
      ...admissionData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(admissionData);
    // try {
    //   const response = await axios.post("/api/admissions", admissionData, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });

    //   console.log("Admission created:", response.data);
    //   // Handle success (clear form, show notification, etc.)
    // } catch (error) {
    //   console.error("Error submitting admission:", error);
    //   // Handle error
    // }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="student-form-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Add Student</h2>
          <button onClick={onClose}>✕</button>
        </div>
        <div style={{ display: "flex", gap: "3rem" }}>
          <FormSelect label="Session" id="session" options={sessions} />
          <FormSelect
            style={{ width: "200px" }}
            label="Enrolled Session (if not current year)"
            id="enrolledSession"
            options={sessions}
          />
        </div>
        <form className="student-form" onSubmit={handleSubmit}>
          <Section
            title="Admission Details"
            open={openSections.admission}
            onToggle={() => toggleSection("admission")}
          >
            <div className="form-grid">
              <FormSelect
                label="Admission Type *"
                id="admissionType"
                value={admissionData.admissionType}
                onChange={handleChange}
                options={["", "New", "Old"]}
              />
              <FormSelect
                label="Source of Admission"
                id="sourceAdmission"
                value={admissionData.sourceAdmission}
                onChange={handleChange}
                options={sources}
              />
              <FormField
                label="Referred By Name"
                id="referredBy"
                value={admissionData.referredBy}
                onChange={handleChange}
              />
              <FormField
                label="Admission No"
                id="admissionNo"
                value={admissionData.admissionNo}
                onChange={handleChange}
              />
              <FormField
                label="Admission Date"
                id="admissionDate"
                value={admissionData.admissionDate}
                onChange={handleChange}
                type="date"
              />
              <FormField
                label="Registration No."
                id="registrationNo"
                value={admissionData.registrationNo}
                onChange={handleChange}
              />
              <FormField
                label="Enrollment No."
                id="enrollmentNo"
                value={admissionData.enrollmentNo}
                onChange={handleChange}
              />
              <FormField
                label="SR No."
                id="srNo"
                value={admissionData.srNo}
                onChange={handleChange}
              />
              <FormField
                label="APAAR ID"
                id="apaarId"
                value={admissionData.apaarId}
                onChange={handleChange}
              />
              <FormField
                label="PEN No"
                id="penNo"
                value={admissionData.penNo}
                onChange={handleChange}
              />
              <FormField
                label="Roll No."
                id="rollNo"
                value={admissionData.rollNo}
                onChange={handleChange}
              />
              <FormSelect
                label="Class (Applied for) *"
                id="appliedClass"
                value={admissionData.appliedClass}
                onChange={handleChange}
                options={classes}
              />
              <FormSelect
                label="Section *"
                id="section"
                options={sections}
                value={admissionData.section}
                onChange={handleChange}
              />
              <FormSelect
                label="Stream"
                id="stream"
                options={streams}
                value={admissionData.stream}
                onChange={handleChange}
              />
              <FormSelect
                label="Education Medium"
                id="educationMedium"
                value={admissionData.educationMedium}
                onChange={handleChange}
                options={mediums}
              />
              <FormSelect
                label="Is RTE Student?"
                id="isRte"
                options={yesNo}
                value={admissionData.isRte}
                onChange={handleChange}
              />
              <FormSelect
                label="Enrolled Class"
                id="enrolledClass"
                value={admissionData.enrolledClass}
                onChange={handleChange}
                options={classes}
              />
            </div>
          </Section>

          <Section
            title="Personal Details"
            open={openSections.student}
            onToggle={() => toggleSection("student")}
          >
            <div className="form-grid">
              <FormField label="First Name *" id="firstName" />
              <FormField label="Middile Name" id="middileName" />
              <FormField label="Last Name *" id="lastName" />
              <FormSelect
                label="Gender"
                name="gender"
                options={["select", "Male", "Female", "Other"]}
              />
              <FormField label="DOB" id="dob" type="date" />
              <FormField label="Mother Tongue" id="motherTongue" />
              <FormSelect
                label="Medium of Instruction"
                id="mediumInstruction"
                options={["-- Select --", "English", "Telugu", "OptionSet"]}
              />
              <FormField label="Category" id="category" />
              <FormField label="Sub-Category" id="subCategory" />
              <FormField label="Caste Name" id="casteName" />
              <FormSelect
                label="Do you Belong to Minority?"
                id="minority"
                options={["-- Select --", "Yes", "No"]}
                onChange={(e) => setIsMinority(e.target.value === "Yes")}
              />

              {isMinority && (
                <FormField label="Specify" id="minoritySpecify" type="text" />
              )}
              <FormField label="Nationality" id="nationality" />
              <FormField label="Mobile No." id="mobileNo" type="tel" />
              <FormField
                label="Alternate Number"
                id="alternateNumber"
                type="tel"
              />
              <FormField label="Whatsapp No." id="whatsappNo" type="tel" />
              <FormField label="Email" id="email" type="email" />
              <FormField label="Address" id="address" />
              <FormField label="Pincode" id="pincode" />
              <FormField label="City" id="city" />
              <FormField label="State" id="state" />
              <FormField label="Country" id="country" />
              <FormField label="Aadhar No." id="aadharNo" type="text" />
              <FormField label="DOB Certificate No." id="dobCertificateNo" />
              <FormField label="Attach Aadhar" id="attachAadhar" type="file" />
              <FormField
                label="DOB Certificate"
                id="dobCertificate"
                type="file"
              />
            </div>
          </Section>

          <Section
            title="Previous Education Details"
            open={openSections.education}
            onToggle={() => toggleSection("education")}
          >
            <div className="form-grid">
              <FormField
                label="Name & Address of School"
                id="schoolNameAddress"
              />
              <FormField label="Roll No." id="rollNo" />
              <FormField label="Attended Class" id="attendedClass" />

              <FormSelect
                label="Last School Affiliated to"
                id="lastAffiliatedSchool"
                options={[
                  "-- Select School --",
                  "CBSE",
                  "ICSE",
                  "State Board",
                  "International Board",
                ]}
              />

              <FormSelect
                label="Last Session"
                id="lastSession"
                options={[
                  "-- Select Session --",
                  "2021-2022",
                  "2022-2023",
                  "2023-2024",
                  "2024-2025",
                ]}
              />
              <FormSelect
                label="Is Student Dropout?"
                id="isDropout"
                options={["-- Select --", "Yes", "No"]}
                onChange={(e) => setIsDropout(e.target.value === "Yes")}
              />

              {isDropout && (
                <>
                  <FormField
                    label="Obt. Marks"
                    id="obtainedMarks"
                    type="number"
                  />
                  <FormField label="%" id="percentage" type="number" />
                  <FormField
                    label="Pass. Year"
                    id="passingYear"
                    type="number"
                  />
                </>
              )}
            </div>
          </Section>

          <Section
            title="Transfer Details"
            open={openSections.transfer}
            onToggle={() => toggleSection("transfer")}
          >
            <div className="form-grid">
              <FormField label="Transfer Certificate No." id="tcNo" />
              <FormField label="Date of Issue" id="dateOfIssue" type="date" />
              <FormField label="Transfer Certificate" id="tcFile" type="file" />
            </div>
          </Section>

          <Section
            title="Health Details"
            open={openSections.health}
            onToggle={() => toggleSection("health")}
          >
            <div className="form-grid">
              <FormField label="Blood Group" id="govtStudentId" />
              <FormField label="Height" id="govtFamilyId" />
              <FormField label="Weight" id="weight" />
              <FormField label="Left Vision" id="leftVision" />
              <FormField label="Right Vision" id="rightVision" />

              <FormSelect
                label="Disability"
                id="disability"
                options={["-- Select Disability --", "Yes", "No"]}
                onChange={(e) => setIsDisabled(e.target.value === "Yes")}
              />

              {isDisabled && (
                <>
                  <FormField label="Type of Disability" id="disabilityType" />
                  <FormField label="Kind of" id="disabilityKind" />
                  <FormField
                    label="Disability Certificate No."
                    id="certificateNo"
                  />
                  <FormField
                    label="Disability Certificate Copy"
                    id="certificateCopy"
                    type="file"
                  />
                </>
              )}
            </div>
          </Section>

          <Section
            title="Parent Details"
            open={openSections.parents}
            onToggle={() => toggleSection("parents")}
          >
            <div className="form-grid">
              <FormSelect
                label="Select Parent"
                id="selectParent"
                options={["-- Select Parent --", ...parentRoles]}
                onChange={(e) => setSelectedParent(e.target.value)}
              />
              <button
                type="button"
                className="btn btn-sm btn-primary ms-2"
                onClick={lookupParent}
              >
                <i className="bi bi-plus-lg"></i>
              </button>
            </div>

            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="table-light">
                  <tr>
                    <th>Details</th>
                    {parentRoles.map((role) => (
                      <th key={role}>{role}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.key}>
                      <td>
                        <strong>{row.label}</strong>
                      </td>
                      {parentRoles.map((role) => {
                        const fieldId = `${role.toLowerCase()}_${row.key}`;
                        if (row.type === "select") {
                          return (
                            <td key={fieldId}>
                              <FormSelect
                                label="" // no label inside table cell
                                id={fieldId}
                                options={row.options}
                                onChange={() => {}}
                              />
                            </td>
                          );
                        } else {
                          return (
                            <td key={fieldId}>
                              <FormField
                                label=""
                                id={fieldId}
                                type={row.type}
                              />
                            </td>
                          );
                        }
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section
            title="Scholarship Details"
            open={openSections.scholarship}
            onToggle={() => toggleSection("scholarship")}
          >
            <div className="form-grid">
              <FormField label="Scholarship ID" id="scholarshipId" />
              <FormField
                label="Scholarship Password"
                id="scholarshipPassword"
              />
            </div>
          </Section>

          <Section
            title="Govt Portal ID Details"
            open={openSections.govtPortal}
            onToggle={() => toggleSection("govtPortal")}
          >
            <div className="form-grid">
              <FormField label="Govt Portal Student ID" id="govtStudentId" />
              <FormField label="Govt Family ID" id="govtFamilyId" />
            </div>
          </Section>

          <Section
            title="Bank Account Details"
            open={openSections.bank}
            onToggle={() => toggleSection("bank")}
          >
            <div className="form-grid">
              <FormField label="Bank Name" id="bankName" />
              <FormField label="Bank Branch" id="bankBranch" />
              <FormField label="IFSC Code" id="ifscCode" />
              <FormField label="Account No" id="accountNo" type="number" />
              <FormField label="PAN No" id="panNo" />
            </div>
          </Section>

          <div className="form-footer">
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Section = ({ title, open, onToggle, children }) => (
  <section className={`form-section ${open ? "open" : "collapsed"}`}>
    <div className="dropdown-header" onClick={onToggle}>
      <h3>{title}</h3>
      <span>{open ? "▲" : "▼"}</span>
    </div>
    {open && <div className="section-body">{children}</div>}
  </section>
);

const FormField = ({ label, id, type = "text" }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <input id={id} type={type} name={id} />
  </div>
);

const FormSelect = ({ label, id, options, onChange }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <select id={id} name={id} className="form-control" onChange={onChange}>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

export default StudentForm;
