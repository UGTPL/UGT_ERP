import React, { useEffect } from 'react';
import './PieChart.css'

const PieChart = ({ total, paid }) => {
  const due = total - paid;

  useEffect(() => {
    const canvas = document.getElementById('pieChart');
    const ctx = canvas.getContext('2d');
    const data = [
      { label: 'Paid', value: paid, color: '#4CAF50' }, // Green for Paid
      { label: 'Due', value: due, color: '#F44336' },  // Red for Due
    ];

    const totalValue = paid + due;
    let startAngle = 0;

    data.forEach((slice) => {
      const sliceAngle = (slice.value / totalValue) * 2 * Math.PI;
      ctx.beginPath();
      ctx.moveTo(150, 150); // Center of the pie chart
      ctx.arc(150, 150, 100, startAngle, startAngle + sliceAngle);
      ctx.fillStyle = slice.color;
      ctx.fill();
      startAngle += sliceAngle;
    });
  }, [total, paid, due]);

  return (
    <div className="pie-chart-container">
        <div>
      <h3>Fee Status (Paid vs Due)</h3>
      <canvas id="pieChart" width="300" height="300" ></canvas>
      </div>
      <div className="pie-chart-legend">
        <div className="legend-item">
          <span className="legend-color" style={{ backgroundColor: '#4CAF50' }}></span>
          Paid: ₹{paid}
        </div>
        <div className="legend-item">
          <span className="legend-color" style={{ backgroundColor: '#F44336' }}></span>
          Due: ₹{due}
        </div>
      </div>
    </div>
  );
};

export default PieChart;