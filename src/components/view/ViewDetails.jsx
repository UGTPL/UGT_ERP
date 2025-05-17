import React, { useEffect, useState } from "react";
import './ViewDetails.css'
import axios from "axios";

const ViewDetails = () => {

    const [student,setStudent]=useState({})
   

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const response = await axios.get(`http://localhost:8080/getStudent/${1}`)
                console.log(response)
                setStudent(response.data)
            } catch (error) {
                console.log(error)
                if (!student) return <div>Loading...</div>;
            }
        }
        fetchData()
      },[])

      const Row = ({ label, value }) => (
        <div className="field-row">
          <span className="field-label">{label}:</span>
          <span className="field-value">{value ?? "-"}</span>
        </div>
      );

      
      const { admission, bankDetails, transferDetails, parentDetails } = student;

      const parentFields = [
        { key: 'name', label: 'Name' },
        { key: 'qualification', label: 'Qualification' },
        { key: 'occupation', label: 'Occupation' },
        { key: 'annualIncome', label: 'Annual Income' },
        { key: 'mobileNo', label: 'Mobile' },
        { key: 'emailAddress', label: 'Email' },
        { key: 'permanentAddress', label: 'Permanent Address' },
        { key: 'currentAddress', label: 'Current Address' },
        { key: 'aadharNo', label: 'Aadhar No.' },
        { key: 'panNo', label: 'PAN No.' }
      ];

      return (
        <div className="student-details-container">

             {/* Admission Details */}
          {admission && (
            <section className="card">
              <header className="card-header">Admission Details</header>
              <div className="card-body">
                <Row label="Session" value={admission.session} />
                <Row label="Admission No." value={admission.admissionNo} />
                <Row label="Registration No." value={admission.registrationNo} />
                <Row label="Enrollment No." value={admission.enrollmentNo} />
                <Row label="Applied Class" value={admission.appliedClass} />
                <Row label="Section" value={admission.section} />
                <Row label="Admission Type" value={admission.admissionType} />
                <Row label="RTE Student" value={admission.rteStudent ? "Yes" : "No"} />
              </div>
            </section>
          )}
    
          {/* Personal Details */}
          <section className="card">
            <header className="card-header">Personal Information</header>
            <div className="card-body">
              <Row label="ID" value={student.id} />
              <Row label="Name" value={`${student.firstName} ${student.middleName} ${student.lastName}`} />
              <Row label="Gender" value={student.gender} />
              <Row label="Date of Birth" value={student.dob} />
              <Row label="Mother Tongue" value={student.motherTongue} />
              <Row label="Medium of Instruction" value={student.mediumOfInstruction} />
              <Row label="Category" value={student.category} />
              <Row label="Nationality" value={student.nationality} />
              <Row label="Mobile" value={student.mobileNumber} />
              <Row label="Email" value={student.email} />
              <Row label="Address" value={student.address} />
              <Row label="City" value={student.city} />
              <Row label="State" value={student.state} />
              <Row label="Country" value={student.country} />
              <Row label="Aadhar No." value={student.aadharNumber} />
            </div>
          </section>
    
         
          {/* Bank Details */}
          {bankDetails && (
            <section className="card">
              <header className="card-header">Bank Details</header>
              <div className="card-body">
                <Row label="Bank Name" value={bankDetails.bankName} />
                <Row label="Branch" value={bankDetails.bankBranch} />
                <Row label="IFSC Code" value={bankDetails.ifscCode} />
                <Row label="Account No." value={bankDetails.accountNo} />
                <Row label="PAN No." value={bankDetails.panNo} />
              </div>
            </section>
          )}
    
          {/* Transfer Certificate */}
          {transferDetails && (
            <section className="card">
              <header className="card-header">Transfer Certificate</header>
              <div className="card-body">
                <Row label="TC No." value={transferDetails.tcNo} />
                <Row label="Issue Date" value={transferDetails.dateOfIssue} />
                <Row
                  label="TC File"
                  value={
                    transferDetails.tcFile ? (
                      <a href={transferDetails.tcFile} className="field-value link">Download</a>
                    ) : (
                      "-"
                    )
                  }
                />
              </div>
            </section>
          )}
    
          {/* Parent Details */}
          {parentDetails && parentDetails.length > 0 && (
        <section className="card parent-overview">
          <header className="card-header">Parent Details</header>
          <div className="card-body">
            <table className="parent-table">
              <thead>
                <tr>
                  <th>Field</th>
                  {parentDetails.map((p, i) => (
                    <th key={i}>{p.relationship}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {parentFields.map(field => (
                  <tr key={field.key}>
                    <td>{field.label}</td>
                    {parentDetails.map((p, i) => (
                      <td key={i}>{p[field.key] ?? '-'}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
        </div>
      );
    };
    
export default ViewDetails;
