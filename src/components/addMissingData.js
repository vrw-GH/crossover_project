import axios from "axios";

const addMissingData = (tArr, tags) => {
  const getTag = (tag_id) => {
    let tagObj = tags.find((el) => el.id === Number(tag_id) + 1);
    let tag = tagObj === undefined ? "not found" : tagObj.name;
    return tag;
  };

  tArr.map((element) => {
    const getImageURL = async () => {
      let img = "no image";
      let imgParam = tags ? getTag(element.tag_id) : "restaurant";
      try {
        img = await axios.get(`https://loremflickr.com/500/500/${imgParam}`);
        img = img.request.responseURL;
        element.image = img;
        element.tag_id = Math.floor(Math.random() * 10) + 1; // avoid 0
      } catch (error) {
        alert("no image");
      }
    };
    getImageURL();
    return element;
  });
  return tArr;
};

export default addMissingData;
