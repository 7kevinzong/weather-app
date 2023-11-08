import "./forecast.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Satiurday",
];

const Forecast = ({ data }) => {
  const dayInWeek = new Date().getDay();
  const nextDayInWeek = dayInWeek < 6 ? dayInWeek + 1 : 0;
  const forecastDays = WEEK_DAYS.slice(nextDayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, nextDayInWeek)
  );

  const forecastInterval = data.list.length / 5;
  let forecasts = [];

  for (
    let i = forecastInterval - 1;
    i < data.list.length;
    i += forecastInterval
  ) {
    forecasts.push(data.list[i]);
  }

  return (
    <>
      <label className="title">5-Day Forecast</label>
      <Accordion allowZeroExpanded>
        {forecasts.map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    alt="weather"
                    className="icon-small"
                  />
                  <label className="day">{forecastDays[index]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(item.main.temp_min)}°F /{" "}
                    {Math.round(item.main.temp_max)}°F
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>Feels like</label>
                  <label>{Math.round(item.main.feels_like)}°F</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Pressure</label>
                  <label>{item.main.pressure} hPa</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Humidity</label>
                  <label>{Math.round(item.main.humidity)}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Clouds</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Wind speed</label>
                  <label>{Math.round(item.wind.speed)} mph</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Sea level</label>
                  <label>{item.main.sea_level} ft</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
