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
            <AccordionItemPanel></AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
