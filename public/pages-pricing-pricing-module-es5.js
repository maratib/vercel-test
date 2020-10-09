function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pricing-pricing-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pricing/monthly/monthly.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pricing/monthly/monthly.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPricingMonthlyMonthlyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxLayout=\"row wrap\">\r\n    <div *ngFor=\"let item of items\" fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\" class=\"p-2\">\r\n        <mat-card class=\"pricing-card text-center border-accent p-0 h-100\">\r\n            <h2 class=\"pricing-title my-3\">{{item.name}}</h2>\r\n            <div class=\"bg-accent pricing-header p-3\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                <h1>Ksh {{item.price}}<small> /mo</small></h1>\r\n                <p class=\"desc mb-2\">{{item.desc}}</p>\r\n            </div>\r\n            <div class=\"p-3\">\r\n                <p class=\"py-2\"><span class=\"mx-2 fw-500\">{{item.properties}}</span>Properties</p>\r\n                <p class=\"py-2\"><span class=\"mx-2 fw-500\">{{item.agentProfiles}}</span>Agent Profile<span *ngIf=\"item.agentProfiles != '1'\">s</span></p>\r\n                <p class=\"py-2\" [class.del]=\"item.agencyProfiles == '0'\" [class.text-muted]=\"item.agencyProfiles == '0'\">\r\n                  <span *ngIf=\"item.agencyProfiles != '0'\" class=\"mx-2 fw-500\">{{item.agencyProfiles}}</span>Agency Profile<span *ngIf=\"item.agencyProfiles != '1'\">s</span>\r\n                </p>\r\n                <p class=\"py-2\" [class.del]=\"item.featuredProperties == '0'\" [class.text-muted]=\"item.featuredProperties == '0'\">\r\n                  <span *ngIf=\"item.featuredProperties != '0'\" class=\"mx-2 fw-500\">{{item.featuredProperties}}</span>Featured Properties\r\n                </p>\r\n                <button mat-raised-button color=\"primary\" class=\"mt-3 uppercase\">Buy now</button>\r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pricing/pricing.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pricing/pricing.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPricingPricingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"p-3\">\r\n  <div class=\"theme-container\">\r\n\r\n      <div class=\"my-3\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"text-center\">\r\n          <h1 class=\"uppercase\">Pricing packages</h1>\r\n          <p>Choose a package that's best for your business.</p>\r\n        </div>\r\n        <mat-tab-group mat-align-tabs=\"center\" class=\"pricing-tabs\">\r\n          <mat-tab label=\"MONTHLY\"><app-monthly></app-monthly></mat-tab>\r\n\r\n        </mat-tab-group>\r\n      </div>\r\n\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pricing/yearly/yearly.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pricing/yearly/yearly.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPricingYearlyYearlyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxLayout=\"row wrap\">\r\n    <div *ngFor=\"let item of items\" fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\" class=\"p-2\">\r\n        <mat-card class=\"pricing-card text-center border-accent p-0 h-100\">\r\n            <h2 class=\"pricing-title my-3\">{{item.name}}</h2>\r\n            <div class=\"bg-accent pricing-header p-3\" fxLayout=\"column\" fxLayoutAlign=\"center center\">   \r\n                <h1>$ {{item.price}}<small> /yr</small></h1>\r\n                <p class=\"desc mb-2\">{{item.desc}}</p>\r\n            </div>\r\n            <div class=\"p-3\">\r\n                <p class=\"py-2\"><span class=\"mx-2 fw-500\">{{item.properties}}</span>Properties</p>\r\n                <p class=\"py-2\"><span class=\"mx-2 fw-500\">{{item.agentProfiles}}</span>Agent Profile<span *ngIf=\"item.agentProfiles != '1'\">s</span></p>\r\n                <p class=\"py-2\" [class.del]=\"item.agencyProfiles == '0'\" [class.text-muted]=\"item.agencyProfiles == '0'\">\r\n                  <span *ngIf=\"item.agencyProfiles != '0'\" class=\"mx-2 fw-500\">{{item.agencyProfiles}}</span>Agency Profile<span *ngIf=\"item.agencyProfiles != '1'\">s</span>\r\n                </p>\r\n                <p class=\"py-2\" [class.del]=\"item.featuredProperties == '0'\" [class.text-muted]=\"item.featuredProperties == '0'\">\r\n                  <span *ngIf=\"item.featuredProperties != '0'\" class=\"mx-2 fw-500\">{{item.featuredProperties}}</span>Featured Properties\r\n                </p> \r\n                <button mat-raised-button color=\"primary\" class=\"mt-3 uppercase\">Buy now</button>\r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/pricing/monthly/monthly.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/pricing/monthly/monthly.component.ts ***!
    \************************************************************/

  /*! exports provided: MonthlyComponent */

  /***/
  function srcAppPagesPricingMonthlyMonthlyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonthlyComponent", function () {
      return MonthlyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MonthlyComponent = /*#__PURE__*/function () {
      function MonthlyComponent() {
        _classCallCheck(this, MonthlyComponent);

        this.items = [{
          name: 'free',
          price: 0,
          desc: 'Simplest package to get you started',
          properties: '4',
          agentProfiles: '1',
          HighimpactLogos: 'yes',
          VerifiedTag: 'yes',
          ResponseRate: 'yes',
          ADvalidity: 'yes',
          PersonalizedAssistance: 'yes',
          agencyProfiles: '0',
          featuredProperties: '0'
        }, {
          name: 'basic',
          price: 1000,
          desc: 'The most popular package we offer',
          properties: '10',
          agentProfiles: '3',
          agencyProfiles: '1',
          featuredProperties: '0',
          HighimpactLogos: 'yes',
          VerifiedTag: 'yes',
          ResponseRate: 'yes',
          ADvalidity: 'yes',
          PersonalizedAssistance: 'yes',
          NotificationsTopropertySeekers: 'yes',
          HighResponseRate: 'yes',
          HighSearchRatePosition: 'yes'
        }, {
          name: 'premium',
          price: 3500,
          desc: 'The perfect package for your small business',
          properties: '30',
          agentProfiles: '10',
          agencyProfiles: '5',
          featuredProperties: '50',
          HighimpactLogos: 'yes',
          VerifiedTag: 'yes',
          ResponseRate: 'yes',
          ADvalidity: 'yes',
          PersonalizedAssistance: 'yes',
          NotificationsTopropertySeekers: 'yes',
          HighResponseRate: 'yes',
          HighSearchRatePosition: 'yes',
          Propertydescriptionbyexperts: 'yes',
          FullclientService: 'yes',
          PropertyPhotoshoot: 'yes',
          Property3Dview: 'yes'
        }, {
          name: 'professional',
          price: 5000,
          desc: 'Our most advanced & complete package',
          properties: 'Unlimited',
          agentProfiles: 'Unlimited',
          agencyProfiles: 'Unlimited',
          featuredProperties: 'Unlimited',
          HighimpactLogos: 'Unlimited',
          VerifiedTag: 'Unlimited',
          ResponseRate: 'Unlimited',
          ADvalidity: 'Unlimited',
          PersonalizedAssistance: 'Unlimited',
          NotificationsTopropertySeekers: 'Unlimited',
          HighResponseRate: 'Unlimited',
          HighSearchRatePosition: 'Unlimited',
          Propertydescriptionbyexperts: 'Unlimited',
          FullclientService: 'Unlimited',
          PropertyPhotoshoot: 'Unlimited',
          Property3Dview: 'Unlimited',
          PremiumPopertyPresence: 'Unlimited',
          PremiumTag: 'Unlimited',
          PropertyValuation: 'Unlimited',
          LegalService: 'Unlimited'
        }];
      }

      _createClass(MonthlyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MonthlyComponent;
    }();

    MonthlyComponent.ctorParameters = function () {
      return [];
    };

    MonthlyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-monthly',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./monthly.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pricing/monthly/monthly.component.html"))["default"]
    })], MonthlyComponent);
    /***/
  },

  /***/
  "./src/app/pages/pricing/pricing.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/pages/pricing/pricing.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPricingPricingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaWNpbmcvcHJpY2luZy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/pricing/pricing.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/pricing/pricing.component.ts ***!
    \****************************************************/

  /*! exports provided: PricingComponent */

  /***/
  function srcAppPagesPricingPricingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PricingComponent", function () {
      return PricingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PricingComponent = /*#__PURE__*/function () {
      function PricingComponent() {
        _classCallCheck(this, PricingComponent);
      }

      _createClass(PricingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PricingComponent;
    }();

    PricingComponent.ctorParameters = function () {
      return [];
    };

    PricingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pricing',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./pricing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pricing/pricing.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pricing.component.scss */
      "./src/app/pages/pricing/pricing.component.scss"))["default"]]
    })], PricingComponent);
    /***/
  },

  /***/
  "./src/app/pages/pricing/pricing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/pricing/pricing.module.ts ***!
    \*************************************************/

  /*! exports provided: routes, PricingModule */

  /***/
  function srcAppPagesPricingPricingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PricingModule", function () {
      return PricingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _pricing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pricing.component */
    "./src/app/pages/pricing/pricing.component.ts");
    /* harmony import */


    var _yearly_yearly_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./yearly/yearly.component */
    "./src/app/pages/pricing/yearly/yearly.component.ts");
    /* harmony import */


    var _monthly_monthly_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./monthly/monthly.component */
    "./src/app/pages/pricing/monthly/monthly.component.ts");

    var routes = [{
      path: '',
      component: _pricing_component__WEBPACK_IMPORTED_MODULE_5__["PricingComponent"],
      pathMatch: 'full'
    }];

    var PricingModule = function PricingModule() {
      _classCallCheck(this, PricingModule);
    };

    PricingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_pricing_component__WEBPACK_IMPORTED_MODULE_5__["PricingComponent"], _yearly_yearly_component__WEBPACK_IMPORTED_MODULE_6__["YearlyComponent"], _monthly_monthly_component__WEBPACK_IMPORTED_MODULE_7__["MonthlyComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
    })], PricingModule);
    /***/
  },

  /***/
  "./src/app/pages/pricing/yearly/yearly.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/pricing/yearly/yearly.component.ts ***!
    \**********************************************************/

  /*! exports provided: YearlyComponent */

  /***/
  function srcAppPagesPricingYearlyYearlyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "YearlyComponent", function () {
      return YearlyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var YearlyComponent = /*#__PURE__*/function () {
      function YearlyComponent() {
        _classCallCheck(this, YearlyComponent);

        this.items = [{
          name: 'free',
          price: 0,
          desc: 'Simplest package to get you started',
          properties: '10',
          agentProfiles: '1',
          agencyProfiles: '0',
          featuredProperties: '0'
        }, {
          name: 'basic',
          price: 569,
          desc: 'The most popular package we offer',
          properties: '100',
          agentProfiles: '3',
          agencyProfiles: '1',
          featuredProperties: '0'
        }, {
          name: 'premium',
          price: 929,
          desc: 'The perfect package for your small business',
          properties: '250',
          agentProfiles: '10',
          agencyProfiles: '5',
          featuredProperties: '50'
        }, {
          name: 'professional',
          price: 1899,
          desc: 'Our most advanced & complete package',
          properties: 'Unlimited',
          agentProfiles: 'Unlimited',
          agencyProfiles: 'Unlimited',
          featuredProperties: 'Unlimited'
        }];
      }

      _createClass(YearlyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return YearlyComponent;
    }();

    YearlyComponent.ctorParameters = function () {
      return [];
    };

    YearlyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-yearly',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./yearly.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pricing/yearly/yearly.component.html"))["default"]
    })], YearlyComponent);
    /***/
  }
}]);
//# sourceMappingURL=pages-pricing-pricing-module-es5.js.map