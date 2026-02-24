import { useState } from "react";
import { ChartCard } from "./ChartCard";
import "../../src/dashboard.css";

const data = [
  { name: "Andhra Pradesh", value: 61862, colour: "#87c257" },
  { name: "Karnataka", value: 8648, colour: "#6ed9e0" },
];

const data2 = [
  { name: "Bengaluru", value: 1000, colour: "#d49954" },
  { name: "Mysore", value: 2500, colour: "#70bfc5" },
  // { name: "Haasan", value: 800, colour: "#7d70c5" },
];

const data3 = [
  { name: "Bandakunte", value: 6702652, colour: "#d49954" },
  { name: "Bhaktharahalli", value: 4671188, colour: "#9db86b" },
  { name: "Arakere", value: 4109889, colour: "#70bfc5" },
  { name: "Barasidlahalli", value: 3674164, colour: "#d94f63" },
  { name: "Aralahalli", value: 3347370, colour: "#f4a261" },
  { name: "Alpahalli", value: 3285343, colour: "#f1d98c" },
];

const data4 = [
  { name: "Tumakuru", value: 13703857, colour: "#e3b977" },
  { name: "Kunigal", value: 11774486, colour: "#a9c06f" },
  { name: "Chitradurga", value: 8941426, colour: "#70bfc5" },
  { name: "Sira", value: 8734377, colour: "#d94f63" },
  { name: "Shimoga", value: 7505901, colour: "#f4a261" },
  { name: "Haveri", value: 6547078, colour: "#f1d98c" },
  { name: "Hassan", value: 5188090, colour: "#f4d35e" },
  { name: "Pandavapura", value: 5065134, colour: "#f5d000" },
  { name: "Nagamangala", value: 4251191, colour: "#f2b880" },
  { name: "Gubbi", value: 4164653, colour: "#e8cbd0" },
  { name: "ABC", value: 103857, colour: "#e3b977" },
  { name: "ABC2", value: 174486, colour: "#a9c06f" },
  { name: "ABC3", value: 891426, colour: "#70bfc5" },
  { name: "ABC4", value: 87377, colour: "#d94f63" },
  { name: "ABC5", value: 5901, colour: "#f4a261" },
  { name: "ABC6", value: 654, colour: "#f1d98c" },
  { name: "ABC7", value: 5188, colour: "#f4d35e" },
  { name: "ABC8", value: 50651, colour: "#f5d000" },
  { name: "ABC9", value: 4251, colour: "#f2b880" },
  { name: "ABC10", value: 41646, colour: "#e8cbd0" },
];

const SnapHeader = () => {
  return (
    <div className="snap-wrapper">
      <div className="snap-container">
        {/* Left Section */}
        <div className="snap-left">
          <div className="snap-logo">S</div>
          <span className="snap-title">Snap View</span>
          <button type="button" title="View Settings">
            <span className="snap-gear">⚙</span>
            {/* <span className="snap-gear"><img src="/static/media/Setting-Icon.d7e4e34af52245ccc8faf96f134221e1.svg" width="20" height="20" alt="" class="rotate-icon"></img></span> */}
          </button>
        </div>

        {/* Center Search */}

        <div className="snap-search">
          <span className="search-icon">🔍</span>
          <input placeholder="Press space for search" />
          <button 
          className="search-add"
          title=""
          >+</button>
        </div>

        {/* Right Section */}
        <div className="snap-right">
          <div className="notify">🔔</div>
          <div className="divider" />
          <div className="user-info">
            <div className="avatar">V</div>
            <div>
              <div className="user-name">mis sales</div>
              <div className="user-sub">Main</div>
            </div>
          </div>
          <div className="theme-icon">☀</div>
        </div>
      </div>
    </div>
  );
};

const SnapMetrics = () => {
  const metrics = [
    { title: "Yesterday", value: "5,15,039" },
    { title: "Selected Period", value: "18,60,51,166" },
    { title: "Stock", value: "38,03,98,295" },
    { title: "Receivable", value: "2,14,02,34,691" },
    { title: "Payable", value: "-62,56,26,722" },
    { title: "Average", value: "25,28,53,965" },
  ];

  return (
    <div className="snap-metrics">
      {metrics.map((item, index) => (
        <div key={index} className="metric-card">
          <p className="metric-title">{item.title}</p>
          <h3 className="metric-value">{item.value}</h3>
        </div>
      ))}
    </div>
  );
};

export const Dashboard2 = () => {
  const [chartType, setChartType] = useState("pie");
  const [districtChartType, setDistrictChartType] = useState("pie");
  const [areaChartType, setAreaChartType] = useState("pie");
  const [cityChartType, setCityChartType] = useState("pie");

  return (
    <div className="dashboard-container">
      <SnapHeader />
      <SnapMetrics />
      <div className="chartWrapper">
        <ChartCard
          title="State"
          data={data}
          chartType={chartType}
          setChartType={setChartType}
        />
        <ChartCard
          title="District"
          data={data2}
          chartType={districtChartType}
          setChartType={setDistrictChartType}
        />
        <ChartCard
          title="Area"
          data={data3}
          chartType={areaChartType}
          setChartType={setAreaChartType}
        />
        <ChartCard
          title="City"
          data={data4}
          chartType={cityChartType}
          setChartType={setCityChartType}
        />
      </div>
    </div>
  );
};
