import { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({
    onSearch,
    defaultCityName,
    defaultStartDate,
    defaultEndDate,
}) => {
    const [cityName, setCityName] = useState(defaultCityName);
    const [startDate, setStartDate] = useState(defaultStartDate);
    const [endDate, setEndDate] = useState(defaultEndDate);
    const [error, setError] = useState(null);

    const handleSubmit = () => {
        const startDateObj = new Date(startDate);
        const endDateObj = new Date(endDate);
        const differenceOfDay = (endDateObj - startDateObj) / 86400000;
        if (startDateObj > endDateObj && differenceOfDay > 30) {
            setError(
                "End date should be after start date & date range should not exceed 30 days",
            );
        } else if (startDateObj > endDateObj) {
            setError("End date should be after start date");
        } else if (differenceOfDay > 30) {
            setError("Date range should not exceed 30 days");
        } else {
            setError(null);
            onSearch(cityName, startDate, endDate);
        }
    };
    return (
        <div className={styles.searchBar}>
            <div className={styles.field}>
                <label htmlFor="cityName">Enter city name:</label>
                <input
                    type="text"
                    id="cityName"
                    value={cityName}
                    onChange={(e) => setCityName(e.target.value)}
                />
            </div>

            <div className={styles.field}>
                <label htmlFor="startDate">From</label>
                <input
                    type="date"
                    id="startDate"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
            </div>

            <div className={styles.field}>
                <label htmlFor="endDate">To</label>
                <input
                    type="date"
                    id="endDate"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                />
            </div>

            <input
                type="button"
                value="Submit"
                onClick={handleSubmit}
                className={styles.submitButton}
            />

            {error && <div className={styles.error}>{error}</div>}
        </div>
    );
};

export default SearchBar;
