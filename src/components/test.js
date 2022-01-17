tArr = new Array(6);

tArr.map((element) => {
  const getImageURL = async () => {
    let img = "no image";
    let imgParam = "christmas";
    try {
      img = await axios.get(`https://loremflickr.com/500/500/${imgParam}`);
      img = img.request.responseURL;
      element.image = img;
    } catch (error) {
      console.log("no image");
    }
  };
  getImageURL();
  return element;
});
