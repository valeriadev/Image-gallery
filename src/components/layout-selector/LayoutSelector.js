import React from "react";
import { observer } from "mobx-react";
import AppSettings, { OrientationMode } from "../../stores/appSettings";
import { ReactComponent as GridView } from "../../assets/grid_view.svg";
import { ReactComponent as ListView } from "../../assets/list_view.svg";

const activeClassName = "layout-button-active";
const inactiveClassName = "layout-button-inactive";

const LayoutSelector = () => {
  const changeToVertical = () => AppSettings.imageGalleryVertical();
  const changeToHorizontal = () => AppSettings.imageGalleryHorizontal();
  const isVertical =
    AppSettings.imageGallery.orientation === OrientationMode.VERTICAL;

  return (
    <div className="layout-container">
      <button
        className={!isVertical ? activeClassName : inactiveClassName}
        onClick={changeToHorizontal}
      >
        <GridView></GridView>
      </button>
      <button
        className={isVertical ? activeClassName : inactiveClassName}
        onClick={changeToVertical}
      >
        <ListView></ListView>
      </button>
    </div>
  );
};

export default observer(LayoutSelector);
