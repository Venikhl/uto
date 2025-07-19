'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '@/styles/HomePage.css'; // убедись, что файл существует

const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState(true);
  const [brokenFilter, setBrokenFilter] = useState(true);
  const [doneFilter, setDoneFilter] = useState(false);

  const results = [
    { id: 12345, description: 'LAB SP', tester: 'Topenev A.', status: 'Active', endingPlan: '18.11.2024' },
    { id: 12399, description: 'Marks in RB', tester: 'Kisel K.', status: 'Broken', endingPlan: '30.10.2024' },
    { id: 24555, description: 'Return of VK via GP', tester: 'Kotelevskay M.', status: 'Active', endingPlan: '22.11.2024' },
    { id: 23511, description: 'Test 1', tester: 'Kotelevskay M.', status: 'Active', endingPlan: '31.12.9999' },
    { id: 72345, description: 'Test 2', tester: 'Kotelevskay M.', status: 'Active', endingPlan: '31.12.9999' },
    { id: 24566, description: 'Test 3', tester: 'Kotelevskay M.', status: 'Active', endingPlan: '31.12.9999' },
    { id: 12923, description: 'Test 4', tester: 'Kotelevskay M.', status: 'Active', endingPlan: '31.12.9999' },
  ];

  const filteredResults = results.filter((result) => {
    const matchesQuery =
      searchQuery === '' ||
      result.id.toString().includes(searchQuery) ||
      result.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      (activeFilter && result.status === 'Active') ||
      (brokenFilter && result.status === 'Broken') ||
      (doneFilter && result.status === 'Done');

    return matchesQuery && matchesStatus;
  });

  return (
    <main className="content">
      <h1>Welcome to U.T.A.</h1>

      <section className="content-section">
        <h2>Ultimate Test Application for running integration and regression tests</h2>

        <div className="search-filter-container">
          <div className="search-bar">
            <input
              type="text"
              placeholder="*23*"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filters">
            <label>
              <input
                type="checkbox"
                checked={activeFilter}
                onChange={() => setActiveFilter(!activeFilter)}
              />
              Active
            </label>
            <label>
              <input
                type="checkbox"
                checked={brokenFilter}
                onChange={() => setBrokenFilter(!brokenFilter)}
              />
              Broken
            </label>
            <label>
              <input
                type="checkbox"
                checked={doneFilter}
                onChange={() => setDoneFilter(!doneFilter)}
              />
              Done
            </label>
          </div>
        </div>

        <div className="table-container">
          <h2>Results:</h2>
          <table className="results-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Description</th>
                <th>Tester</th>
                <th>Status</th>
                <th>Ending plan</th>
              </tr>
            </thead>
            <tbody>
              {filteredResults.map((result) => (
                <tr key={result.id}>
                  <td>{result.id}</td>
                  <td>{result.description}</td>
                  <td>{result.tester}</td>
                  <td className={`status-${result.status.toLowerCase()}`}>{result.status}</td>
                  <td>{result.endingPlan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

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

export default HomePage;
