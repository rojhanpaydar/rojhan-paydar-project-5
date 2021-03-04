import React from "react";

function Image({ image }) {
  return (
    <div>
      <img src={image.featured_image} alt={image.name} />
    </div>
  );
}

export default Image;
