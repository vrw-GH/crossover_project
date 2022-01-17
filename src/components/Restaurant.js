import React, { useEffect } from "react";
import { useParams } from "react-router";

const Restaurant = ({ restaurants, cities, tags }) => {
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
  const getTag = (tag_id) => {
    let tagObj = tags.find((el) => el.id === Number(tag_id) + 1);
    let tag = tagObj === undefined ? "not found" : tagObj.name;
    return tag;
  };

  useEffect(() => {
    window.scrollTo({
      top: 10,
      left: 10,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="restaurantContainer">
      <h1> {filteredItem.name} </h1>

      <h2>for the best of {getTag(filteredItem.tag_id)} cuisine</h2>
      <h4>in {getCity(filteredItem.city_id)}</h4>
      <div>
        <img src={filteredItem.image} alt="restaurant" />
      </div>

      {/* <Maps
                  lat={market.fields.location.lat}
                  lon={market.fields.location.lon}
        /> */}
    </div>
  );
};

export default Restaurant;
