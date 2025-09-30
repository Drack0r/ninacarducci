// ===== DATA LAYER ===== //
class GalleryDataService {
  static async fetchData() {
    try {
      const response = await fetch("./assets/gallery.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Erreur lors du chargement de la galerie:", error);
      return [];
    }
  }

  static extractUniqueTags(galleryData) {
    const allTags = galleryData.map((item) => item.tag);
    return Array.from(new Set(["Tous", ...allTags]));
  }
}

// ===== FILTERS ===== //
class FilterService {
  static createFilterButton(tag, index, onFilterClick) {
    const tagItem = document.createElement("li");
    tagItem.classList.add("nav-item");

    const tagButton = document.createElement("button");
    tagButton.classList.add("nav-link");
    tagButton.textContent = tag;
    tagButton.dataset.imagesToggle = tag;

    if (index === 0) {
      tagButton.classList.add("active");
    }

    tagButton.addEventListener("click", () => onFilterClick(tag, tagButton));
    tagItem.appendChild(tagButton);

    return tagItem;
  }

  static createFiltersContainer() {
    const container = document.createElement("ul");
    container.classList.add("my-4", "tags-bar", "nav", "nav-pills");
    return container;
  }

  static updateActiveButton(clickedButton) {
    const allButtons = document.querySelectorAll("[data-images-toggle]");
    allButtons.forEach((button) => button.classList.remove("active"));
    clickedButton.classList.add("active");
  }
}

// ===== GALLERY ITEMS ===== //
class GalleryItemService {
  static createImageContainer() {
    const container = document.createElement("div");
    container.classList.add(
      "item-column",
      "mb-4",
      "col-12",
      "col-sm-6",
      "col-md-4",
      "col-lg-4",
      "col-xl-4"
    );
    container.style.transition = "opacity 0.3s ease";
    return container;
  }

  static createImage(element) {
    const image = document.createElement("img");
    image.classList.add("gallery-item");
    image.src = element.image;
    image.alt = element.alt;
    image.height = "424";
    image.width = "424";
    image.dataset.galleryTag = element.tag;
    image.loading = "lazy";
    image.decoding = "async";
    image.fetchPriority = "low";
    return image;
  }

  static createGalleryContainer() {
    const container = document.createElement("div");
    container.classList.add("gallery-items-row", "row");
    return container;
  }
}

// ===== FILTER LOGIC ===== //
class GalleryFilter {
  constructor(galleryItems) {
    this.galleryItems = galleryItems;
  }

  filter(selectedTag, clickedButton) {
    FilterService.updateActiveButton(clickedButton);
    this.applyFilter(selectedTag);
  }

  applyFilter(selectedTag) {
    this.galleryItems.forEach((container) => {
      const image = container.querySelector(".gallery-item");
      const imageTag = image.dataset.galleryTag;

      if (selectedTag === "Tous" || imageTag === selectedTag) {
        this.showItem(container);
      } else {
        this.hideItem(container);
      }
    });
  }

  showItem(container) {
    container.style.display = "block";
    container.style.opacity = "0";
    setTimeout(() => {
      container.style.opacity = "1";
    }, 10);
  }

  hideItem(container) {
    container.style.display = "none";
  }
}

// ===== MAIN GALLERY CLASS ===== //
class Gallery {
  constructor(galleryElement) {
    this.gallery = galleryElement;
    this.galleryItems = [];
    this.filter = null;
    this.init();
  }

  async init() {
    this.gallery.style.display = "block";
    const data = await GalleryDataService.fetchData();

    await this.createFilters(data);
    await this.createGalleryItems(data);

    this.filter = new GalleryFilter(this.galleryItems);
  }

  async createFilters(galleryData) {
    const tags = GalleryDataService.extractUniqueTags(galleryData);
    const filtersContainer = FilterService.createFiltersContainer();

    tags.forEach((tag, index) => {
      const filterButton = FilterService.createFilterButton(
        tag,
        index,
        (selectedTag, button) => this.filter.filter(selectedTag, button)
      );
      filtersContainer.appendChild(filterButton);
    });

    this.gallery.appendChild(filtersContainer);
  }

  async createGalleryItems(galleryData) {
    const galleryContainer = GalleryItemService.createGalleryContainer();
    this.gallery.appendChild(galleryContainer);

    galleryData.forEach((element) => {
      const imageContainer = GalleryItemService.createImageContainer();
      const image = GalleryItemService.createImage(element);

      imageContainer.appendChild(image);
      galleryContainer.appendChild(imageContainer);
      this.galleryItems.push(imageContainer);
    });
  }
}

// ===== INITIALIZATION ===== //
const galleryElement = document.querySelector(".gallery");
new Gallery(galleryElement);
