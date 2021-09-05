import { observable, action } from "mobx";

export const OrientationMode = {
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical",
};

class AppSettings {
  imageGallery = observable({ orientation: OrientationMode.HORIZONTAL });

  imageGalleryVertical = action(() => {
    this.imageGallery.orientation = OrientationMode.VERTICAL;
  });

  imageGalleryHorizontal = action(() => {
    this.imageGallery.orientation = OrientationMode.HORIZONTAL;
  });
}
export default new AppSettings();
