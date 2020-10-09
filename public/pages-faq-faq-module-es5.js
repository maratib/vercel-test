function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-faq-faq-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/faq/faq.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/faq/faq.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesFaqFaqComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"p-3\">\r\n    <div class=\"theme-container\">\r\n  \r\n        <div class=\"my-3\">\r\n          <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"text-center\">  \r\n            <h1 class=\"uppercase\">Frequently Asked Questions</h1>             \r\n            <p>Click on a question to expand and reveal the answer.</p>\r\n          </div>\r\n          <mat-accordion multi=\"true\">              \r\n            <mat-expansion-panel *ngFor=\"let faq of faqs; let i = index;\"  [expanded]=\"i === 0\">\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                    <div class=\"fw-500\">{{faq.question}}</div>\r\n                    <div fxShow=\"false\" fxShow.gt-sm=\"true\" class=\"text-muted\">\r\n                        {{faq.status}}  \r\n                    </div>\r\n                </mat-panel-title>               \r\n              </mat-expansion-panel-header>          \r\n                <p>{{faq.answer}} </p>\r\n                <div class=\"divider\"></div>\r\n                <p class=\"mt-2 mb-0\"><small class=\"text-muted\">Was this answer helpful? <button mat-button>Yes</button><button mat-button>No</button></small></p>\r\n            </mat-expansion-panel>\r\n          </mat-accordion>\r\n        </div> \r\n\r\n    </div>\r\n</div>\r\n\r\n<app-get-in-touch></app-get-in-touch>";
    /***/
  },

  /***/
  "./src/app/pages/faq/faq.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/pages/faq/faq.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesFaqFaqComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZhcS9mYXEuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/faq/faq.component.ts":
  /*!********************************************!*\
    !*** ./src/app/pages/faq/faq.component.ts ***!
    \********************************************/

  /*! exports provided: FaqComponent */

  /***/
  function srcAppPagesFaqFaqComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaqComponent", function () {
      return FaqComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FaqComponent = /*#__PURE__*/function () {
      function FaqComponent() {
        _classCallCheck(this, FaqComponent);

        this.faqs = [{
          question: 'How long does it take my property to be visible to the site?',
          status: 'Question about listing',
          answer: 'Once you have submitted your listing, it must undergo screening for verification. Only verified listings are approved and will appear on the site.'
        }, {
          question: ' What is the difference between a real estate agent and a real estate broker?',
          status: 'Agents FAQs',
          answer: 'Real estate agents are licensed to facilitate real estate transactions, are paid commissions for their sales, and work for brokerages.Brokers are more experienced and qualified and can work as independent agents or have other agents work for them. '
        }, {
          question: 'How long does the loan process take?',
          status: 'Question about renting',
          answer: 'This will depend with loan provider. Each provider has different set conditions.Contact your loan provider for more details'
        }, {
          question: 'When buying a new home, what upgrades should we go for?',
          status: 'Question about selling',
          answer: 'Go for kitchen, floor, lighting, energy saving, social amenities, proximity to transport among others. Ensure you choose several upgrades for a new home.'
        }, {
          question: 'What benefits do I receive from private mortgage insurance?',
          status: 'Question about renting',
          answer: 'Private mortgage insurance enables borrowers to gain access to the housing market more quickly, by allowing down payments of less than 20%, and it protects lenders against loss if a borrower default.'
        }, {
          question: ' Why should I use a real estate salesperson?',
          status: 'Agents FAQs',
          answer: 'A real estate salesperson is more than just a “sales person.” They act on your behalf as your agent, providing you with advice and guidance and doing a job – helping you buy or sell a home. While it is true they get paid for what they do, so do other professions that provide advice, guidance, and have a service to sell –such as Certified Public Accountants and Attorneys.'
        }, {
          question: 'Can a home depreciate in value?',
          status: 'Question about selling',
          answer: 'Homes absolutely depreciate in value. As a physical asset, time takes its toll on any and every home on the market.'
        }];
      }

      _createClass(FaqComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FaqComponent;
    }();

    FaqComponent.ctorParameters = function () {
      return [];
    };

    FaqComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-faq',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./faq.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/faq/faq.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./faq.component.scss */
      "./src/app/pages/faq/faq.component.scss"))["default"]]
    })], FaqComponent);
    /***/
  },

  /***/
  "./src/app/pages/faq/faq.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/faq/faq.module.ts ***!
    \*****************************************/

  /*! exports provided: routes, FaqModule */

  /***/
  function srcAppPagesFaqFaqModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaqModule", function () {
      return FaqModule;
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


    var _faq_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./faq.component */
    "./src/app/pages/faq/faq.component.ts");

    var routes = [{
      path: '',
      component: _faq_component__WEBPACK_IMPORTED_MODULE_5__["FaqComponent"],
      pathMatch: 'full'
    }];

    var FaqModule = function FaqModule() {
      _classCallCheck(this, FaqModule);
    };

    FaqModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_faq_component__WEBPACK_IMPORTED_MODULE_5__["FaqComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
    })], FaqModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-faq-faq-module-es5.js.map