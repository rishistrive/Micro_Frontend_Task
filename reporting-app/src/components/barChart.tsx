import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface BarChartProps<T> {
  data: T[];
  heading: string;
  xKey: keyof T;
  barKeys: { key: keyof T; color: string; name?: string }[];
}

const ReusableBarChart = <T extends Record<string, any>>({
  data,
  heading,
  xKey,
  barKeys,
}: BarChartProps<T>) => {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <h2 style={{ textAlign: "center", marginBottom: 20 }}>{heading}</h2>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={String(xKey)} />
          <YAxis />
          <Tooltip />
          <Legend />
          {barKeys.map((bar) => (
            <Bar
              key={String(bar.key)}
              dataKey={String(bar.key)}
              fill={bar.color}
              name={bar.name || String(bar.key)}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReusableBarChart;
