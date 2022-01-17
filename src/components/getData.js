import axios from "axios";
import addMissingData from "./addMissingData";

const getAll = (setCities, setTags, setRestaurants, setLoading, tags) => {
  getCities(setCities, setLoading);
  getTags(setTags, setLoading);
  getRestaurants(setRestaurants, setLoading, tags);
};

const rootAPI = "https://yelp-project-backend.herokuapp.com/api";

export const getRestaurants = async (
  setRestaurants,
  setLoading,
  tags,
  // setWorkingList,
  restID
) => {
  let url = `${rootAPI}/restaurants`;
  if (restID) {
    url = `${rootAPI}/${restID}`;
  }
  try {
    setLoading(true);
    const results = await axios.get(url);
    let tArr = results.data;
    //- add missing "image" and "tag" to the data-----
    addMissingData(tArr, tags);
    setLoading(false);
    setRestaurants(tArr);
  } catch (error) {
    alert("Sorry, data not found for restaurants");
  }
};

export const getCities = async (setCities, setLoading) => {
  try {
    setLoading(true);
    const results = await axios.get(`${rootAPI}/cities`);
    setCities(results.data);
    setLoading(false);
  } catch (error) {
    return alert("Sorry, data not found for cities");
  }
};

export const getTags = async (setTags, setLoading) => {
  try {
    setLoading(true);
    const results = await axios.get(`${rootAPI}/tags`);
    setTags(results.data);
    setLoading(false);
  } catch (error) {
    return alert("Sorry, data not found for tags");
  }
};

export default getAll;
