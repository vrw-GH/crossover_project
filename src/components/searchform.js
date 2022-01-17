import { useState } from "react";
// import { useEffect } from "react";
import filterByQuery from "./filterByQuery";
import RestaurantsList from "./RestaurantsList";

const SearchForm = ({ restaurants, cities, tags }) => {
  const [city, setCity] = useState("");
  const [tag, setTag] = useState("");
  const [rest, setRest] = useState("");
  //eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const [workingList, setWorkingList] = useState([[...restaurants]]);
  let currentList = [...restaurants];

  // useEffect(() => {
  //   setWorkingList([...restaurants]);
  //   currentList = [...restaurants];
  //   // console.log(workingList, currentList);
  // }, []);

  const handleReset = () => {
    setCity("");
    setTag("");
    setRest("");
    setWorkingList([...restaurants]);
    currentList = [...restaurants];
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
        currentList = filterByQuery(restaurants, filter, tag, rest);
        break;
      }
      case "tag": {
        currentList = filterByQuery(restaurants, city, filter, rest);
        break;
      }
      case "restaurant": {
        currentList = filterByQuery(restaurants, city, tag, filter);
        break;
      }
      default: {
        currentList = filterByQuery(restaurants, city, tag, rest);
      }
    }
    setWorkingList([...currentList]);
    console.log(workingList);
  };

  return (
    <>
      <div className="itemListContainer">
        <br />
        <select onChange={handleCityChange}>
          <option value=""> -- Select a city -- </option>
          {cities.map((city) => (
            <option key={city.id} value={city.id}>
              {city.name}
            </option>
          ))}
        </select>
        <select onChange={handleTagChange}>
          <option value=""> -- Select a tag -- </option>
          {tags.map((tag) => (
            <option key={tag.id} value={tag.id}>
              {tag.name}
            </option>
          ))}
        </select>
        <select onChange={handleRestChange}>
          <option value=""> -- Select a restaurant -- </option>
          {restaurants.map((rest) => (
            <option key={rest.id} value={rest.name}>
              {rest.name}
            </option>
          ))}
        </select>
        {/* <button onClick={handleSearchClick}>Search</button> */}
        <button onClick={handleReset}>Reset</button>
      </div>
      {loading ? (
        <div className="bouncer">
          <div></div> <div></div> <div></div> <div></div> <div></div>
        </div>
      ) : (
        <RestaurantsList workingList={workingList} cities={cities} />
      )}
    </>
  );
};

export default SearchForm;
