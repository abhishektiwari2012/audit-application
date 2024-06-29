import React from "react";
import { useSelector } from "react-redux";
import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { composedData } from "../../utils";

export default function DashboardComposedChart() {
    const auditData = useSelector((state) => state.audit.auditData);
    const combineData = composedData(auditData);
    
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <ComposedChart
          width={500}
          height={400}
          data={combineData}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="femaleCount" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="numberOfAudit" barSize={20} fill="#413ea0" />      
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
