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

    const handleSubmit = () => {
        onSearch(cityName, startDate, endDate);
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
        </div>
    );
};

export default SearchBar;
