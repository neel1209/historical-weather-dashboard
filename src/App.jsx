import SearchBar from "./components/Searchbar/SearchBar";
function App() {
    const onSearch = (cityName, startDate, endDate) => {
        console.log(cityName, startDate, endDate);
    };
    return <SearchBar onSearch={onSearch} />;
}

export default App;
