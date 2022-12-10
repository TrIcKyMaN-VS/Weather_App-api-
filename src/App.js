import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

import Current from "./component/current";
import Forecast from "./component/Forecast";
import Footer from "./component/footer";

function App() {
  const autoUrl =
    "https://api.weatherapi.com/v1/search.json?key=68a233284fcc4b7399684651221012&q=";

  const [city, setCity] = useState();
  const [dispcity, setdispCity] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [citySuggest, setCitySuggest] = useState([]);

  const handleClick = (currentCity) => {
    // console.log(currentCity);
    setClicked(true);
    setCity(currentCity);
    setdispCity(currentCity);
  };

  useEffect(() => {
    const getDataAfterTimeout = setTimeout(() => {
      const fetchCitySug = async () => {
        const resp = await fetch(autoUrl + city);
        const cityData = await resp.json();
        console.log(cityData);
        const citySuggestionData = cityData.map(
          (curData) => `${curData.name}, ${curData.region}, ${curData.country}`
        );
        setCitySuggest(citySuggestionData);
      };
      if (!clicked) {
        if (!!city) {
          if (city.length > 2) {
            fetchCitySug();
          }
        }
      } else {
        setCitySuggest([]);
        setClicked(false);
      }
    }, "500");
    return () => clearTimeout(getDataAfterTimeout);
  }, [city]);

  return (
    <div className="App">
      <div className="topHead mb-5 bg-black sticky-top">
        <h2 className="p-4 text-center text-white fw-bolder">
          TrickY Weather Forecasting
        </h2>
      </div>

      <div className="bg-white p-2 mx-auto rounded" style={{ width: "28rem" }}>
        <div class="form-outline bg-light ">
          <i class="fa-sharp fa-solid fa-magnifying-glass trailing"></i>
          <input
            name="email"
            type="email"
            id="form3Example3cg"
            value={city}
            class="form-control form-control-lg"
            onChange={(e) => setCity(e.target.value)}
          />
          <label class="form-label fw-bold text-muted" for="form3Example3cg">
            Enter the city to get weather
          </label>
        </div>
      </div>
      {citySuggest.length > 0 && (
        <div
          className="mb-4 p-1 bg-light mx-auto suggestCities rounded overflow-y-scroll"
          style={{ width: "28rem", height: "15rem" }}
        >
          {citySuggest.map((suggestCity) => {
            return (
              <div
                className="border-bottom  p-1"
                onClick={() => handleClick(suggestCity)}
              >
                {suggestCity}
              </div>
            );
          })}
        </div>
      )}
      <Current cityGo={dispcity} />
      <Forecast cityGo={dispcity} />
      <Footer />
    </div>
  );
}

export default App;
