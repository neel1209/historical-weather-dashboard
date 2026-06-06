export async function getCoordinates(cityName) {
    const res = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`,
    );
    const data = await res.json();
    if (!data.results || data.results.length === 0) {
        throw new Error("City not found");
    }
    return {
        name: data.results[0].name,
        lat: data.results[0].latitude,
        longitude: data.results[0].longitude,
    };
}

export async function getWeatherData(lat, lon) {
    const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weathercode,windspeed_10m&timezone=auto`,
    );
    const data = await res.json();

    if (!data.current) {
        throw new Error("Weather data not available");
    }

    return {
        temperature: data.current.temperature_2m,
        weathercode: data.current.weathercode,
        windspeed: data.current.windspeed_10m,
    };
}
