import { observable, action } from "mobx";

class GalleryStore {
  gallery = { items: [] };
  display = observable({ items: [] });
  isLoading = observable({ status: true });

  constructor() {
    fetch("https://api.jonathanczyzyk.com/api/v1/images/small", {
      method: "GET",
      headers: {
        "x-api-key": "api-key-657bc3f0-4f74-48ff-8269-5d4e54b05d08",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(this.handleApiResponse)
      .catch((err) => {
        //TODO: handle failure
      })
      .finally(() => {
        this.changeLoadingState(false);
      });
  }

  handleApiResponse = (galleryItems) => {
    this.gallery.items = galleryItems;
    this.pickRandomItems();
  };

  pickRandomIndexes(maxNum, count = 5) {
    const indexes = [];
    while (indexes.length < count) {
      const index = Math.floor(Math.random() * (maxNum + 1));
      !indexes.includes(index) && indexes.push(index);
    }
    return indexes;
  }

  getItemsByIndexes(items, indexes) {
    return indexes.map((i) => items[i]);
  }

  pickRandomItems = action(() => {
    const indexes = this.pickRandomIndexes(this.gallery.items.length);
    this.display.items = this.getItemsByIndexes(this.gallery.items, indexes);
  });

  changeLoadingState = action((value) => {
    this.isLoading.status = value;
  });
}

export default new GalleryStore();
