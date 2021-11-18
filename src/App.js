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
import SearchForm from "./components/form";
//import Stars from "./components/Stars";

const App = () => {
  const [markets, setMarkets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQry1, setSearchQry1] = useState("");
  const [searchQry2, setSearchQry2] = useState("");

  const handleSearchClick = (e) => {
    e.preventDefault();
    console.log(e.target.form[0].value);
    console.log(e.target.form[1].value);
    if (e.target.form[0].value === "" || e.target.form[1].value === "") {
      alert("Please enter something in search");
    } else {
      // setSearchQry1(() => e.target.form[0].value);
      // setSearchQry2(() => e.target.form[1].value);
      setSearchQry1(e.target.form[0].value);
      setSearchQry2(e.target.form[1].value);
      console.log(searchQry1);
      console.log(searchQry2);
      // e.target.form[0].value = "";
      // e.target.form[1].value = "";
    }
  };

  const handleClearQry1 = () => setSearchQry1("");
  const handleClearQry2 = () => setSearchQry2("");

  useEffect(() => {
    const getMarkets = async () => {
      try {
        setLoading(true);
        const result = await client.getEntries();
        setMarkets(result.items);
        //console.log(markets);
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
        <Navibar
          handleSearchClick={handleSearchClick}
          handleClearQry1={handleClearQry1}
          handleClearQry2={handleClearQry2}
        />
        <div className="landingHeaderDiv">
          <br />
          <h3>yelp</h3>
        </div>
      </div>
      <br />
      <div>
        <SearchForm
          handleSearchClick={handleSearchClick}
          handleClearQry1={handleClearQry1}
          handleClearQry2={handleClearQry2}
        />
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
