"use client";

import { useState } from "react";
import { salesData, SalesData } from "../../data/salesData";
import { SalesChart } from "../../components/organisms/SalesChart";
import { FilterInput } from "../../components/molecules/FilterInput";

export default function Dashboard() {
  const [threshold, setThreshold] = useState("");
  const [filteredData, setFilteredData] = useState<SalesData[]>(salesData);
  const [chartType, setChartType] = useState<"bar" | "line" | "pie">("bar");

  const applyFilter = () => {
    const numThreshold = Number(threshold);
    if (!isNaN(numThreshold)) {
      setFilteredData(salesData.filter((d) => d.sales >= numThreshold));
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Sales Dashboard</h1>

      <div className="flex gap-2 mb-4">
        <FilterInput threshold={threshold} setThreshold={setThreshold} onApply={applyFilter} />
        <button className="px-4 py-2 bg-green-600 text-white rounded" onClick={() => setChartType("bar")}>Bar</button>
        <button className="px-4 py-2 bg-green-600 text-white rounded" onClick={() => setChartType("line")}>Line</button>
        <button className="px-4 py-2 bg-green-600 text-white rounded" onClick={() => setChartType("pie")}>Pie</button>
      </div>

      <SalesChart data={filteredData} chartType={chartType} />
    </div>
  );
}

