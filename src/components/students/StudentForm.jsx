import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StudentForm.css';

export default function StudentForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dob: '',
    mobileNumber: '',
    email: '',
    admission: { session: '', enrolledSession: '', admissionDate: '', admissionType: '' },
    aadharFile: '',
    studentPhotoPath: ''
  });

  useEffect(() => {
    // Additional setup if needed
  }, []);

  const handleChange = (e, section) => {
    const { name, value, type, checked } = e.target;
    if (section) {
      setForm(f => ({ ...f, [section]: { ...f[section], [name]: type === 'checkbox' ? checked : value } }));
    } else {
      setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
    }
  };

  const fileToBase64 = file => new Promise((res, rej) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => res(reader.result.split(',')[1]);
    reader.onerror = err => rej(err);
  });

  const handleFileChange = async (e, section) => {
    const file = e.target.files[0];
    if (!file) return;
    const b64 = await fileToBase64(file);
    if (section) {
      setForm(f => ({ ...f, [section]: { ...f[section], [e.target.name]: b64 } }));
    } else setForm(f => ({ ...f, [e.target.name]: b64 }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      console.log("try")
      await axios.post('http://localhost:8080/addStudent', form, { headers: { 'Content-Type': 'application/json' } });
      alert('Student created');
      setIsOpen(false);
    } catch {
      alert('Error saving student');
    }
  };

  return (
    <>
      <button className="open-btn" onClick={() => setIsOpen(true)}>Add Student</button>
      {isOpen && (
        <div className="modal-backdrop" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsOpen(false)}>&times;</button>
            <h2>New Student Admission</h2>
            <form className="student-form" onSubmit={handleSubmit}>
              <h2>Student Info</h2>
              <label>First Name<input name="firstName" value={form.firstName} onChange={handleChange} required /></label>
              <label>Last Name<input name="lastName" value={form.lastName} onChange={handleChange} required /></label>
              <label>Gender<select name="gender" value={form.gender} onChange={handleChange} required><option value="">Select</option><option>Male</option><option>Female</option></select></label>
              <label>DOB<input type="date" name="dob" value={form.dob} onChange={handleChange} required /></label>
              <label>Mobile<input name="mobileNumber" value={form.mobileNumber} onChange={handleChange} required /></label>
              <label>Email<input type="email" name="email" value={form.email} onChange={handleChange} required /></label>
              <h2>Admission</h2>
              <label>Session<input name="session" value={form.admission.session} onChange={e => handleChange(e, 'admission')} /></label>
              <label>Enrolled Session<input name="enrolledSession" value={form.admission.enrolledSession} onChange={e => handleChange(e, 'admission')} /></label>
              <label>Admission Date<input type="date" name="admissionDate" value={form.admission.admissionDate} onChange={e => handleChange(e, 'admission')} /></label>
              <label>Admission Type<input name="admissionType" value={form.admission.admissionType} onChange={e => handleChange(e, 'admission')} /></label>
              <h2>Upload</h2>
              <label>Aadhar<input type="file" name="aadharFile" onChange={e => handleFileChange(e)} /></label>
              <label>Photo<input type="file" name="studentPhotoPath" onChange={e => handleFileChange(e, 'admission')} /></label>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
