import axios from "axios";
import React, { useEffect, useState } from "react";

function Forecast({ cityGo }) {
  const [foreData, setForeData] = useState(null);

  const foreCLink = (foreCity) =>
    `https://api.weatherapi.com/v1/forecast.json?key=68a233284fcc4b7399684651221012&q=${foreCity}&days=12&aqi=no&alerts=no`;

  useEffect(() => {
    const foreCastFetch = async () => {
      const foreData = await fetch(foreCLink(cityGo));
      const dataRes = await foreData.json();
      console.log(dataRes);
      setForeData(dataRes.forecast.forecastday);
    };

    if (cityGo != null) {
      foreCastFetch();
    }
  }, [cityGo]);

  return (
    <>
      {foreData != null && (
        <div className="card my-5 mx-auto shadow-5" style={{ width: "52rem" }}>
          <h2 className="fw-bolder p-2 border-bottom">FORECAST</h2>
          <div className="card-body">
            <div class="accordion accordion-flush" id="accordionFlushExample">
              {foreData.map((dats, i) => {
                return (
                  <div class="accordion-item" key={i}>
                    <h2 class="accordion-header" id={`flush-headingOne` + i}>
                      <div
                        class="accordion-button p-0 collapsed"
                        // type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target={`#date` + i}
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        <div className="d-flex justify-content-evenly w-100 align-items-center ">
                        <img src={dats.day.condition.icon} class="" alt="" />
                        <p>
                          <b>Date : </b>
                          {dats.date}
                        </p>
                        <p>
                          <b>{dats.day.condition.text}</b>
                        </p>
                        <p>
                          <b>Temp : </b>
                          {dats.day.mintemp_c} to {dats.day.maxtemp_c}
                        </p>
                        <p>
                          <b>{dats.day.daily_chance_of_rain}</b>% of Chance to
                          rain
                        </p>
                        </div>
                      </div>
                    </h2>
                    <div
                      id={"date" + i}
                      class="accordion-collapse collapse"
                      //   aria-labelledby="flush-headingOne"
                      data-mdb-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        {dats.hour.map((rainChan,i) => {
                          return (
                           
                           <div className="d-flex mb-2 justify-content-evenly align-items-center">
                            <p><b>{i}:00</b></p>
                            <img src={rainChan.condition.icon} class="img-fluid rounded-top" alt="" />
                             <div class="progress mb-3 w-75" style={{height: "15px"}}>
                              <div
                                class="progress-bar fw-bold text-dark"
                                role="progressbar"
                                style={{width: `${rainChan.chance_of_rain}%`}}
                                
                              >
                                {rainChan.chance_of_rain}%
                              </div>
                            </div>
                           </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-mdb-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-mdb-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </div>
          </div>
        </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Forecast;
