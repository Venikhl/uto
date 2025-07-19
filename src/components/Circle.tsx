import React from 'react';
import { Doughnut } from 'react-chartjs-2';

interface CircleProps {
  processData: {
    labels: string[];
    datasets: Array<{
      data: number[];
      backgroundColor: string[];
      borderWidth: number;
    }>;
  };
}

const Circle: React.FC<CircleProps> = ({ processData }) => (
  <div className="chart-container">
    <Doughnut
      data={processData}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#F2F2F2',
              font: {
                size: 14
              }
            }
          }
        }
      }}
    />
  </div>
);

export default Circle;