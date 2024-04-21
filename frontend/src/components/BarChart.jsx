import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ReferenceLine } from "recharts";

const BarChartComponent = () => {
  const data = [
    { name: "Sun", uv: 400 },
    { name: "Mon", uv: 160 },
    { name: "Tue", uv: 400 },
    { name: "Wed", uv: 160 },
    { name: "Thu", uv: 160 },
    { name: "Fri", uv: 700 },
    { name: "Sat", uv: 400 },
    { name: "Sun", uv: 450 },
    { name: "Mon", uv: 450 },
  ];

  const [chartWidth, setChartWidth] = useState(200);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setChartWidth(600);
      } else if (window.innerWidth >= 640) {
        setChartWidth(400);
      } else {
        setChartWidth(300);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="mt-4 flex flex-col space-y-4 ml-0 sm:ml-10 p-6 sm:pr-12 pr-0 rounded-xl"
      style={{
        boxShadow:
          "1px 1px 1px 1px rgba(0, 0, 0, 0.1), -1px -1px 1px 1px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div>
        <h1 className="text-2xl font-bold mb-2">Revenue Growth</h1>
        <p className="text-sm font-semibold text-gray-500 mb-4">
          On the week on website and compare with e-commerce
        </p>
      </div>
      <div className="bar-chart-container">
        <BarChart width={chartWidth} height={250} data={data}>
          <XAxis
            dataKey="name"
            tick={{ fill: "gray", fontSize: 18, fontWeight: "semibold" }}
          />
          <YAxis
            ticks={[0, 200, 500, 1000]}
            tick={{ fill: "gray", fontSize: 18, fontWeight: "semibold" }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `₹${value}`}
          />
          <Tooltip />
          <ReferenceLine y={1000} stroke="green" strokeDasharray="8 8" />
          <ReferenceLine y={500} stroke="green" strokeDasharray="8 8" />
          <ReferenceLine y={200} stroke="green" strokeDasharray="8 8" />
          <ReferenceLine y={0} stroke="green" strokeDasharray="8 8" />
          <Bar
            dataKey="uv"
            fill="#FEECD6"
            stackId="stack"
            barSize={30} // Adjust the bar size as needed
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </div>
    </div>
  );
};

export default BarChartComponent;
