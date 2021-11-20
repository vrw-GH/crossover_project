const filterList = (restaurants, searchQry1, searchQry2, searchQry3) => {
  console.log(restaurants, searchQry1, searchQry2, searchQry3);
  //let itemList = Object.entries(restaurants)[0][1];
  let xx = [];
  for (let i = 0; i < restaurants.length; i++) {
    if (restaurants[i].id === Number(searchQry3)) {
      xx.push(restaurants[i]);
    }
  }
  for (let i = 0; i < restaurants.length; i++) {
    if (restaurants[i].city_id === Number(searchQry1)) {
      xx.push(restaurants[i]);
    }
  }
  console.log(xx);
  return xx;
};

export default filterList;
