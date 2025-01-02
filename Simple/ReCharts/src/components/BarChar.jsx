import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const salesData = [
  {
    name: "January",
    product1: 4000,
    product2: 2400,
  },
  {
    name: "Febuary",
    product1: 3000,
    product2: 1398,
  },
  {
    name: "March",
    product1: 2000,
    product2: 9800,
  },
  {
    name: "April",
    product1: 2780,
    product2: 3908,
  },
  {
    name: "June",
    product1: 1890,
    product2: 4800,
  },
  {
    name: "July",
    product1: 2390,
    product2: 3800,
  },
  {
    name: "August",
    product1: 3490,
    product2: 4300,
  },
];

const BarChartComponent = () => {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Product Sales Area Chart</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={salesData}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3 " />
          <Bar type="monotone" dataKey="product1" stroke="#8884d8" fill="#8884d8" />
          <Bar type="monotone" dataKey="product2" stroke="#82ca9d" fill="#82ca9d" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip content={CustomTooltip} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
const CustomTooltip = ({ active, payload, label }) => {

  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm text-blue-400">
          Product 1:
          <span className="ml-2">$ {payload[0].value}</span>
        </p>
        <p className="text-sm text-blue-400">
          Product 2:
          <span>$ {payload[1].value}
          </span>
        </p>
      </div>
    )
  }
}
export default BarChartComponent;
