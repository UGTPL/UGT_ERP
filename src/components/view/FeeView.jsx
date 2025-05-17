import React from 'react';
import './FeeView.css';
import PieChart from './PieChart';

const FeeView = () => {
  return (
    <div className='fee-main-container'>
    <div className="fee-container">
    <div className="fee-summary">
      <p>
      <strong>Last Year Dues:</strong><span className="red-text">Rs. 0</span> ||
          <strong>Admission Due:</strong><span className="red-text">Rs. 0</span> ||
          <strong>Tution Due:</strong><span className="red-text">Rs. 0</span> ||
          <strong>Transport Dues:</strong><span className="red-text">Rs. 0</span> ||
          <strong>Hostel Dues:</strong><span className="red-text">Rs. 0</span> ||
          <strong> Total Discounted :</strong> <span className="red-text">Rs. 0</span> ||
          <strong> Total Paid :</strong> <span className="red-text">Rs. 480</span> ||
          <strong> Total Due:</strong> <span className="red-text">Rs. 0</span>
      </p>
      {/* <p className="last-year-dues">Last Year Dues:- 0</p> */}
    </div>

    <div className="fee-structure">
      {/* <h3>School Fee Status</h3>
      <button className="blue-button">See Payable Fee Structure</button> */}
      <button className="red-button">Recalculate Fee</button>

      <table className="fee-table">
        <thead>
          <tr>
            <th>Month</th>
            <th>Apr</th>
            <th>May</th>
            <th>Jun</th>
            <th>Jul</th>
            <th>Aug</th>
            <th>Sep</th>
            <th>Oct</th>
            <th>Nov</th>
            <th>Dec</th>
            <th>Jan</th>
            <th>Feb</th>
            <th>Mar</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Admission Fee</td>
            <td>15000</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td>
            <td>0</td><td>0</td><td>0</td><td>0</td><td>0</td>
            <td className="highlight-green">15000</td>
          </tr>
          <tr>
            <td>Tution Fee</td>
            <td>0</td><td>0</td><td>0</td><td>25000</td><td>0</td><td>0</td><td>25000</td>
            <td>0</td><td>0</td><td>25000</td><td>0</td><td>0</td>
            <td className="highlight-green">75000</td>
          </tr>
          <tr>
            <td>Paid Fee</td>
            <td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td>
            <td>0</td><td>0</td><td>0</td><td>0</td><td>0</td>
            <td className="highlight-yellow">0</td>
          </tr>
          <tr>
            <td>Balance</td>
            <td className="paid">Paid</td><td className="paid">Paid</td><td className="paid">Paid</td>
            <td className="due">25000</td>
            <td className="paid">Paid</td><td className="paid">Paid</td>
            <td className="due">25000</td>
            <td className="paid">Paid</td><td className="paid">Paid</td>
            <td className="due">25000</td>
            <td className="paid">Paid</td><td className="paid">Paid</td>
            <td className="highlight-purple">90000</td>
          </tr>
        </tbody>
      </table>
    </div>
   
  </div>
  <PieChart total={100} paid={25} />
  </div>
  );
};

export default FeeView;