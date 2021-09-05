import React from "react";
import { ReactComponent as Heart } from "../../assets/heart.svg";

const GalleryItem = ({ url, description, likes }) => {
  const [isMouseOver, setIsMouseOver] = React.useState(false);
  return (
    <div
      className="gallery-item-container"
      style={{
        backgroundImage: `url(${url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      onMouseEnter={() => {
        setIsMouseOver(true);
      }}
      onMouseLeave={() => {
        setIsMouseOver(false);
      }}
    >
      <p
        className="gallery-item-description"
        style={{ display: isMouseOver ? "block" : "none" }}
      >
        {description}
      </p>

      <div className="gallery-item-likes">
        <Heart />
        <div className="gallery-item-num-likes">{likes}</div>
      </div>
    </div>
  );
};

export default GalleryItem;
