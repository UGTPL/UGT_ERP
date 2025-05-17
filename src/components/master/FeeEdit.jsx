// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./FeeEdit.css";

// const FeeEdit = () => {
//   const [feeHeads, setFeeHeads] = useState([]);
//   const [feeData, setFeeData] = useState([]);
//   const [logs, setLogs] = useState([]);
//   const [classname, setClassname] = useState("");
//   const [status, setStatus] = useState('');

//   const months = [
//     "APR",
//     "MAY",
//     "JUN",
//     "JUL",
//     "AUG",
//     "SEP",
//     "OCT",
//     "NOV",
//     "DEC",
//     "JAN",
//     "FEB",
//     "MAR",
//   ];

//   useEffect(() => {
//     const fetchFeeHeads = async () => {
//       try {
//         const res = await axios.get("http://localhost:8081/getAllFeeheads");
//         setFeeHeads(res.data);
//         setFeeData(
//           res.data.map((head) => ({
//             feeHeadId: head.id,
//             method: "",
//             monthlyValues: months.reduce((acc, m) => ({ ...acc, [m]: "" }), {}),
//           }))
//         );
//       } catch (err) {
//         console.error("Error fetching fee heads", err);
//       }
//     };
//     fetchFeeHeads();
//   }, []);

//   useEffect(() => {
//     const fetchLogs = async () => {
//       if (!classname || status === "-") return;
//       try {
//         const res = await axios.get("/api/fees/logs", {
//           params: { classname, status },
//         });
//         setLogs(res.data);
//       } catch (err) {
//         console.error("Error fetching logs", err);
//       }
//     };
//     fetchLogs();
//   }, [classname, status]);

//   // Handle monthly value change
//   const handleInputChange = (index, month, value) => {
//     const updatedData = [...feeData];
//     updatedData[index].monthlyValues[month] = parseFloat(value) || "";
//     setFeeData(updatedData);
//   };

//   const handleMethodChange = (index, method) => {
//     const updatedData = [...feeData];
//     updatedData[index].method = method;
//     setFeeData(updatedData);
    
//   };

//   const getTotal = (monthlyValues) =>
//     Object.values(monthlyValues).reduce(
//       (acc, val) => acc + Number(val || 0),
//       0
//     );

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const payload = {
//         classname,
//         status,
//         feeData,
//       };
//       console.log(payload)
//     //   await axios.post("/api/fees/submit", payload);
//       alert("Fee data submitted successfully.");
//     } catch (err) {
//       console.error("Error submitting fee data", err);
//     }
//   };

//   return (
//     <div className="fee-edit-container">
//       <form className="fee-edit-form" onSubmit={handleSubmit}>
//         <div className="fee-edit-header">Edit Fee Details</div>
//         <hr />

//         <div className="fee-edit-filters">
//           <label htmlFor="class">Class</label>
//           <select
//             id="class"
//             name="class"
//             value={classname}
//             onChange={(e) => setClassname(e.target.value)}
//           >
//             <option>-</option>
//             <option>I</option>
//             <option>II</option>
//             <option>III</option>
//           </select>

//           <label htmlFor="oldnew">OLD / NEW</label>
//           <select
//             id="oldnew"
//             name="oldnew"
//             value={status}
//             onChange={(e) => setStatus(e.target.value)}
//           >
//             <option>-</option>
//             <option>OLD</option>
//             <option>NEW</option>
//           </select>
//           {(classname !== "" && classname !== "-" && status !== "" && status !== "-")?"":<label>Select Class & Status</label>}
//           {/* <button type="submit" className="fee-edit-btn-filter">
//             Submit
//           </button> */}
//         </div>
//         {(classname !== "" && classname !== "-" && status !== "" && status !== "-" )? (
//           <>
//             <div className="fee-edit-subtitle">
//               Update Fee Information For Class {classname} - {status}
//             </div>

//             <div className="fee-table-wrapper">
//               {feeData.length > 0 ? (
//                 <table className="fee-structure-table">
//                   <thead>
//                     <tr>
//                       <th className="feetype-th">Fee Type \ Month</th>
//                       <th className="method-th">Method</th>
//                       {months.map((month) => (
//                         <th key={month}>{month}</th>
//                       ))}
//                       <th className="total-th">TOTAL</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {feeHeads.map((head, index) => (
//                       <tr key={head.id}>
//                         <td>{head.feeHead}</td>
//                         <td>
//                           <select
//                             value={feeData[index].method}
//                             onChange={(e) =>
//                               handleMethodChange(index, e.target.value)
//                             }
//                           >
//                             <option>-Please Select-</option>
//                             <option>YEARLY</option>
//                             <option>HALF-YEARLY</option>
//                             <option>QUARTERLY</option>
//                             <option>MONTHLY</option>
//                           </select>
//                         </td>
//                         {months.map((month) => (
//                           <td key={month}>
//                             <input
//                               type="number"
//                               value={feeData[index].monthlyValues[month]}
//                               onChange={(e) =>
//                                 handleInputChange(index, month, e.target.value)
//                               }
//                             />
//                           </td>
//                         ))}
//                         <td className="text-right">
//                           {getTotal(feeData[index].monthlyValues)}
//                         </td>
//                       </tr>
//                     ))}
//                     <tr className="summary-row">
//                       <td colSpan={months.length + 2} className="total-label">
//                         TOTAL
//                       </td>
//                       <td className="total-value">
//                         {feeData.reduce(
//                           (sum, f) => sum + getTotal(f.monthlyValues),
//                           0
//                         )}
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               ) : (
//                 <div className="no-data">No data available</div>
//               )}
//             </div>

//             <div className="fee-edit-actions">
//               <button type="submit" className="fee-edit-btn-update">
//                 Update Fee
//               </button>
//             </div>
//           </>
//         ) : (
//           <div></div>
//         )}
//       </form>

//       <div className="fee-edit-activity-log">
//         <div className="log-header">Activity Log</div>
//         <div className="activity-log-wrapper">
//           <table className="activity-log-table">
//             <thead>
//               <tr>
//                 <th>SN.</th>
//                 <th>Message</th>
//                 <th>Updated By</th>
//                 <th>Updated On</th>
//               </tr>
//             </thead>
//             <tbody>
//               {logs.length > 0 ? (
//                 logs.map((log, index) => (
//                   <tr key={log.id}>
//                     <td>{index + 1}</td>
//                     <td>{log.message}</td>
//                     <td>{log.updatedBy}</td>
//                     <td>{new Date(log.updatedOn).toLocaleString()}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan={4} style={{ textAlign: "center" }}>
//                     No activity yet
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeeEdit;


import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FeeEdit.css";

const FeeEdit = () => {
  const [feeHeads, setFeeHeads] = useState([]);
  const [originalData, setOriginalData] = useState([]); // store backend fetched data
  const [feeData, setFeeData] = useState([]);
  const [logs, setLogs] = useState([]);
  const [className, setClassName] = useState("");
  const [admissionType, setAdmissionType] = useState("");

  const months = ["APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC", "JAN", "FEB", "MAR"];

  // Fetch fee heads on mount
  useEffect(() => {
    const fetchFeeHeads = async () => {
      try {
        const res = await axios.get("http://localhost:8081/getAllFeeheads");
        console.log(res.data)
        setFeeHeads(res.data);
      } catch (err) {
        console.error("Error fetching fee heads", err);
      }
    };
    fetchFeeHeads();
  }, []);

  // Fetch existing fee structure and logs
  useEffect(() => {
    const fetchData = async () => {
      if (!className || admissionType === "-") return;

      try {
        const feeRes = await axios.get("http://localhost:8081/structure", {
          params: { className, admissionType }
        });
        console.log(feeRes.data)
        const dataMap = {};
        feeRes.data.forEach(item => {
          dataMap[item.feeHead.id] = item;
        });

        const mergedData = feeHeads.map((head) => {
          const existing = dataMap[head.id];
          return {
            feeHeadId: head.id,
            method: existing?.method || "",
            monthlyValues: months.reduce((acc, month) => {
              acc[month] = existing?.[month.toLowerCase()] ?? "";
              return acc;
            }, {}),
            id: existing?.id || null,
          };
        });

        setOriginalData(mergedData);
        setFeeData(JSON.parse(JSON.stringify(mergedData))); // Deep copy
      } catch (err) {
        console.error("Error fetching fee structure", err);
      }
    };

    const fetchLogs = async () => {
      if (!className || admissionType === "-") return;
      try {
        const res = await axios.get("/api/fees/logs", {
          params: { className, admissionType },
        });
        setLogs(res.data);
      } catch (err) {
        console.error("Error fetching logs", err);
      }
    };

    fetchData();
    fetchLogs();
  }, [className, admissionType, feeHeads]);

  const handleInputChange = (index, month, value) => {
    const updatedData = [...feeData];
    updatedData[index].monthlyValues[month] = parseFloat(value) || "";
    setFeeData(updatedData);
  };

  const handleMethodChange = (index, method) => {
    const updatedData = [...feeData];
    updatedData[index].method = method;
    setFeeData(updatedData);
  };

  const getTotal = (monthlyValues) =>
    Object.values(monthlyValues).reduce((acc, val) => acc + Number(val || 0), 0);

  const isChanged = (original, current) => {
    if (original.method !== current.method) return true;
    return months.some(month => (original.monthlyValues[month] || 0) !== (current.monthlyValues[month] || 0));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updated = feeData.filter((item, index) =>
      isChanged(originalData[index], item)
    );

    if (updated.length === 0) {
      alert("No changes detected.");
      return;
    }

    const payload = {
      className,
      admissionType,
      feeData: updated,
    };

    try {
        console.log(payload)
    //   await axios.post("/api/fees/submit", payload);
      alert("Fee data submitted successfully.");
    } catch (err) {
      console.error("Error submitting fee data", err);
    }
  };

  return (
    <div className="fee-edit-container">
      <form className="fee-edit-form" onSubmit={handleSubmit}>
        <div className="fee-edit-header">Edit Fee Details</div>
        <hr />

        <div className="fee-edit-filters">
          <label htmlFor="class">Class</label>
          <select id="class" value={className} onChange={(e) => setClassName(e.target.value)}>
            <option>-</option>
            <option>I</option>
            <option>II</option>
            <option>III</option>
          </select>

          <label htmlFor="oldnew">OLD / NEW</label>
          <select id="oldnew" value={admissionType} onChange={(e) => setAdmissionType(e.target.value)}>
            <option>-</option>
            <option>OLD</option>
            <option>NEW</option>
          </select>

          {(className && admissionType && className !== "-" && admissionType !== "-") ? null : (
            <label>Select Class & Status</label>
          )}
        </div>

        {(className && admissionType && className !== "-" && admissionType !== "-") ? (
          <>
            <div className="fee-edit-subtitle">Update Fee Information For Class {className} - {admissionType}</div>

            <div className="fee-table-wrapper">
              {feeData.length > 0 ? (
                <table className="fee-structure-table">
                  <thead>
                    <tr>
                      <th>Fee Type \ Month</th>
                      <th>Method</th>
                      {months.map((m) => <th key={m}>{m}</th>)}
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeHeads.map((head, index) => (
                      <tr key={head.id}>
                        <td>{head.feeHead}</td>
                        <td>
                          <select
                            value={feeData[index].method}
                            onChange={(e) => handleMethodChange(index, e.target.value)}
                          >
                            <option>-Please Select-</option>
                            <option>YEARLY</option>
                            <option>HALF-YEARLY</option>
                            <option>QUARTERLY</option>
                            <option>MONTHLY</option>
                          </select>
                        </td>
                        {months.map((month) => (
                          <td key={month}>
                            <input
                              type="number"
                              value={feeData[index].monthlyValues[month]}
                              onChange={(e) => handleInputChange(index, month, e.target.value)}
                            />
                          </td>
                        ))}
                        <td>{getTotal(feeData[index].monthlyValues)}</td>
                      </tr>
                    ))}
                    <tr className="summary-row">
                      <td colSpan={months.length + 2}>TOTAL</td>
                      <td>
                        {feeData.reduce(
                          (sum, item) => sum + getTotal(item.monthlyValues),
                          0
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <div>No data available</div>
              )}
            </div>

            <div className="fee-edit-actions">
              <button type="submit">Update Fee</button>
            </div>
          </>
        ) : null}
      </form>

      <div className="fee-edit-activity-log">
        <div className="log-header">Activity Log</div>
        <div className="activity-log-wrapper">
          <table className="activity-log-table">
            <thead>
              <tr>
                <th>SN.</th>
                <th>Message</th>
                <th>Updated By</th>
                <th>Updated On</th>
              </tr>
            </thead>
            <tbody>
              {logs.length > 0 ? (
                logs.map((log, index) => (
                  <tr key={log.id}>
                    <td>{index + 1}</td>
                    <td>{log.message}</td>
                    <td>{log.updatedBy}</td>
                    <td>{new Date(log.updatedOn).toLocaleString()}</td>
                  </tr>
                ))
              ) : (
                <tr><td colSpan={4} style={{ textAlign: "center" }}>No activity yet</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FeeEdit;
