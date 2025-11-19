import React from "react";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const recharts = {
  ratings: [
    { name: "1 star", count: 500000 },
    { name: "2 star", count: 620000 },
    { name: "3 star", count: 1100000 },
    { name: "4 star", count: 2400000 },
    { name: "5 star", count: 5200000 },
  ],
};
const Recharts = () => {
  return (
    <div className="w-11/12 mx-auto">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart layout="vertical" data={recharts.ratings}>
          <XAxis type="number" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" barSize={20} fill="#413ea0" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Recharts;
