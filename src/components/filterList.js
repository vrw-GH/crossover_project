const filterList = (itemList, filterID) => {
  itemList = Object.entries(itemList)[0][1];
  let xx = [];
  for (let i = 0; i < itemList.length; i++) {
    if (itemList[i].id === Number(filterID)) {
      xx.push(itemList[i]);
    }
  }
  return xx;
};

export default filterList;
