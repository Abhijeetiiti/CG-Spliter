
"use client";



import { PieChart, Pie, Cell } from "recharts";

const data = [
   { name: "Abhay", value: 400 },
  { name: "Abhijeet", value: 300 },
  { name: "Kedar", value: 300 },
  { name: "Veer", value: 200 },
  { name: "Abhi", value: 278 },
  { name: "Abhimanyu", value: 190 },
];

const COLORS = ["#6366f1", "#22c55e", "#f97316", "#e11d48", "#14b8a6", "#facc15"];

const renderLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, name, value }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      style={{ fontSize: 12, fontWeight: 600 }}
    >
      {name}
      {"\n"}
      ₹{value}
    </text>
  );
};

export default function PieWithLabels() {
  return (
    <PieChart width={350} height={350}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={120}
        dataKey="value"
        label={renderLabel}
      >
        {data.map((_, index) => (
          <Cell key={index} fill={COLORS[index]} />
        ))}
      </Pie>
    </PieChart>
  );
}
