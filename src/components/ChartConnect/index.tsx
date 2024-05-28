import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: 1, uv: 20 },
  { name: 2, uv: 40 },
  { name: 3, uv: 10 },
  { name: 4, uv: 50 },
  { name: 5, uv: 30 },
  { name: 6, uv: null },
  { name: 7, uv: 70 },
  { name: 8, uv: 30 },
  { name: 9, uv: null },
  { name: 10, uv: null },
  { name: 11, uv: null },
];

// Componente personalizado para renderizar os ticks do XAxis
function CustomTick({
  x,
  y,
  payload,
}: {
  x: number;
  y: number;
  payload: { value: string };
}) {
  const dataItem = data.find((item) => item.name === Number(payload.value));
  const color = !dataItem || dataItem.uv === null ? "#E9EEF5" : "black";

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="middle" fill={color}>
        {payload.value}
      </text>
    </g>
  );
}

export function ChartConnect() {
  return (
    <div
      style={{
        width: "100%",
        height: 240,
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          title="Line Chart"
          margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="1 1" vertical={false} />
          <YAxis
            domain={[0, 100]}
            axisLine={false}
            tickLine={false}
            tickMargin={15}
          />
          <XAxis
            dataKey="name"
            domain={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
            axisLine={false}
            tickLine={false}
            tickMargin={30}
            height={55}
            tick={(customPicker) => <CustomTick {...customPicker} />}
          />
          <Tooltip />
          <Line
            // connectNulls
            type="linear"
            dataKey="uv"
            stroke="#0E6EFD"
            fill="#0E6EFD"
            dot={{ r: 7 }}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
