import React, { useEffect, useState } from "react";

function Current({ cityGo }) {
  const [curData, setCurData] = useState(null);

  const currentWeatherLink = (getWeath) =>
    `https://api.weatherapi.com/v1/current.json?key=68a233284fcc4b7399684651221012&q=${getWeath}&aqi=no`;

  useEffect(() => {
    if (cityGo != null) {
      const fetchCurrent = async () => {
        const currentWeather = await fetch(currentWeatherLink(cityGo));
        const curWeath = await currentWeather.json();
        console.log(curWeath);
        setCurData(curWeath);
      };
      fetchCurrent();
    }
  }, [cityGo]);

  return (
    <>
      {curData != null && (
        <div className="current">
          {cityGo != null && (
            <div className="cPlace p-2 card bg-light w-50 mx-auto mt-5">
              <h4 className="fw-bold">{cityGo}</h4>
            </div>
          )}
          <div class="card mx-auto mt-5" style={{ width: "38rem" }}>
            <h3 class="card-title fw-bolder border-bottom p-2">TODAY</h3>
            <div class="card-body curBody d-flex justify-content-evenly align-items-center  p-1">
              <img
                src={curData.current.condition.icon}
                class=""
                alt="ico"
              />
              <p><b>{curData.current.condition.text}</b></p>
              <p className=""><b>Temp : </b>{curData.current.temp_c}<b>&#176;</b></p>
              <p><b className="fw-bolder">Feels Like : </b>{curData.current.feelslike_c}<b>&#176;</b></p>
              <p><b>Wind : </b>{curData.current.wind_kph} KPH</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Current;
