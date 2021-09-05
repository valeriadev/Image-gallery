import React from "react";
import ImagePlaceholder from "../../assets/image_placeholder.png";
import { ReactComponent as Heart } from "../../assets/heart.svg";

const GalleryItemPlaceholder = () => {
  return (
    <div className="gallery-item-container-placeholder">
      <img
        className="gallery-item-img-placeholder"
        src={ImagePlaceholder}
        alt="placeholder"
      ></img>
      <p className="gallery-item-description-placeholder">
        Enim laborum Lorem deserunt sint aliqua elit nosturd sint tempor.
      </p>
      <div className="gallery-item-likes-placeholder">
        <Heart />
        <div className="gallery-item-num-likes-placeholder">145</div>
      </div>
    </div>
  );
};

export default GalleryItemPlaceholder;
