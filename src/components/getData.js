import axios from "axios";
// eslint-disable-next-line
import React, { useEffect, useState } from "react";

export const getRestaurants = async (
  setRestaurants,
  setLoading,
  setWorkingList,
  restID
) => {
  let url = "https://yelp-project-backend.herokuapp.com/api/restaurants";
  if (restID) {
    url = `https://yelp-project-backend.herokuapp.com/api/restaurants/${restID}`;
  }
  try {
    setLoading(true);
    const results = await axios.get(url);
    let tArr = results.data;
    tArr.map((element) => {
      const getImageURL = async () => {
        let img = "no image";
        try {
          img = await axios.get(`https://loremflickr.com/500/500/restaurant`);
          img = img.request.responseURL;
          element.image = img;
        } catch (error) {
          console.log("no image");
        }
      };
      getImageURL();
      return element;
    });
    setLoading(false);
    //console.log(tArr);
    setRestaurants(tArr);
    setWorkingList(tArr);
  } catch (error) {
    alert("Sorry, data not found for restaurants");
  }
};

export const getCities = async (setCities, setLoading) => {
  try {
    setLoading(true);
    const results = await axios.get(
      "https://yelp-project-backend.herokuapp.com/api/cities"
    );
    setCities(results.data);
    //console.log(results.data);
    setLoading(false);
  } catch (error) {
    return alert("Sorry, data not found for cities");
  }
};

export const getTags = async (setTags, setLoading) => {
  try {
    setLoading(true);
    const results = await axios.get(
      "https://yelp-project-backend.herokuapp.com/api/tags"
    );
    setTags(results.data);
    setLoading(false);
  } catch (error) {
    return alert("Sorry, data not found for tags");
  }
};
