const filterByQuery = (propedList, city, tag, restName) => {
  // selection where -  city AND tag AND rest   !
  console.log(city, tag, restName);

  let xx = [];
  if (city === "" && tag === "" && restName === "") {
    xx = [...propedList];
  } else {
    city = Number(city);
    tag = Number(tag);
    restName = restName.toLowerCase();
    let list = [...propedList];
    for (let i = 0; i < list.length; i++) {
      let iCity = list[i].city_id + 1; // to adjust for 0 based id list in restaurants database!
      let iTag = list[i].tag_id;
      let iRestName = list[i].name.toLowerCase(); // search on name (there can be similar)
      if (city && tag && restName) {
        if (iCity === city && iTag === tag && iRestName === restName) {
          xx.push(list[i]);
        }
      } else if (city && restName) {
        if (iCity === city && iRestName === restName) {
          xx.push(list[i]);
        }
      } else if (tag && restName) {
        if (iTag === tag && iRestName === restName) {
          xx.push(list[i]);
        }
      } else if (city && tag) {
        if (iCity === city && iTag === tag) {
          xx.push(list[i]);
        }
      } else {
        if (city && iCity === city) {
          xx.push(list[i]);
        } else if (tag && iTag === tag) {
          xx.push(list[i]);
        } else if (restName && iRestName === restName) {
          xx.push(list[i]);
        }
      }
    }
  }
  return xx;
};

export default filterByQuery;
