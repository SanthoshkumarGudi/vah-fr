import { useState, useEffect } from "react";
import styles from "./Dashboard2.module.css";

import SnapHeader from "../components/SnapHeader/SnapHeader";
import SnapMetrics from "../components/SnapMetrics/SnapMetrics";
import { ChartCard } from "../components/ChartCard/ChartCard";

import {
  stateData,
  districtData,
  areaData,
  cityData
} from "../data/dashboardData";

export const Dashboard2 = () => {
  const [chartType, setChartType] = useState("pie");
  const [districtChartType, setDistrictChartType] = useState("pie");
  const [areaChartType, setAreaChartType] = useState("pie");
  const [cityChartType, setCityChartType] = useState("pie");
  const [theme, setTheme] =useState("light");

  useEffect(()=>{
    document.documentElement.setAttribute("data-theme", theme)

  },[theme])
  

  return (
    <div className={styles.container}>
      <SnapHeader setTheme={setTheme} theme={theme}/>
      <SnapMetrics />

      <div className={styles.chartWrapper}>
        <ChartCard
          title="State"
          data={stateData}
          chartType={chartType}
          setChartType={setChartType}
        />
        <ChartCard
          title="District"
          data={districtData}
          chartType={districtChartType}
          setChartType={setDistrictChartType}
        />
        <ChartCard
          title="Area"
          data={areaData}
          chartType={areaChartType}
          setChartType={setAreaChartType}
        />
        <ChartCard
          title="City"
          data={cityData}
          chartType={cityChartType}
          setChartType={setCityChartType}
        />
      </div>
    </div>
  );
};