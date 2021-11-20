import "./App.css";

import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";

import { getCities, getTags, getRestaurants } from "./components/getData";
import Navibar from "./components/Navibar";
import RestaurantsList from "./components/RestaurantsList";
import Footer from "./components/Footer";
import Restaurant from "./components/Restaurant";
import Contact from "./components/Contact";
import About from "./components/About";
import MapMain from "./components/MapMain";
import SearchForm from "./components/searchform";
//import { faCity } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [cities, setCities] = useState([]);
  const [tags, setTags] = useState([]);
  const [workingList, setWorkingList] = useState([]);

  useEffect(() => {
    getCities(setCities, setLoading);
    getTags(setTags, setLoading);
    getRestaurants(setRestaurants, setLoading, setWorkingList);
  }, []);

  //setWorkingList(restaurants);

  return (
    <div className="appMainDiv">
      <div className="navigation">
        <div className="landingHeaderDiv">
          <h3>h'yelp</h3>
          <hr size="2" width="80%" color="red" />
        </div>
        <Navibar />
      </div>

      <Route exact path="/">
        <div>
          {loading ? (
            <div className="bouncer">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : (
            <>
              <div>
                <br />
                <SearchForm
                  restaurants={restaurants}
                  cities={cities}
                  tags={tags}
                  setWorkingList={setWorkingList}
                />
              </div>

              <RestaurantsList
                workingList={workingList}
                restaurants={restaurants}
                cities={cities}
              />
            </>
          )}
        </div>
      </Route>

      <Route exact path="/cities">
        <div>
          {loading ? (
            <div className="bouncer">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : (
            <RestaurantsList
              workingList={workingList}
              restaurants={restaurants}
              cities={cities}
            />
          )}
        </div>
      </Route>

      <Route path="/restaurants/:restaurantID">
        <Restaurant restaurants={restaurants} cities={cities} />
      </Route>

      <Route exact path="/">
        <MapMain restaurants={restaurants} cities={cities} />
      </Route>
      <Route path="/About">
        <About />
      </Route>
      <Route path="/Contact">
        <Contact />
      </Route>

      <div className="footerMainDiv">
        <Footer />
      </div>
    </div>
  );
};

export default App;
