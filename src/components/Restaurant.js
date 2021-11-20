import React, { useEffect } from "react";
import { useParams } from "react-router";

const Restaurant = ({ restaurants, cities }) => {
  const { restaurantID } = useParams();

  const filterRestaurants = (restaurant) => {
    if (!restaurantID) return false;
    return restaurant.id === Number(restaurantID);
  };
  let filteredItem = restaurants.filter(filterRestaurants)[0];

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
    <div>
      <h1> {filteredItem.name} </h1> <h3> {getCity(filteredItem.city_id)}</h3>
      <div>
        {" "}
        <img src={filteredItem.image} alt="restaurant" />{" "}
      </div>
      {/* <Maps
                  lat={market.fields.location.lat}
                  lon={market.fields.location.lon}
        /> */}
    </div>
  );
};

export default Restaurant;
