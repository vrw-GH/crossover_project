import axios from "axios";
import { useEffect, useState } from "react";

const ShowImage = () => {
  const [image, setImage] = useState(
    "https://loremflickr.com/500/500/restaurant"
  );
  const GetImage = async () => {
    try {
      let img = await axios.get(image);
      img = img.request.responseURL;
      console.log(img);
      setImage(img);
    } catch (error) {
      console.log("no image");
    }
  };
  useEffect(() => {
    GetImage();
  }, []);

  return (
    <div>
      <image src={image} alt="random image">
        -- {image} --
      </image>
    </div>
  );
};

export default ShowImage;
