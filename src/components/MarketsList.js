import { Link } from "react-router-dom";

const MarketsList = ({ markets, searchQry1, searchQry2 }) => {
  const filterMarkets = (restaurant) => {
    if (!searchQry1) return markets;
    return restaurant.name.toLowerCase() === searchQry1.toLowerCase();
  };

  //console.log(markets);
  return (
    <div className="marketListContainer">
      {markets.filter(filterMarkets).map(
        // ({ fields: { title, city, country, picture }, sys: { id } }) => {
        ({ id, name, city_id }) => {
          return (
            <Link to={`/market/${id}`} className="marketListItem" key={id}>
              <div className="thumbnail">
                {/* <img src={picture[0].fields.file.url} alt={title} /> */}
              </div>
              <div className="textContainer">
                <h2>{name}</h2>

                <div className="cityTag">
                  <h4>{city_id}</h4>
                </div>
              </div>
            </Link>
          );
        }
      )}
    </div>
  );
};

export default MarketsList;
