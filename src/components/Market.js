import axios from "axios";
import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
// import client from "./client";
// import Maps from "./Maps";

const Market = () => {
  const { marketID } = useParams();
  const [market, setMarket] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMarket = async () => {
      try {
        setLoading(true);
        // const result = await client.getEntry(marketID);
        const results = await axios.get(
          `https://yelp-project-backend.herokuapp.com/api/restaurants/${marketID}`
          // json ie = {"id":1,"name":"Schweinske","city_id":0}
        );
        console.log("market:", results);
        setMarket(results.data[0]);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        return alert("Sorry, no data");
      }
    };
    getMarket();
  }, [marketID]);

  return (
    <div>
      {!loading && market ? (
        <div>
          <br />

          <h1>Restaurant: {market.name}</h1>
          <h1>City: {market.city_id}</h1>
          <div>
            {" "}
            {/* <img src={market.fields.picture[0].fields.file.url} alt="" />{" "} */}
          </div>
          {/* <Maps
            lat={market.fields.location.lat}
            lon={market.fields.location.lon}
          /> */}
        </div>
      ) : (
        <div className="bouncer">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default Market;
//
