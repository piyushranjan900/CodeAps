import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Analytics.css';

const data = [
    { name: 'Day 1', Visitors: 1200, PageViews: 4000, BounceRate: 30 },
    { name: 'Day 2', Visitors: 1500, PageViews: 4500, BounceRate: 35 },
    { name: 'Day 3', Visitors: 1700, PageViews: 4700, BounceRate: 33 },
    { name: 'Day 4', Visitors: 1300, PageViews: 4200, BounceRate: 28 },
    { name: 'Day 5', Visitors: 1400, PageViews: 4300, BounceRate: 29 },
    { name: 'Day 6', Visitors: 1600, PageViews: 4600, BounceRate: 31 },
    { name: 'Day 7', Visitors: 1550, PageViews: 4500, BounceRate: 32 },
    { name: 'Day 8', Visitors: 1750, PageViews: 4800, BounceRate: 30 },
    { name: 'Day 9', Visitors: 1800, PageViews: 4900, BounceRate: 27 },
    { name: 'Day 10', Visitors: 1700, PageViews: 4700, BounceRate: 28 },
    { name: 'Day 11', Visitors: 1650, PageViews: 4600, BounceRate: 33 },
    { name: 'Day 12', Visitors: 1500, PageViews: 4400, BounceRate: 34 },
    { name: 'Day 13', Visitors: 1450, PageViews: 4300, BounceRate: 36 },
    { name: 'Day 14', Visitors: 1600, PageViews: 4500, BounceRate: 30 },
    { name: 'Day 15', Visitors: 1700, PageViews: 4700, BounceRate: 29 },
    { name: 'Day 16', Visitors: 1750, PageViews: 4900, BounceRate: 27 },
    { name: 'Day 17', Visitors: 1800, PageViews: 5000, BounceRate: 26 },
    { name: 'Day 18', Visitors: 1900, PageViews: 5200, BounceRate: 25 },
    { name: 'Day 19', Visitors: 2000, PageViews: 5400, BounceRate: 24 },
    { name: 'Day 20', Visitors: 2100, PageViews: 5500, BounceRate: 22 },
    { name: 'Day 21', Visitors: 2200, PageViews: 5600, BounceRate: 21 },
    { name: 'Day 22', Visitors: 2300, PageViews: 5700, BounceRate: 23 },
    { name: 'Day 23', Visitors: 2400, PageViews: 5800, BounceRate: 20 },
    { name: 'Day 24', Visitors: 2500, PageViews: 5900, BounceRate: 19 },
    { name: 'Day 25', Visitors: 2600, PageViews: 6000, BounceRate: 18 },
    { name: 'Day 26', Visitors: 2700, PageViews: 6100, BounceRate: 17 },
    { name: 'Day 27', Visitors: 2800, PageViews: 6200, BounceRate: 16 },
    { name: 'Day 28', Visitors: 2900, PageViews: 6300, BounceRate: 15 },
    { name: 'Day 29', Visitors: 3000, PageViews: 6400, BounceRate: 14 },
    { name: 'Day 30', Visitors: 3100, PageViews: 6500, BounceRate: 13 },
  ];
  

const Analytics: React.FC = () => {
  return (
    <div className="analytics-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Analytics Dashboard</h1>
          <p>Track your website performance and user data</p>
        </div>
      </section>

      {/* Analytics Metrics as Graph */}
      <div className="analytics-graphs">
        <h2>Visitors and Page Views Over Time</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Visitors" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="PageViews" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>

        <h2>Bounce Rate Over Time</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="BounceRate" stroke="#ff7300" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analytics;
