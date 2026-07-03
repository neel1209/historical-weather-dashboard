import { useState } from "react";
import useWeather from "../hooks/useWeather";
import SearchBar from "../components/Searchbar/SearchBar";
import { dataFormatter, formatDate } from "../utils/formatters";
import StatCard from "../components/StatCard/StatCard";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import WeatherChart from "../components/WeatherChart/WeatherChart";

const Dashboard = () => {
    const [cityName, setCityName] = useState("Toronto");
    const [startDate, setStartDate] = useState(
        new Date(new Date().setDate(new Date().getDate() - 14))
            .toISOString()
            .split("T")[0],
    );
    const [endDate, setEndDate] = useState(
        new Date(new Date().setDate(new Date().getDate() - 8))
            .toISOString()
            .split("T")[0],
    );
    const { data, loading, error } = useWeather(cityName, startDate, endDate);

    const handleSearch = (newCity, newStart, newEnd) => {
        setCityName(newCity);
        setStartDate(newStart);
        setEndDate(newEnd);
    };

    const temperatureFormatedData = data
        ? dataFormatter(
              data.dateRange,
              data.maxTemperature,
              data.minTemperature,
          )
        : [];

    const windSpeedFormatedData = data
        ? dataFormatter(data.dateRange, data.maxWindSpeed, data.minWindSpeed)
        : [];

    const humidityFormatedData = data
        ? dataFormatter(data.dateRange, data.maxHumidity, data.minHumidity)
        : [];

    return (
        <>
            <SearchBar
                onSearch={handleSearch}
                defaultCityName={cityName}
                defaultStartDate={startDate}
                defaultEndDate={endDate}
            />
            {loading ? (
                <LoadingSpinner />
            ) : error ? (
                <ErrorMessage error={error} />
            ) : !data ? null : (
                <div>
                    <h2>
                        {data.cityName}
                        {data.stateName && `, ${data.stateName}`}
                        {`, ${data.countryName}`}
                        {` - `}
                        {formatDate(data.dateRange[0])} {` to `}
                        {formatDate(data.dateRange[data.dateRange.length - 1])}
                    </h2>
                    <WeatherChart
                        data={temperatureFormatedData}
                        title="Temperature"
                        unit="°C"
                        maxColor="var(--color-temp-max)"
                        minColor="var(--color-temp-min)"
                    />
                    <WeatherChart
                        data={windSpeedFormatedData}
                        title="Wind Speed"
                        unit="km/h"
                        maxColor="var(--color-wind-max)"
                        minColor="var(--color-wind-min)"
                    />
                    <WeatherChart
                        data={humidityFormatedData}
                        title="Humidity"
                        unit="%"
                        maxColor="var(--color-humidity-max)"
                        minColor="var(--color-humidity-min)"
                    />
                    <StatCard
                        label="Temperature"
                        min={Math.min(...data.minTemperature)}
                        max={Math.max(...data.maxTemperature)}
                        unit="°C"
                    />

                    <StatCard
                        label="Wind Speed"
                        min={Math.min(...data.minWindSpeed)}
                        max={Math.max(...data.maxWindSpeed)}
                        unit="km/h"
                    />
                    <StatCard
                        label="Humidity"
                        min={Math.min(...data.minHumidity)}
                        max={Math.max(...data.maxHumidity)}
                        unit="%"
                    />
                </div>
            )}
        </>
    );
};

export default Dashboard;
