import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LineChart, Line, PieChart, Pie, Cell, Legend
} from "recharts";
import { SalesData } from "../../data/salesData";

type SalesChartProps = {
  data: SalesData[];
  chartType?: "bar" | "line" | "pie";
};

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export const SalesChart = ({ data, chartType = "bar" }: SalesChartProps) => {
  if (chartType === "line") {
    return (
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
        <Line type="monotone" dataKey="sales" stroke="#8884d8" />
      </LineChart>
    );
  }

  if (chartType === "pie") {
    return (
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="sales"
          nameKey="month"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    );
  }

  return (
    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
      <Bar dataKey="sales" fill="#8884d8" />
    </BarChart>
  );
};
