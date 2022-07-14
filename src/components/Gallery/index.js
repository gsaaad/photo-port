import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import photo from "../../assets/small/commercial/0.jpg";
function Gallery() {
  const currentCategory = {
    Name: "Commercial",
    Description:
      "Photos of grocery stores, food trucks, and other commercial projects",
  };
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.Name)}</h1>
      <p>{currentCategory.Name}</p>
      <div className="flex-row">
        <img src={photo} alt="" className="img-thumbnail mx-1" />
      </div>
    </section>
  );
}

export default Gallery;
