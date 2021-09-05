import React from "react";
import { observer } from "mobx-react";
import GalleryItem from "../gallery-item/GalleryItem";
import GalleryItemPlaceholder from "../gallery-item/GalleryItemPlaceholder";
import AppSettings from "../../stores/appSettings";
import GalleryStore from "../../stores/galleryStore";

const ImageGallery = () => {
  const { orientation } = AppSettings.imageGallery;

  const containerProps = {
    className: [
      "gallery-container",
      orientation === "vertical" ? "vertical" : "horizontal",
    ].join(" "),
  };
  console.log(`Loading state ${GalleryStore.isLoading}`);
  return (
    <>
      <div {...containerProps}>
        {GalleryStore.display.items.map((item) =>
          GalleryStore.isLoading.status ? (
            <GalleryItemPlaceholder />
          ) : (
            <GalleryItem {...item} />
          )
        )}
      </div>
      <button
        className="refresh-gallery"
        onClick={() => GalleryStore.pickRandomItems()}
      >
        Refresh
      </button>
    </>
  );
};

export default observer(ImageGallery);
