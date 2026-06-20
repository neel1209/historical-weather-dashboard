import { useState } from "react";
import useWeather from "../hooks/useWeather";
import SearchBar from "../components/Searchbar/SearchBar";
import { dataFormatter } from "../utils/formatters";
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
    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorMessage error={error} />;
    if (!data) return null;

    const temperatureFormatedData = dataFormatter(
        data.dateRange,
        data.maxTemperature,
        data.minTemperature,
    );

    const windSpeedFormatedData = dataFormatter(
        data.dateRange,
        data.maxWindSpeed,
        data.minWindSpeed,
    );

    const humidityFormatedData = dataFormatter(
        data.dateRange,
        data.maxHumidity,
        data.minHumidity,
    );
    return (
        <>
            <SearchBar
                onSearch={handleSearch}
                defaultCityName={cityName}
                defaultStartDate={startDate}
                defaultEndDate={endDate}
            />
            <WeatherChart
                data={temperatureFormatedData}
                title="Temperature"
                unit="°C"
            />
            <WeatherChart
                data={windSpeedFormatedData}
                title="Wind Speed"
                unit="km/h"
            />
            <WeatherChart
                data={humidityFormatedData}
                title="Humidity"
                unit="%"
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
        </>
    );
};

export default Dashboard;
