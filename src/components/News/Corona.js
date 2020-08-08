import React, { useState, useEffect, useCallback } from "react";
import Loading from "./Loading";
import dotenv from "dotenv";
dotenv.config();

const Corona = () => {
  const [data, setData] = useState(null);

  // 코로나 데이터 가져옴
  const fetchCoronaAPI = useCallback(async () => {
    await fetch(
      "https://covid-19-data.p.rapidapi.com/country/code?format=json&code=KR",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_CORONA_KEY,
        },
      }
    ).then((res) => {
      setData(res.data);
    });
  }, []);

  useEffect(() => {
    fetchCoronaAPI();
  });

  return data === null ? (
    <Loading />
  ) : data === undefined ? (
    <div>ERROR</div>
  ) : (
    <div>HI</div>
  );
};

export default Corona;
