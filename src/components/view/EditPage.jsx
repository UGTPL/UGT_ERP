import React, { useState } from 'react'

const EditPage = ({data}) => {
    const [form, setForm] = useState(data);
    const onChange = e => setForm({...form,[e.target.name]: e.target.value});
    return (
      <form className="content-box">
        <h3>Edit Student</h3>
        {/* {['admissionType','name','fatherName','classSection'].map(key => (
          <div key={key} className="form-field">
            <label>{key.replace(/([A-Z])/g,' $1')}</label>
            <input name={key} value={form[key]} onChange={onChange} />
          </div>
        ))} */}
        <button type="submit" className="form-btn">Save</button>
      </form>
    );
  }

export default EditPage