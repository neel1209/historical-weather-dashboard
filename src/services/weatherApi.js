export async function getCoordinates(cityName, signal) {
    const res = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`,
        { signal: signal },
    );
    const data = await res.json();
    if (!data.results || data.results.length === 0) {
        throw new Error("City not found");
    }
    return {
        name: data.results[0].name,
        latitude: data.results[0].latitude,
        longitude: data.results[0].longitude,
    };
}

export async function getWeatherData(
    latitude,
    longitude,
    startDate,
    endDate,
    signal,
) {
    const res = await fetch(
        `https://archive-api.open-meteo.com/v1/archive?latitude=${latitude}&longitude=${longitude}&start_date=${startDate}&end_date=${endDate}&daily=relative_humidity_2m_min,relative_humidity_2m_max,temperature_2m_max,temperature_2m_min,wind_speed_10m_min,wind_speed_10m_max&timezone=auto`,
        { signal: signal },
    );
    const data = await res.json();

    if (!data.daily) {
        throw new Error("Weather data not available");
    }

    return {
        maxTemperature: data.daily.temperature_2m_max,
        minTemperature: data.daily.temperature_2m_min,
        maxWindSpeed: data.daily.wind_speed_10m_max,
        minWindSpeed: data.daily.wind_speed_10m_min,
        maxHumidity: data.daily.relative_humidity_2m_max,
        minHumidity: data.daily.relative_humidity_2m_min,
        dateRange: data.daily.time,
    };
}
