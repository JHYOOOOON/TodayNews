import React from "react";
import "./Corona.scss";

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
  console.log("corona:::", coronaData[0]);
  return (
    <article className="corona-article">
      <p className="corona-title">Corona Inform</p>
      {printUpdateTime(coronaData[0].lastUpdate)}
      {printCorona(coronaData[0])}
    </article>
  );
};

export default Corona;
