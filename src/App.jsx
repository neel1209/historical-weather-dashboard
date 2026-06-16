import useWeather from "./hooks/useWeather";
import { dataFormatter } from "./utils/formatters";
import WeatherChart from "./components/WeatherChart/WeatherChart";
function App() {
    const { data, loading, error } = useWeather(
        "toronto",
        "2026-04-15",
        "2026-04-21",
    );
    const formatedData = data
        ? dataFormatter(
              data.dateRange,
              data.maxTemperature,
              data.minTemperature,
          )
        : [];

    return <WeatherChart data={formatedData} title="Temperature" unit="°C" />;
}

export default App;
