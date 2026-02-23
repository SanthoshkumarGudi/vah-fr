import { useState } from "react";
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
import "../../src/dashboard.css";
import { PieChart as PieIcon, BarChart3, Donut, Table, Download } from "lucide-react";

const data = [
  { name: "Andhra Pradesh", value: 61862, colour: "#87c257" },
  { name: "Karnataka", value: 8648, colour: "#6ed9e0" },
];

const data2 = [
  { name: "Bengaluru", value: 1000, colour: "#d49954" },
  { name: "Mysore", value: 2500, colour: "#70bfc5" },
  { name: "Haasan", value: 800, colour: "#7d70c5" },
];

// const chartOptions = ["pie", "bar", "donut", "table"];
const chartOptions = [
  { type: "pie", icon: PieIcon },
  { type: "bar", icon: BarChart3 },
  { type: "donut", icon: Donut },
  { type: "table", icon: Table },
];

const COLORS = ["#E3B977", "#A9C06F"];
const COLORS2 = ["#d49954", "#70bfc5", "#7d70c5"];

export const Dashboard = () => {
  const [chartType, setChartType] = useState("pie");
  const [districtChartType, setDistrictChartType] = useState("pie");


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

  return (
    <div className="chartWrapper">
      <div className="card">
        {/* Top Bar */}
        <div className="top-bar">
          <select>
            <option>State</option>
          </select>

          <div className="actions">
            <div className="chart-switch">
              {chartOptions
                .filter((option) => option.type !== chartType)
                .map((option,index) => {
                  const Icon = option.icon;
                  return (
                    <button
                      key={option.type}
                      onClick={() => setChartType(option.type)}
                      className="chart-btn"
                    >
                      <Icon size={15}/>
                    </button>
                  );
                })}

              {/* Always render active at last */}
              {(() => {
                const activeOption = chartOptions.find(
                  (o) => o.type === chartType,
                );
                if (!activeOption) return null;
                const ActiveIcon = activeOption.icon;
                return (
                  <button className="chart-btn active">
                    <ActiveIcon size={15} />
                  </button>
                );
              })()}
            </div>

            {/* <button><Download/></button> */}
          </div>
        </div>

        {/* Chart Area */}
        <div className="content">
          <div className="chart">
            {chartType === "pie" && (
              <ResponsiveContainer width="50%" height={300}>
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
          </div>
        </div>

        <div className="chart">
          {chartType === "bar" && (
            <ResponsiveContainer width="50%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="6 6"></CartesianGrid>
                <XAxis dataKey="name" />
                <YAxis />

                <Bar data={data} dataKey="value" shape={CustomBar}></Bar>
                <Tooltip />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
        <div className="chart">
          {chartType === "donut" && (
            <ResponsiveContainer width="50%" height={300}>
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
        </div>

        <div>
          <div className="content">
            <div className="chart">
              {chartType === "table" && (
                <table>
                  <thead>
                    <tr className="trow">
                      <td>Sl.</td>
                      <td>Name</td>
                      <td>Value</td>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((entry, index) => {
                      return (
                        <tr key={index} className="trow">
                          <td>{index + 1}</td>
                          <td>{entry.name}</td>
                          <td>{entry.value}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>

        {/* Legend below chart */}
        <div className="legend">
          {data.map((entry, index) => (
            <div key={index} className="legend-item">
              <div className="legend-left">
                <span className="dot" style={{ background: COLORS[index] }} />
                {entry.name}
              </div>

              <span className="legend-value">
                {entry.value.toLocaleString("en-IN")}
              </span>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button>{"<"}</button>
          <span className="page">1</span>
          <button>{">"}</button>
        </div>
      </div>

      {/* District Chart  */}
      <div className="card">
        {/* Top Bar */}
        <div className="top-bar">
          <select>
            <option>District</option>
          </select>

          <div className="actions">
            {/* <button onClick={() => setDistrictChartType("pie")}>Pie</button>
            <button onClick={() => setDistrictChartType("bar")}>Bar</button>
            <button onClick={() => setDistrictChartType("donut")}>Donut</button>
            <button onClick={() => setDistrictChartType("table")}>Table</button>
            <button>⬇</button> */}
            {/* <div className="chart-switch">
              {chartOptions
                .filter((type) => type !== chartType)
                .map((type) => (
                  <button
                    key={type}
                    onClick={() => setChartType(type)}
                    className="chart-btn"
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}

              <button className="chart-btn active">
                {chartType.charAt(0).toUpperCase() + chartType.slice(1)}
              </button>
            </div> */}
            <button>⬇</button>
          </div>
        </div>

        {/* Chart Area */}
        <div className="content">
          <div className="chart">
            {districtChartType === "pie" && (
              <ResponsiveContainer width="50%" height={300}>
                <PieChart>
                  <Pie
                    data={data2}
                    dataKey="value"
                    outerRadius={100}
                    shape={CustomSlice}
                  />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        <div className="chart">
          {districtChartType === "bar" && (
            <ResponsiveContainer width="50%" height={300}>
              <BarChart data={data2}>
                <CartesianGrid strokeDasharray="6 6"></CartesianGrid>
                <XAxis dataKey="name" />
                <YAxis />

                <Bar data={data2} dataKey="value" shape={CustomBar}></Bar>
                <Tooltip />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
        <div className="chart">
          {districtChartType === "donut" && (
            <ResponsiveContainer width="50%" height={300}>
              <PieChart>
                <Pie
                  data={data2}
                  dataKey="value"
                  outerRadius={100}
                  innerRadius={60}
                  shape={CustomSlice}
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>

        <div>
          <div className="content">
            <div className="chart">
              {districtChartType === "table" && (
                <table>
                  <thead>
                    <tr className="trow">
                      <td>Sl.</td>
                      <td>Name</td>
                      <td>Value</td>
                    </tr>
                  </thead>
                  <tbody>
                    {data2.map((entry, index) => {
                      return (
                        <tr key={index} className="trow">
                          <td>{index + 1}</td>
                          <td>{entry.name}</td>
                          <td>{entry.value}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>

        {/* Legend below chart */}
        <div className="legend">
          {data2.map((entry, index) => (
            <div key={index} className="legend-item">
              <div className="legend-left">
                <span className="dot" style={{ background: COLORS2[index] }} />
                {entry.name}
              </div>

              <span className="legend-value">
                {entry.value.toLocaleString("en-IN")}
              </span>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button>{"<"}</button>
          <span className="page">1</span>
          <button>{">"}</button>
        </div>
      </div>
    </div>
  );
};
