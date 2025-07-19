'use client';

import React, { useState, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
import Circle from '@/components/Circle';
import Lineal from '@/components/Lineal';
import '@/styles/DashboardPage.css';
import Image from 'next/image';
import Link from 'next/link';

Chart.register(...registerables);

const DashboardPage: React.FC = () => {
  const [chartData, setChartData] = useState<any[]>([]);
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    completed: 0,
  });

  useEffect(() => {
    setChartData([
      {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Errors',
            data: [12, 19, 3, 5, 2],
            borderColor: '#EF3708',
            backgroundColor: 'rgba(239, 55, 8, 0.2)',
          },
        ],
      },
    ]);

    setStats({
      total: 123,
      active: 45,
      completed: 78,
    });
  }, []);

  return (
    <main className="content">
      <h1>Dashboard</h1>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Tests:</h3>
          <p>{stats.total}</p>
        </div>
        <div className="stat-card">
          <h3>Active Tests:</h3>
          <p>{stats.active}</p>
        </div>
        <div className="stat-card">
          <h3>Completed Tests:</h3>
          <p>{stats.completed}</p>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <Lineal chartData={chartData} currentChartIndex={0} />
        </div>
        <div className="chart-card">
          <Circle
            processData={{
              labels: ['Active', 'Completed', 'Pending'],
              datasets: [
                {
                  data: [
                    stats.active,
                    stats.completed,
                    stats.total - stats.active - stats.completed,
                  ],
                  backgroundColor: ['#EF3708', '#4CAF50', '#FFC107'],
                  borderWidth: 1,
                },
              ],
            }}
          />
        </div>
      </div>

      <div className="bottom-menu">
        <button className="bottom-btn">
          <Image src="/images/Element Plus.png" alt="Create new" width={24} height={24} />
          <span>Create new</span>
        </button>
        <button className="bottom-btn">
          <Image src="/images/Audio Settings 01.png" alt="Bots Active" width={24} height={24} />
          <span>Bots Active</span>
        </button>
        <Link href="/dashboard" className="bottom-btn">
          <Image src="/images/Next.png" alt="Dashboard" width={24} height={24} />
          <span>Dashboard</span>
        </Link>
        <Link href="/home" className="bottom-btn">
          <Image src="/images/Icon.png" alt="Home Page" width={24} height={24} />
          <span>Home Page</span>
        </Link>
      </div>
    </main>
  );
};

export default DashboardPage;
