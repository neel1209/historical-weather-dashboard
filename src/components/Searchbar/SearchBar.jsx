import { useState } from "react";
const SearchBar = ({
    onSearch,
    defaultCityName,
    defaultStartDate,
    defaultEndDate,
}) => {
    const [cityName, setCityName] = useState(defaultCityName);
    const [startDate, setStartDate] = useState(defaultStartDate);
    const [endDate, setEndDate] = useState(defaultEndDate);

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
