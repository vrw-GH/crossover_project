// import * as contentful from "contentful";
import axios from "axios";

// export const client = contentful.createClient({
//   space: process.env.REACT_APP_SPACE_ID,
//   accessToken: process.env.REACT_APP_ACCESS_TOKEN,
// });

const client = axios.get(
  "https://yelp-project-backend.herokuapp.com/api/restaurants"
);

export default client;
