function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/app.models.ts":
  /*!*******************************!*\
    !*** ./src/app/app.models.ts ***!
    \*******************************/

  /*! exports provided: Property, Area, AdditionalFeature, Location, Price, Gallery, Plan, Video, Pagination */

  /***/
  function srcAppAppModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Property", function () {
      return Property;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Area", function () {
      return Area;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdditionalFeature", function () {
      return AdditionalFeature;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Location", function () {
      return Location;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Price", function () {
      return Price;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Gallery", function () {
      return Gallery;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Plan", function () {
      return Plan;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Video", function () {
      return Video;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Pagination", function () {
      return Pagination;
    });

    var Property = function Property(id, title, desc, propertyType, propertyStatus, city, zipCode, neighborhood, street, location, formattedAddress, features, featured, priceDollar, priceEuro, bedrooms, bathrooms, garages, area, yearBuilt, ratingsCount, ratingsValue, additionalFeatures, gallery, plans, videos, published, lastUpdate, views) {
      _classCallCheck(this, Property);

      this.id = id;
      this.title = title;
      this.desc = desc;
      this.propertyType = propertyType;
      this.propertyStatus = propertyStatus;
      this.city = city;
      this.zipCode = zipCode;
      this.neighborhood = neighborhood;
      this.street = street;
      this.location = location;
      this.formattedAddress = formattedAddress;
      this.features = features;
      this.featured = featured;
      this.priceDollar = priceDollar;
      this.priceEuro = priceEuro;
      this.bedrooms = bedrooms;
      this.bathrooms = bathrooms;
      this.garages = garages;
      this.area = area;
      this.yearBuilt = yearBuilt;
      this.ratingsCount = ratingsCount;
      this.ratingsValue = ratingsValue;
      this.additionalFeatures = additionalFeatures;
      this.gallery = gallery;
      this.plans = plans;
      this.videos = videos;
      this.published = published;
      this.lastUpdate = lastUpdate;
      this.views = views;
    }; // export class Property {
    //     public id: number;
    //     public title: string; 
    //     public desc: string;
    //     public propertyType: string;
    //     public propertyStatus: string[];
    //     public city: string;
    //     public zipCode: string;
    //     public neighborhood: string[];
    //     public street: string[];
    //     public location: Location;
    //     public formattedAddress: string;
    //     public features: string[];
    //     public featured: boolean;
    //     public priceDollar: Price;
    //     public priceEuro: Price;
    //     public bedrooms: number;
    //     public bathrooms: number;
    //     public garages: number;
    //     public area: Area;
    //     public yearBuilt: number;
    //     public ratingsCount: number;
    //     public ratingsValue: number;
    //     public additionalFeatures: AdditionalFeature[];
    //     public gallery: Gallery[];
    //     public plans: Plan[];
    //     public videos: Video[];
    //     public published: string;
    //     public lastUpdate: string;
    //     public views: number
    // }


    var Area = function Area(id, value, unit) {
      _classCallCheck(this, Area);

      this.id = id;
      this.value = value;
      this.unit = unit;
    };

    var AdditionalFeature = function AdditionalFeature(id, name, value) {
      _classCallCheck(this, AdditionalFeature);

      this.id = id;
      this.name = name;
      this.value = value;
    };

    var Location = function Location(id, lat, lng) {
      _classCallCheck(this, Location);

      this.id = id;
      this.lat = lat;
      this.lng = lng;
    };

    var Price = function Price() {
      _classCallCheck(this, Price);
    };

    var Gallery = function Gallery(id, small, medium, big) {
      _classCallCheck(this, Gallery);

      this.id = id;
      this.small = small;
      this.medium = medium;
      this.big = big;
    };

    var Plan = function Plan(id, name, desc, area, rooms, baths, image) {
      _classCallCheck(this, Plan);

      this.id = id;
      this.name = name;
      this.desc = desc;
      this.area = area;
      this.rooms = rooms;
      this.baths = baths;
      this.image = image;
    };

    var Video = function Video(id, name, link) {
      _classCallCheck(this, Video);

      this.id = id;
      this.name = name;
      this.link = link;
    };

    var Pagination = function Pagination(page, perPage, prePage, nextPage, total, totalPages) {
      _classCallCheck(this, Pagination);

      this.page = page;
      this.perPage = perPage;
      this.prePage = prePage;
      this.nextPage = nextPage;
      this.total = total;
      this.totalPages = totalPages;
    };
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map