import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, BarChart, Bar } from 'recharts';

const data = [
  { name: 'Item A', valueA: 500, valueB: 200 },
  { name: 'Item B', valueA: 300, valueB: 200 },
  { name: 'Item C', valueA: 300, valueB: 200 },
  { name: 'Item D', valueA: 200, valueB: 100 },
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
          <PieChart
            width={500} height={300} onMouseEnter={this.onPieEnter}
          >
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
          <h2>Total Sales</h2>
        </div>
        <div className='SalesInEachSector' style={{ marginTop: '40px', marginLeft: '80px' }}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="valueA" fill="#8884d8" />
            <Bar dataKey="valueB" fill="#82ca9d" />
          </BarChart>

          <h2>Sales Comparison</h2>
        </div>
        
        <div className='MonthlySales' style={{ marginTop: '80px' }}>
          <h2>Monthly Sales</h2>
          <LineChart
            width={500}
            height={300}
            data={monthlySalesData}
            margin={{ top: 5, right: 30, left: 50, bottom: 5 }} // Increased left margin
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" />
          </LineChart>
        </div>

        <div className='NewCustomers' style={{ marginTop: '80px', marginLeft: '50px' }}>
          <h2>New Customers</h2>
          <LineChart
            width={500}
            height={300}
            data={newCustomersData}
            margin={{ top: 5, right: 30, left: 50, bottom: 5 }} // Increased left margin
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="2022" stroke="#8884d8" name="2022" />
<Line type="monotone" dataKey="2023" stroke="#82ca9d" name="2023" />
</LineChart>
</div>
</div>
);
}
}
