import { useState, useEffect } from "react";
import { getCoordinates } from "../services/weatherApi";
import { getWeatherData } from "../services/weatherApi";

export default function useWeather(cityName, startDate, endDate) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await getCoordinates(cityName, controller.signal);
                const fetchedData = await getWeatherData(
                    res.latitude,
                    res.longitude,
                    startDate,
                    endDate,
                    controller.signal,
                );
                if (fetchedData) {
                    setData(fetchedData);
                    setLoading(false);
                }
            } catch (err) {
                if (err.name === "AbortError") return;
                setError(err);
                setLoading(false);
            }
        };
        fetchData();
        return () => controller.abort();
    }, [cityName, startDate, endDate]);

    return { data, loading, error };
}
