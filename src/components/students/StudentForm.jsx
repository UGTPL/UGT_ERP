// import React, { useState } from "react";
// import "./StudentForm.css";

// const StudentForm = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   const [qualifications, setQualifications] = useState([
//     {
//       qualification: "",
//       year: "",
//       rollNo: "",
//       marks: "",
//       percentage: "",
//       subjects: "",
//       school: "",
//     },
//   ]);

//   const addQualification = () => {
//     setQualifications([
//       ...qualifications,
//       {
//         qualification: "",
//         year: "",
//         rollNo: "",
//         marks: "",
//         percentage: "",
//         subjects: "",
//         school: "",
//       },
//     ]);
//   };

//   const removeQualification = (index) => {
//     const updated = qualifications.filter((_, i) => i !== index);
//     setQualifications(updated);
//   };

//   const updateQualification = (index, field, value) => {
//     const updated = qualifications.map((row, i) =>
//       i === index ? { ...row, [field]: value } : row
//     );
//     setQualifications(updated);
//   };

//   const [openSections, setOpenSections] = useState({
//     qualifications: true,
//   });

//   const toggleSection = (sectionName) => {
//     setOpenSections((prev) => ({
//       ...prev,
//       [sectionName]: !prev[sectionName],
//     }));
//   };

//   return (
//     <div className="modal-overlay" onClick={onClose}>
//       <div className="student-form-modal" onClick={(e) => e.stopPropagation()}>
//         {/* Header */}
//         <div className="modal-header">
//           <h2>Add Student</h2>
//           <button className="close-button" onClick={onClose}>
//             ✕
//           </button>
//         </div>

//         {/* Form */}
//         <form className="student-form">
//           {/* Admission Details */}
//           <section>
//             <div
//               className="dropdown-header"
//               onClick={() => toggleSection("qualifications")}
//             >
//               <h3 className="section-title">Admission Details</h3>
//               <span>{openSections.qualifications ? "▲" : "▼"}</span>
//             </div>

//             <div className="form-grid">
//               <FormField label="APAAR ID" id="apaarId" type="text" />
//               <FormField label="PEN No." id="penNo" type="text" />
//               <FormField
//                 label="Registration No."
//                 id="registrationNo"
//                 type="text"
//               />
//               <FormField label="Enrollment No." id="enrollmentNo" type="text" />
//               <FormField label="SR No." id="srNo" type="text" />
//               <FormField
//                 label="Prefix"
//                 id="prefix250"
//                 type="text"
//                 placeholder="250"
//               />
//               <FormField
//                 label="Admission No. Prefix"
//                 id="admissionNoPrefix"
//                 type="text"
//                 placeholder="500"
//               />
//               <FormField
//                 label="Admission Date"
//                 id="admissionDate"
//                 type="date"
//               />
//               <FormField label="Roll No." id="rollNo" type="text" />
//               <FormSelect
//                 label="Class (Applied for)"
//                 id="classApplied"
//                 options={["-- Select Class --"]}
//               />
//               <FormSelect
//                 label="Section"
//                 id="sectionApplied"
//                 options={["-- Select Section --"]}
//               />
//               <FormSelect
//                 label="Stream"
//                 id="stream"
//                 options={["-- Select Stream --"]}
//               />
//               <FormSelect
//                 label="Education Medium"
//                 id="medium"
//                 options={["-- Select Medium --"]}
//               />
//               <FormField
//                 label="Student's Photo"
//                 id="studentPhoto"
//                 type="file"
//               />
//               <FormField label="Referred By" id="referredBy" type="text" />
//               <FormRadio
//                 label="Is RTE Student?"
//                 name="isRTE"
//                 options={["Yes", "No"]}
//               />
//               <FormField
//                 label="Enrolled Session"
//                 id="enrolledSession"
//                 type="text"
//               />
//               <FormField
//                 label="Enrolled Class"
//                 id="enrolledClass"
//                 type="text"
//               />
//               <FormSelect
//                 label="Enrolled Year"
//                 id="enrolledYear"
//                 options={["-- Select Year --"]}
//               />
//               <FormRadio
//                 label="Child with Special Needs?"
//                 name="specialNeeds"
//                 options={["Yes", "No"]}
//               />
//               <FormField label="House / Block" id="houseBlock" type="text" />
//             </div>
//           </section>

//           {/* Personal Details */}
//           <section>
//             <h3 className="section-title">Personal Details</h3>
//             <div className="form-grid">
//               <FormField label="First Name *" id="firstName" type="text" />
//               <FormField label="Last Name" id="lastName" type="text" />
//               <FormField label="Mobile No." id="mobileNo" type="tel" />
//               <FormField label="Alternate Number" id="altNumber" type="tel" />
//               <FormField label="WhatsApp No." id="whatsappNo" type="tel" />
//               <FormField label="Email" id="email" type="email" />
//               <FormRadio
//                 label="Gender"
//                 name="gender"
//                 options={["Male", "Female", "Other"]}
//               />
//               <FormField label="Blood Group" id="bloodGroup" type="text" />
//               <FormField label="Height" id="height" type="text" />
//               <FormField label="Weight" id="weight" type="text" />
//               <FormField label="DOB" id="dob" type="date" />
//               <FormField label="DOB Certificate" id="dobCert" type="file" />
//               <FormField
//                 label="DOB Certificate No."
//                 id="dobCertNo"
//                 type="text"
//               />
//             </div>
//           </section>

//           {/* Previous Qualifications */}
//           <section>
//             <h3 className="section-title">Previous Qualifications</h3>
//             <div className="qualification-table">
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Qualification</th>
//                     <th>Year</th>
//                     <th>Roll No.</th>
//                     <th>Marks</th>
//                     <th>%</th>
//                     <th>Subjects</th>
//                     <th>School/College</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {qualifications.map((row, idx) => (
//                     <tr key={idx}>
//                       <td>
//                         <input
//                           value={row.qualification}
//                           onChange={(e) =>
//                             updateQualification(
//                               idx,
//                               "qualification",
//                               e.target.value
//                             )
//                           }
//                         />
//                       </td>
//                       <td>
//                         <input
//                           value={row.year}
//                           onChange={(e) =>
//                             updateQualification(idx, "year", e.target.value)
//                           }
//                         />
//                       </td>
//                       <td>
//                         <input
//                           value={row.rollNo}
//                           onChange={(e) =>
//                             updateQualification(idx, "rollNo", e.target.value)
//                           }
//                         />
//                       </td>
//                       <td>
//                         <input
//                           value={row.marks}
//                           onChange={(e) =>
//                             updateQualification(idx, "marks", e.target.value)
//                           }
//                         />
//                       </td>
//                       <td>
//                         <input
//                           value={row.percentage}
//                           onChange={(e) =>
//                             updateQualification(
//                               idx,
//                               "percentage",
//                               e.target.value
//                             )
//                           }
//                         />
//                       </td>
//                       <td>
//                         <input
//                           value={row.subjects}
//                           onChange={(e) =>
//                             updateQualification(idx, "subjects", e.target.value)
//                           }
//                         />
//                       </td>
//                       <td>
//                         <input
//                           value={row.school}
//                           onChange={(e) =>
//                             updateQualification(idx, "school", e.target.value)
//                           }
//                         />
//                       </td>
//                       <td>
//                         <button
//                           type="button"
//                           onClick={() => removeQualification(idx)}
//                         >
//                           🗑️
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               <button
//                 type="button"
//                 className="add-row-button"
//                 onClick={addQualification}
//               >
//                 + Add Row
//               </button>
//             </div>
//           </section>

//           {/* Income, Caste & Domicile */}
//           <section>
//             <h3 className="section-title">Income, Caste & Domicile</h3>
//             <div className="form-grid">
//               <FormField
//                 label="Income Application No."
//                 id="incomeAppNo"
//                 type="text"
//               />
//               <FormField
//                 label="Caste Application No."
//                 id="casteAppNo"
//                 type="text"
//               />
//               <FormField
//                 label="Domicile Application No."
//                 id="domicileAppNo"
//                 type="text"
//               />
//             </div>
//           </section>

//           {/* Parent Details */}
//           <section>
//             <h3 className="section-title">Parent Details</h3>
//             <div className="form-grid">
//               <FormField label="Select Parent" id="selectParent" type="text" />
//               <FormField label="Mother Name" id="motherName" type="text" />
//               <FormField label="Father Name" id="fatherName" type="text" />
//               <FormField label="Guardian Name" id="guardianName" type="text" />
//               <FormSelect
//                 label="Mother Qualification"
//                 id="motherQual"
//                 options={["Select"]}
//               />
//               <FormSelect
//                 label="Father Qualification"
//                 id="fatherQual"
//                 options={["Select"]}
//               />
//               <FormSelect
//                 label="Guardian Qualification"
//                 id="guardianQual"
//                 options={["Select"]}
//               />
//               <FormField
//                 label="Residential Address"
//                 id="parentAddress"
//                 type="text"
//               />
//               <FormField label="Occupation" id="occupation" type="text" />
//               <FormField
//                 label="Official Address"
//                 id="officialAddress"
//                 type="text"
//               />
//               <FormField label="Annual Income" id="annualIncome" type="text" />
//               <FormField label="Email Address" id="parentEmail" type="email" />
//               <FormField label="Mobile No." id="parentMobile" type="tel" />
//               <FormField label="Aadhar No." id="parentAadhar" type="text" />
//               <FormField label="Mother Photo" id="motherPhoto" type="file" />
//               <FormField label="Father Photo" id="fatherPhoto" type="file" />
//               <FormField
//                 label="Guardian Photo"
//                 id="guardianPhoto"
//                 type="file"
//               />
//             </div>
//           </section>

//           {/* Religion & Category */}
//           <section>
//             <h3 className="section-title">Religion & Category</h3>
//             <div className="form-grid">
//               <FormField
//                 label="Nationality"
//                 id="nationality"
//                 type="text"
//                 placeholder="INDIAN"
//               />
//               <FormField label="Religion" id="religion" type="text" />
//               <FormField label="Category" id="category" type="text" />
//               <FormField label="Caste" id="caste" type="text" />
//               <FormField
//                 label="Category Certificate"
//                 id="catCert"
//                 type="file"
//               />
//             </div>
//           </section>

//           {/* Aadhar & Attachment */}
//           <section>
//             <h3 className="section-title">Aadhar & Attachment</h3>
//             <div className="form-grid">
//               <FormField label="Aadhar No." id="aadhar" type="text" />
//               <FormField label="Attach Aadhar" id="attachAadhar" type="file" />
//             </div>
//           </section>

//           {/* Transfer Certificate */}
//           <section>
//             <h3 className="section-title">Transfer Certificate</h3>
//             <div className="form-grid">
//               <FormField label="TC No." id="tcNo" type="text" />
//               <FormField label="Date of Issue" id="tcDate" type="date" />
//               <FormField label="Transfer Certificate" id="tcFile" type="file" />
//             </div>
//           </section>

//           {/* Scholarship */}
//           <section>
//             <h3 className="section-title">Scholarship</h3>
//             <div className="form-grid">
//               <FormField
//                 label="Scholarship ID"
//                 id="scholarshipId"
//                 type="text"
//               />
//               <FormField
//                 label="Scholarship Password"
//                 id="scholarshipPwd"
//                 type="text"
//               />
//             </div>
//           </section>

//           {/* Govt Portal ID */}
//           <section>
//             <h3 className="section-title">Govt Portal ID</h3>
//             <div className="form-grid">
//               <FormField
//                 label="Student ID on Portal"
//                 id="govtStudentId"
//                 type="text"
//               />
//               <FormField
//                 label="Family ID on Portal"
//                 id="govtFamilyId"
//                 type="text"
//               />
//             </div>
//           </section>

//           {/* Bank Account Details */}
//           <section>
//             <h3 className="section-title">Bank Account Details</h3>
//             <div className="form-grid">
//               <FormField label="Bank Name" id="bankName" type="text" />
//               <FormField label="Bank Branch" id="bankBranch" type="text" />
//               <FormField label="IFSC Code" id="ifsc" type="text" />
//               <FormField label="Account No." id="accountNo" type="text" />
//               <FormField label="PAN No." id="panNo" type="text" />
//             </div>
//           </section>

//           {/* Last School Details */}
//           <section>
//             <h3 className="section-title">Last School Details</h3>
//             <div className="form-grid">
//               <FormField
//                 label="Name & Address of School"
//                 id="lastSchool"
//                 type="text"
//               />
//               <FormSelect
//                 label="Attended Class"
//                 id="lastClass"
//                 options={["Select"]}
//               />
//               <FormField label="Affiliated To" id="affiliatedTo" type="text" />
//               <FormField label="Last Session" id="lastSession" type="text" />
//               <FormRadio
//                 label="Is Student Dropout?"
//                 name="isDropout"
//                 options={["Yes", "No"]}
//               />
//             </div>
//           </section>

//           {/* Student Address */}
//           <section>
//             <h3 className="section-title">Student Address</h3>
//             <div className="form-grid">
//               <FormField label="Address" id="stuAddress" type="text" />
//               <FormField label="Pincode" id="pincode" type="text" />
//               <FormField label="City" id="city" type="text" />
//               <FormField label="State" id="state" type="text" />
//               <FormField label="Country" id="country" type="text" />
//             </div>
//           </section>

//           {/* Admission Type */}
//           <section>
//             <h3 className="section-title">Student Admission Type</h3>
//             <div className="radio-group">
//               <label>
//                 <input type="radio" name="admissionType" value="New" /> New
//               </label>
//               <label>
//                 <input type="radio" name="admissionType" value="Old" /> Old
//               </label>
//             </div>
//           </section>

//           {/* Additional Details */}
//           <section>
//             <h3 className="section-title">Generate Additional Details</h3>
//             <div className="form-grid">
//               <FormCheck label="Fees Structure" id="genFees" />
//               <FormCheck label="Login Details" id="genLogin" />
//               <FormField label="Username" id="username" type="text" />
//               <FormField label="Password" id="password" type="password" />
//             </div>
//           </section>

//           {/* Submit */}
//           <div className="form-footer">
//             <button type="submit" className="submit-button">
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// // Helper components
// const FormField = ({ label, id, type, placeholder }) => (
//   <div className="form-group">
//     <label htmlFor={id}>{label}</label>
//     <input id={id} name={id} type={type} placeholder={placeholder || ""} />
//   </div>
// );

// const FormSelect = ({ label, id, options }) => (
//   <div className="form-group">
//     <label htmlFor={id}>{label}</label>
//     <select id={id} name={id}>
//       {options.map((opt) => (
//         <option key={opt}>{opt}</option>
//       ))}
//     </select>
//   </div>
// );

// const FormRadio = ({ label, name, options }) => (
//   <div className="form-group">
//     <span>{label}</span>
//     <div className="radio-group">
//       {options.map((opt) => (
//         <label key={opt}>
//           <input type="radio" name={name} value={opt} /> {opt}
//         </label>
//       ))}
//     </div>
//   </div>
// );

// const FormCheck = ({ label, id }) => (
//   <div className="form-group">
//     <label>
//       <input type="checkbox" id={id} name={id} /> {label}
//     </label>
//   </div>
// );

// export default StudentForm;

import React, { useEffect, useState } from "react";
import "./StudentForm.css";

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
    personal: true,
    qualifications: true,
    parents: true,
    religion: true,
    aadhar: true,
    transfer: true,
    scholarship: true,
    portal: true,
    bank: true,
    school: true,
    address: true,
    admissionType: true,
    additional: true,
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

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="student-form-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Add Student</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <form className="student-form">
          <Section
            title="Admission Details"
            open={openSections.admission}
            onToggle={() => toggleSection("admission")}
          >
            <div className="form-grid">
              <FormField label="APAAR ID" id="apaarId" />
              <FormField
                label="Admission Date"
                id="admissionDate"
                type="date"
              />
              <FormSelect
                label="Class"
                name="classApplied"
                options={["-- Select Class --", "Nursery", "10th"]}
              />
              <FormSelect
                label="Is RTE Student?"
                name="isRTE"
                options={["No", "Yes"]}
              />
              <FormField label="APAAR ID" id="apaarId" />
              <FormField
                label="Admission Date"
                id="admissionDate"
                type="date"
              />
              <FormSelect
                label="Class"
                name="classApplied"
                options={["-- Select Class --", "Nursery", "10th"]}
              />
              <FormSelect
                label="Is RTE Student?"
                name="isRTE"
                options={["No", "Yes"]}
              />
              <FormField label="APAAR ID" id="apaarId" />
              <FormField
                label="Admission Date"
                id="admissionDate"
                type="date"
              />
              <FormSelect
                label="Class"
                name="classApplied"
                options={["-- Select Class --", "Nursery", "10th"]}
              />
              <FormSelect
                label="Is RTE Student?"
                name="isRTE"
                options={["No", "Yes"]}
              />
              <FormField label="APAAR ID" id="apaarId" />
              <FormField
                label="Admission Date"
                id="admissionDate"
                type="date"
              />
              <FormSelect
                label="Class"
                name="classApplied"
                options={["-- Select Class --", "Nursery", "10th"]}
              />
              <FormSelect
                label="Is RTE Student?"
                name="isRTE"
                options={["No", "Yes"]}
              />
              <FormField label="APAAR ID" id="apaarId" />
              <FormField
                label="Admission Date"
                id="admissionDate"
                type="date"
              />
              <FormSelect
                label="Class"
                name="classApplied"
                options={["-- Select Class --", "Nursery", "10th"]}
              />
              <FormSelect
                label="Is RTE Student?"
                name="isRTE"
                options={["No", "Yes"]}
              />
            </div>
          </Section>

          <Section
            title="Personal Details"
            open={openSections.personal}
            onToggle={() => toggleSection("personal")}
          >
            <div className="form-grid">
              <FormField label="First Name *" id="firstName" />
              <FormSelect
                label="Gender"
                name="gender"
                options={["select", "Male", "Female", "Other"]}
              />
              <FormField label="DOB" id="dob" type="date" />
              <FormField label="Email" id="email" type="email" />
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

const FormSelect = ({ label, id, options }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <select id={id} name={id}>
      {options.map((opt) => (
        <option key={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

export default StudentForm;
