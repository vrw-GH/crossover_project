import "./App.css";
import React, { useEffect, useState } from "react";
// import Picture from "./components/Picture";
import Navibar from "./components/Navibar";
import MarketsList from "./components/MarketsList";
import { Route } from "react-router-dom";
import { client } from "./components/client";
import Footer from "./components/Footer";
import Market from "./components/Market";
import Contact from "./components/Contact";
import About from "./components/About";
import MapMain from "./components/MapMain";
import Stars from "./components/Stars";
const App = () => {
  const [markets, setMarkets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQry, setSearchQry] = useState("");

  const handleSearchClick = (e) => {
    e.preventDefault();
    if (e.target.form[0].value !== "") {
      setSearchQry(e.target.form[0].value);
      e.target.form[0].value = "";
    } else {
      alert("Please enter something in search");
    }
  };
  
  useEffect(() => {
    const getMarkets = async () => {
      try {
        setLoading(true);
        const result = await client.getEntries();
        setMarkets(result.items);
        console.log(markets);
        setLoading(false);
      } catch (error) {
        return alert("Sorry, it is too early for Christmas");
      }
    };
    getMarkets();
  }, []);

  return (
    <div className="appMainDiv">
      <div className="navigation">
        <Navibar />
        <div className="landingHeaderDiv">
          <br />
          <h3>yelp</h3>
        </div>
        <form>
          <input
            type="search"
            placeholder="Search by Tag"
            aria-label="SearchTag"
          />
          <input
            type="search"
            placeholder="Search by City"
            aria-label="SearchCity"
          />
          <button onClick={(e) => handleSearchClick(e)}>Search</button>
        </form>
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
