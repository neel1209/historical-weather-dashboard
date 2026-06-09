import useWeather from "./hooks/useWeather";
function App() {
    const { data, loading, error } = useWeather(
        "toronto",
        "2026-04-01",
        "2026-04-07",
    );
    console.log(data, loading, error);
    return <></>;
}

export default App;
