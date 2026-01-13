"use client";

import {
  RadialBarChart,
  RadialBar,
  Legend,
  Tooltip,
} from "recharts";

const data = [
  { name: "Food", value: 400, fill: "#8884d8" },
  { name: "Travel", value: 300, fill: "#82ca9d" },
  { name: "Shopping", value: 200, fill: "#ffc658" },
];

export default function RadialBarChartExample() {
  return (
    <RadialBarChart
      width={400}
      height={300}
      cx="50%"
      cy="50%"
      innerRadius="30%"
      outerRadius="90%"
      barSize={15}
      data={data}
    >
      <RadialBar dataKey="value" />
      <Legend />
      <Tooltip />
    </RadialBarChart>
  );
}
