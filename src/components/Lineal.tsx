import React from 'react';
import { Line } from 'react-chartjs-2';

interface LinealProps {
  chartData: any[];
  currentChartIndex: number;
}

const Lineal: React.FC<LinealProps> = ({ chartData, currentChartIndex }) => (
  <div className="chart-container">
    {chartData.length > 0 && (
      <Line
        data={chartData[currentChartIndex]}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: 'top',
              labels: {
                color: '#F2F2F2'
              }
            }
          },
          scales: {
            y: {
              grid: {
                color: '#444'
              },
              ticks: {
                color: '#F2F2F2'
              }
            },
            x: {
              grid: {
                color: '#444'
              },
              ticks: {
                color: '#F2F2F2'
              }
            }
          }
        }}
      />
    )}
  </div>
);

export default Lineal;