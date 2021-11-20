import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RestaurantsList = ({ workingList, restaurants, cities }) => {
  const [filteredList, setFilteredList] = useState(restaurants);

  // const filterRestaurants = (restaurant) => {
  //   if (!searchQry3) return restaurants;
  //   return restaurant.name.toLowerCase() === searchQry1.toLowerCase();
  // };
  // let filteredList = restaurants.filter(filterRestaurants);

  const getCity = (city_id) => {
    let cityObj = cities.find((el) => el.id === Number(city_id) + 1);
    let city = cityObj === undefined ? "not found" : cityObj.name;
    return city;
  };
  useEffect(() => {
    window.scrollTo({
      top: 10,
      left: 10,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="itemListContainer">
      {filteredList.map(({ id, name, city_id, image }) => {
        return (
          <Link to={`/restaurants/${id}`} className="itemList" key={id}>
            <div className="thumbnail">
              <img src={image} alt="random " />
            </div>
            <div className="textContainer">
              <h1>{name}</h1>
              <div className="cityTag">
                <h4>{getCity(city_id)}</h4>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default RestaurantsList;
