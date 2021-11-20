import { useState } from "react";
import filterByQuery from "./filterByQuery";

const SearchForm = ({ restaurants, cities, tags, setWorkingList }) => {
  const [searchQry1, setSearchQry1] = useState(""); // city
  const [searchQry2, setSearchQry2] = useState(""); // tag
  const [searchQry3, setSearchQry3] = useState(""); // restaurant

  let [city, setCity] = useState(" Select a city ");
  let [tag, setTag] = useState(" Select a tag ");
  let [rest, setRest] = useState(" Select a restaurant ");
  let filteredList = restaurants;

  const handleReset = () => {
    setCity(" Select a City ");
    setTag(" Select a Tag ");
    setRest(" Select a Restaurant ");
    setWorkingList(restaurants);
    filteredList = restaurants;
  };

  let handleCityChange = (e) => {
    setCity(e.target.value);
    handleSearchClick("city", e.target.value);
  };
  let handleTagChange = (e) => {
    setTag(e.target.value);
    handleSearchClick("tag", e.target.value);
  };
  let handleRestChange = (e) => {
    setRest(e.target.value);
    handleSearchClick("restaurant", e.target.value);
  };

  const handleSearchClick = (type, filter) => {
    switch (type) {
      case "city": {
        setSearchQry1(filter);
        filteredList = filterByQuery(
          filteredList,
          filter,
          searchQry2,
          searchQry3
        );
        break;
      }
      case "tag": {
        setSearchQry2(filter);
        filteredList = filterByQuery(
          filteredList,
          searchQry1,
          filter,
          searchQry3
        );
        break;
      }
      case "restaurant": {
        setSearchQry3(filter);
        filteredList = filterByQuery(
          filteredList,
          searchQry1,
          searchQry2,
          filter
        );
        break;
      }
      default: {
      }
    }
    setWorkingList(filteredList);
  };

  return (
    <div style={{ display: "inline-flex" }}>
      <br />
      <select onChange={handleCityChange}>
        <option value="a"> -- Select a city -- </option>
        {cities.map((city) => (
          <option key={city.id} value={city.id}>
            {city.name}
          </option>
        ))}
      </select>
      <select onChange={handleTagChange}>
        <option value="a"> -- Select a tag -- </option>
        {tags.map((tag) => (
          <option key={tag.id} value={tag.id}>
            {tag.name}
          </option>
        ))}
      </select>
      <select onChange={handleRestChange}>
        <option value="a"> -- Select a restaurant -- </option>
        {restaurants.map((rest) => (
          <option key={rest.id} value={rest.id}>
            {rest.name}
          </option>
        ))}
      </select>
      {/* <button onClick={handleSearchClick}>Search</button> */}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default SearchForm;
