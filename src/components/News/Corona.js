import React from "react";
import { Chart } from "react-google-charts";
import Loading from "../Loading/Loading";
import "./Corona.scss";

const printChart = (item) => {
  return (
    <Chart
      width={"170px"}
      height={"150px"}
      chartType="PieChart"
      loader={<Loading />}
      data={[
        ["section", "people"],
        ["confirmed", item.confirmed],
        ["critical", item.critical],
        ["deaths", item.deaths],
        ["recovered", item.recovered],
      ]}
      options={{
        is3D: true,
        chartArea: { width: "100%", height: "100%" },
        legend: { position: "none" },
        title: "Corona status",
        backgroundColor: "transparent",
      }}
      rootProps={{ "data-testid": "2" }}
    />
  );
};

const formatNumber = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const printUpdateTime = (time) => {
  return <p className="corona-update">Last Update: {time.substr(0, 10)}</p>;
};

const printCorona = (item) => {
  return (
    <div className="corona-inform">
      <p>확진자: {formatNumber(item.confirmed)}명</p>
      <p>심각: {formatNumber(item.critical)}명</p>
      <p>사망: {formatNumber(item.deaths)}명</p>
      <p>회복: {formatNumber(item.recovered)}명</p>
    </div>
  );
};
const Corona = ({ coronaData }) => {
  return (
    <article className="corona-article">
      <p className="corona-title">Corona Information</p>
      {printUpdateTime(coronaData[0].lastUpdate)}
      <div className="corona-flex">
        <div className="corona-left">{printCorona(coronaData[0])}</div>
        <div className="corona-right">{printChart(coronaData[0])}</div>
      </div>
    </article>
  );
};

export default Corona;
