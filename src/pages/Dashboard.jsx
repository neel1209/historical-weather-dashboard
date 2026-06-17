import { useState } from "react";
import useWeather from "../hooks/useWeather";
import SearchBar from "../components/Searchbar/SearchBar";

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
    console.log(data);
    return (
        <>
            <SearchBar
                onSearch={handleSearch}
                defaultCityName={cityName}
                defaultStartDate={startDate}
                defaultEndDate={endDate}
            />
        </>
    );
};

export default Dashboard;
