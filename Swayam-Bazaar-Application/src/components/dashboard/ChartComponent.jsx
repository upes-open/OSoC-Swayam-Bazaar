import React, { PureComponent } from 'react';
import { PieChart, Pie, Rectangle, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'T-Shirt', valueA: 500},
  { name: 'Shirts', valueA: 300},
  { name: 'Trousers', valueA: 300},
  { name: 'Apples', valueA: 200},
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 1.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

// Sample data for monthly sales
const monthlySalesData = [
  { month: 'Jan', sales: 15000 },
  { month: 'Feb', sales: 35000 },
  { month: 'Mar', sales: 30000 },
  { month: 'Apr', sales: 5000 },
  { month: 'May', sales: 50000 },
  { month: 'Jun', sales: 55000 },
];

// Sample data for new customers by year
const newCustomersData = [
  { month: 'Jan', '2022': 45, '2023': 120 },
  { month: 'Feb', '2022': 110, '2023': 130 },
  { month: 'Mar', '2022': 50, '2023': 140 },
  { month: 'Apr', '2022': 130, '2023': 70 },
  { month: 'May', '2022': 100, '2023': 160 },
  { month: 'Jun', '2022': 150, '2023': 150 },
];

export default class Example extends PureComponent {
  render() {
    return (
      <div className='SALES'>
        <div className='TotalSales'>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="valueA"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <h2>Total Sales</h2>
        </div>
        <div className='SalesInEachSector'>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="valueA" fill="#8884d8" />
              <Bar dataKey="valueB" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
          <h2>Sales Comparison</h2>
        </div>
      </div>
    );
  }
}
