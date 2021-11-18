import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import Picture from "./components/Picture";
import Navibar from "./components/Navibar";
import MarketsList from "./components/MarketsList";
import { Route } from "react-router-dom";
//import { client } from "./components/client";
import Footer from "./components/Footer";
import Market from "./components/Market";
import Contact from "./components/Contact";
import About from "./components/About";
import MapMain from "./components/MapMain";
import SearchForm from "./components/form";
//import Stars from "./components/Stars";

const App = () => {
  const [markets, setMarkets] = useState([]);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQry1, setSearchQry1] = useState(""); // restaurant
  const [searchQry2, setSearchQry2] = useState(""); // city

  const handleSearchClick = (e) => {
    e.preventDefault();
    if (e.target.form[0].value === "" && e.target.form[1].value === "") {
      alert("Please enter something in a field");
    } else {
      setSearchQry1(e.target.form[0].value); // restaurant
      setSearchQry2(e.target.form[1].value); // city
      e.target.form[0].value = "";
      e.target.form[1].value = "";
    }
  };

  // const handleClearQry1 = () => setSearchQry1("");
  // const handleClearQry2 = () => setSearchQry2("");

  const getMarkets = async (searchQry1) => {
    let url = "https://yelp-project-backend.herokuapp.com/api/restaurants";
    try {
      setLoading(true);
      const results = await axios.get(url);
      setMarkets(results.data);
      if (searchQry1) {
        const ddd = results.data.filter((word) => (word.name = searchQry1));
        setMarkets(ddd);
      }
      //console.log(markets);
      setLoading(false);
    } catch (error) {
      return alert("Sorry, data not found  xxxxx");
    }
  };

  const getCities = async () => {
    let url = "https://yelp-project-backend.herokuapp.com/api/cities";
    try {
      setLoading(true);
      const results = await axios.get(url);
      setCities(results.data);
      setLoading(false);
    } catch (error) {
      return alert("Sorry, data not found for cities");
    }
  };

  useEffect(() => {
    getCities();
    getMarkets(searchQry1);
  }, [searchQry1]);

  return (
    <div className="appMainDiv">
      <div className="navigation">
        <Navibar />
        <div className="landingHeaderDiv">
          <br />
          <h3>yelp</h3>
        </div>
      </div>
      <br />
      <div>
        <SearchForm handleSearchClick={handleSearchClick} />
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
            <MarketsList markets={markets} />
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
            <MarketsList
              markets={markets}
              searchQry1={searchQry1}
              searchQry2={searchQry2}
            />
          )}
        </div>
      </Route>

      <Route path="/market/:marketID">
        <Market />
      </Route>

      <Route exact path="/">
        <MapMain markets={markets} />
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
