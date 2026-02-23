import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Sector,
} from "recharts";

import {
  PieChart as PieIcon,
  BarChart3 as BarIcon,
  Table as TableIcon,
  Donut as DonutIcon
} from "lucide-react";

const chartOptions = [
  { type: "pie", icon: PieIcon },
  { type: "bar", icon: BarIcon },
  { type: "donut", icon: DonutIcon },
  { type: "table", icon: TableIcon },
];

const COLORS = ["#E3B977", "#A9C06F"];
const COLORS2 = ["#d49954", "#70bfc5", "#7d70c5"];

const CustomSlice = (props) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, colour } =
    props;

  return (
    <Sector
      cx={cx}
      cy={cy}
      innerRadius={innerRadius}
      outerRadius={outerRadius}
      startAngle={startAngle}
      endAngle={endAngle}
      fill={colour}
    />
  );
};

const CustomBar = (props) => {
  const { x, y, width, height, colour } = props;
  return <rect x={x} y={y} width={width} height={height} fill={colour} />;
};

export const ChartCard = ({ title, data, chartType, setChartType }) => {
  return (
    <div className="card">
      {/* Top Bar */}
      <div className="top-bar">
        <select>
          <option>{title}</option>
        </select>
        <div className="chart-switch">
          {chartOptions
            .filter((option) => option.type !== chartType)
            .map((option) => {
              const Icon = option.icon;
              return (
                <button
                  key={option.type}
                  onClick={() => setChartType(option.type)}
                  className="chart-btn"
                  title={
                    option.type.charAt(0).toUpperCase() + option.type.slice(1)
                  }
                >
                  <Icon size={16} />
                </button>
              );
            })}

          {/* Active always last */}
          {(() => {
            const activeOption = chartOptions.find((o) => o.type === chartType);
            if (!activeOption) return null;
            const ActiveIcon = activeOption.icon;
            return (
              <button className="chart-btn active">
                <ActiveIcon size={16} />
              </button>
            );
          })()}
        </div>
      </div>

      {/* Chart Area */}
      <div className="content">
        {chartType === "pie" && (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                outerRadius={100}
                shape={CustomSlice}
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        )}

        {chartType === "bar" && (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="6 6" />
              <XAxis dataKey="name" />
              <YAxis />
              <Bar dataKey="value" shape={CustomBar} />
              <Tooltip />
            </BarChart>
          </ResponsiveContainer>
        )}

        {chartType === "donut" && (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                outerRadius={100}
                innerRadius={60}
                shape={CustomSlice}
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        )}

        {chartType === "table" && (
          <table>
            <thead>
              <tr>
                <td>Sl.</td>
                <td>Name</td>
                <td>Value</td>
              </tr>
            </thead>
            <tbody>
              {data.map((entry, index) => (
                <tr key={entry.name}>
                  <td>{index + 1}</td>
                  <td>{entry.name}</td>
                  <td>{entry.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div className="legend">
          {data.map((entry, index) => (
            <div key={index} className="legend-item">
              <div className="legend-left">
                {/* <span className="dot" style={{ background: COLORS[index] }} /> */}
                <span
                  className="dot"
                  style={{ backgroundColor: entry.colour }}
                />
                {entry.name}
              </div>
              <span className="legend-value">
                {entry.value.toLocaleString("en-IN")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
