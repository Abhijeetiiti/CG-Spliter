"use client";

import { PieChart, Pie, Cell } from "recharts";
import type { PieLabelRenderProps } from "recharts";

const data = [
  { name: "Abhijeet", value: 400 },
  { name: "Abhay", value: 300 },
  { name: "Kedar", value: 200 },
  { name: "Veer", value: 100 },
  { name: "Abhi", value: 278 },
  { name: "Abhimanyu", value: 189 },
  { name: "Milthlesh", value: 239 },
];

const COLORS = [
  "#6366f1",
  "#22c55e",
  "#f97316",
  "#e11d48",
  "#14b8a6",
  "#facc15",
  "#8b5cf6",
];

const renderLabel = ({ payload }: PieLabelRenderProps) => {
  if (!payload) return null;
  return `${payload.name} ₹${payload.value}`;
};

export default function CustomAnglePie() {
  return (
    <PieChart width={430} height={300}>
      <Pie
        data={data}
        dataKey="value"
        cx="50%"
        cy="50%"
        innerRadius={70}
        outerRadius={100}
        startAngle={360}
        endAngle={0}
        label={renderLabel}
      >
        {data.map((_, i) => (
          <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
