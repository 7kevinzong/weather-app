import "./current-weather.css";

const CurrentWeather = (data) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.data.city}</p>
          <p className="weather-description">
            {data.data.weather[0].description}
          </p>
        </div>
        <img
          src={`icons/${data.data.weather[0].icon}.png`}
          alt="weather"
          className="weather-icon"
        />
      </div>
      <div className="bottom">
        <p className="temperature">88°F</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">92°F</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">2 mph</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">15%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">15 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
