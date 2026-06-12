import { useState } from "react";
const SearchBar = ({ onSearch }) => {
    const [cityName, setCityName] = useState("Toronto");
    const [startDate, setStartDate] = useState(
        new Date(new Date().setDate(new Date().getDate() - 30))
            .toISOString()
            .split("T")[0],
    );
    const [endDate, setEndDate] = useState(
        new Date(new Date().setDate(new Date().getDate() - 15))
            .toISOString()
            .split("T")[0],
    );

    const handleSubmit = () => {
        onSearch(cityName, startDate, endDate);
    };
    return (
        <>
            <label htmlFor="cityName">Enter city name:</label>
            <input
                type="text"
                id="cityName"
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
            />

            <label htmlFor="startDate"> From </label>
            <input
                type="date"
                id="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
            />

            <label htmlFor="endDate"> To </label>
            <input
                type="date"
                id="endDate"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
            />

            <input type="button" value="Submit" onClick={handleSubmit} />
        </>
    );
};

export default SearchBar;
