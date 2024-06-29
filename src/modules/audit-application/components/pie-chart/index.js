import React from 'react'
import { useSelector } from 'react-redux';
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";
import { maleFemaleNumber } from '../../utils';
import { PIE_COLORS } from '../../constants';

const DashboardPicChart = () => {
    const auditData = useSelector((state) => state.audit.auditData);
    const data01 = [
        { name: "Male", value: maleFemaleNumber(auditData)?.maleCount },
        { name: "Female", value: maleFemaleNumber(auditData)?.femaleCount },
      ];    
  return (
    <div>
        <PieChart width={800} height={400}>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data01}
                    cx={200}
                    cy={200}
                    outerRadius={140}
                    label
                >
                    {data01.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
        </PieChart>
    </div>
  )
}

export default DashboardPicChart;
