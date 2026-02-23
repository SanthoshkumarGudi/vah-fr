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
];

export const Dashboard2 = () => {
  const [chartType, setChartType] = useState("pie");
  const [districtChartType, setDistrictChartType] = useState("pie");
  const [areaChartType, setAreaChartType] = useState("pie");
  const [cityChartType, setCityChartType] = useState("pie");

  return (
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
  );
};
