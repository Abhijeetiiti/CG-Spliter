"use client";
import { PieChart, Pie, Cell } from "recharts";
import type { PieLabelRenderProps } from "recharts";

type ChartData = {
  name: string;
  value: number;
};

const data: ChartData[] = [
  { name: "Abhay", value: 400 },
  { name: "Abhijeet", value: 300 },
  { name: "Kedar", value: 300 },
  { name: "Veer", value: 200 },
  { name: "Abhi", value: 278 },
  { name: "Abhimanyu", value: 190 },
];

const COLORS: string[] = [
  "#6366f1",
  "#22c55e",
  "#f97316",
  "#e11d48",
  "#14b8a6",
  "#facc15",
];

const renderLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  name,
  value,
}: PieLabelRenderProps & ChartData) => {
  const RADIAN = Math.PI / 180;
  const radius =
    innerRadius! + (outerRadius! - innerRadius!) * 0.6;

  const x = cx! + radius * Math.cos(-midAngle! * RADIAN);
  const y = cy! + radius * Math.sin(-midAngle! * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      style={{ fontSize: 12, fontWeight: 600 }}
    >
      <tspan x={x} dy="-0.2em">{name}</tspan>
      <tspan x={x} dy="1.2em">₹{value}</tspan>
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
          <Cell
            key={index}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Pie>
    </PieChart>
  );
}
