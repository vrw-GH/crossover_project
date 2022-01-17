import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";

import "./App.css";
import getAll from "./components/getData";
import Navibar from "./components/Navibar";
import Footer from "./components/Footer";
import Restaurant from "./components/Restaurant";
import Contact from "./components/Contact";
import About from "./components/About";
import MapMain from "./components/MapMain";
import SearchForm from "./components/searchform";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [cities, setCities] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getAll(setCities, setTags, setRestaurants, setLoading, tags);
    //eslint-disable-next-line
  }, []);

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
              <div></div> <div></div> <div></div> <div></div> <div></div>
            </div>
          ) : (
            <>
              <div>
                <br />
                <SearchForm
                  restaurants={restaurants}
                  cities={cities}
                  tags={tags}
                />
              </div>

              <MapMain restaurants={restaurants} cities={cities} />
            </>
          )}
        </div>
      </Route>
      <Route path="/About">
        <About />
      </Route>
      <Route path="/Contact">
        <Contact />
      </Route>

      <Route path="/restaurants/:restaurantID">
        <Restaurant restaurants={restaurants} cities={cities} tags={tags} />
      </Route>

      <div className="footerMainDiv">
        <Footer />
      </div>
    </div>
  );
};

export default App;
