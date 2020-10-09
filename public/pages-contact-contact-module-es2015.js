(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contact-contact-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-image [backgroundImage]=\"'assets/images/others/contact.jpg'\"\r\n                  [bgImageAnimate]=\"false\"\r\n                  [contentOffsetToTop]=\"true\"\r\n                  [title]=\"'Contact Us'\"\r\n                  [desc]=\"'Got a question? We\\'ll give you straight answer'\">\r\n</app-header-image>\r\n\r\n<div class=\"px-3\">\r\n\r\n    <div class=\"theme-container\">\r\n        <mat-card class=\"main-content-header mb-5\">\r\n\r\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-around\">\r\n                <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\">\r\n                    <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"text-center\">\r\n                        <mat-icon color=\"primary\" class=\"mat-icon-lg\">home</mat-icon>\r\n                        <h3 class=\"primary-color py-1\">ADDRESS :</h3>\r\n                        <span>City Square,KICC,Nairobi</span>\r\n                    </div>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" ngClass.xs=\"mt-2\">\r\n                    <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                        <mat-icon color=\"primary\" class=\"mat-icon-lg\">call</mat-icon>\r\n                        <h3 class=\"primary-color py-1\">PHONES :</h3>\r\n                        <span>(+254) 799 770 043</span>\r\n                    </div>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" ngClass.xs=\"mt-2\">\r\n                    <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                        <mat-icon color=\"primary\" class=\"mat-icon-lg\">mail_outline</mat-icon>\r\n                        <h3 class=\"primary-color py-1\">E-MAIL :</h3>\r\n                        <span>sales@bomapoint.com</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"divider w-100 mt-3\"></div>\r\n                <h3 class=\"w-100 text-center py-3\">CONTACT US</h3>\r\n\r\n                <form [formGroup]=\"contactForm\" (ngSubmit)=\"onContactFormSubmit(contactForm.value)\" fxLayout=\"row wrap\">\r\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\" ngClass.sm=\"mt-1\" ngClass.xs=\"mt-1\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Name</mat-label>\r\n                            <input matInput placeholder=\"Name\" formControlName=\"name\" required>\r\n                            <mat-error *ngIf=\"contactForm.controls.name.errors?.required\">Name is required</mat-error>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\" ngClass.sm=\"mt-1\" ngClass.xs=\"mt-1\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Email</mat-label>\r\n                            <input matInput placeholder=\"Email\" formControlName=\"email\" required>\r\n                            <mat-error *ngIf=\"contactForm.controls.email.errors?.required\">Email is required</mat-error>\r\n                            <mat-error *ngIf=\"contactForm.controls.email.hasError('invalidEmail')\">Invalid email address</mat-error>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\" ngClass.sm=\"mt-1\" ngClass.xs=\"mt-1\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Phone</mat-label>\r\n                            <input matInput placeholder=\"Phone\" formControlName=\"phone\" required>\r\n                            <mat-error *ngIf=\"contactForm.controls.phone.errors?.required\">Phone is required</mat-error>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div fxFlex=\"100\" class=\"px-1 mt-1\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Message</mat-label>\r\n                            <textarea matInput placeholder=\"Message\" formControlName=\"message\" required rows=\"7\"></textarea>\r\n                            <mat-error *ngIf=\"contactForm.controls.message.errors?.required\">Message is required</mat-error>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div class=\"w-100 py-2 text-center\">\r\n                        <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\">Submit</button>\r\n                    </div>\r\n                </form>\r\n\r\n            </div>\r\n\r\n            <div class=\"mt-5 contact-map\">\r\n                <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [mapTypeControl]=\"true\" [fullscreenControl]=\"true\">\r\n                    <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [markerDraggable]=\"false\" ></agm-marker>\r\n                </agm-map>\r\n            </div>\r\n\r\n        </mat-card>\r\n    </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/pages/contact/contact.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/contact/contact.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".contact-map .sebm-google-map-container {\n  height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3QtbWFwIC5zZWJtLWdvb2dsZS1tYXAtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/theme/utils/app-validators */ "./src/app/theme/utils/app-validators.ts");




let ContactComponent = class ContactComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.lat = 40.678178;
        this.lng = -73.944158;
        this.zoom = 12;
    }
    ngOnInit() {
        this.contactForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_3__["emailValidator"]])],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    onContactFormSubmit(values) {
        if (this.contactForm.valid) {
            console.log(values);
        }
    }
};
ContactComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
ContactComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./contact.component.scss */ "./src/app/pages/contact/contact.component.scss")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/pages/contact/contact.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/contact/contact.module.ts ***!
  \*************************************************/
/*! exports provided: routes, ContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModule", function() { return ContactModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact.component */ "./src/app/pages/contact/contact.component.ts");







const routes = [
    { path: '', component: _contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"], pathMatch: 'full' }
];
let ContactModule = class ContactModule {
};
ContactModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"]
        ]
    })
], ContactModule);



/***/ })

}]);
//# sourceMappingURL=pages-contact-contact-module-es2015.js.map