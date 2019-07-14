(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["podium-podium-module"],{

/***/ "./src/app/podium/podium.module.ts":
/*!*****************************************!*\
  !*** ./src/app/podium/podium.module.ts ***!
  \*****************************************/
/*! exports provided: PodiumPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodiumPageModule", function() { return PodiumPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _podium_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./podium.page */ "./src/app/podium/podium.page.ts");







var routes = [
    {
        path: '',
        component: _podium_page__WEBPACK_IMPORTED_MODULE_6__["PodiumPage"]
    }
];
var PodiumPageModule = /** @class */ (function () {
    function PodiumPageModule() {
    }
    PodiumPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_podium_page__WEBPACK_IMPORTED_MODULE_6__["PodiumPage"]]
        })
    ], PodiumPageModule);
    return PodiumPageModule;
}());



/***/ }),

/***/ "./src/app/podium/podium.page.html":
/*!*****************************************!*\
  !*** ./src/app/podium/podium.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Classement</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n\r\n\r\n\r\n  <ion-grid>\r\n    <ion-row *ngFor=\"let rank of ranks; let i = index\">\r\n      <ion-col size=\"2\">{{i+1}}</ion-col>\r\n      <ion-col size=\"2\">\r\n        <img src=\"{{rank.img}}\" height=\"20px\">\r\n      </ion-col>\r\n      <ion-col size=\"8\">{{rank.name}}</ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/podium/podium.page.scss":
/*!*****************************************!*\
  !*** ./src/app/podium/podium.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvZGl1bS9wb2RpdW0ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/podium/podium.page.ts":
/*!***************************************!*\
  !*** ./src/app/podium/podium.page.ts ***!
  \***************************************/
/*! exports provided: PodiumPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodiumPage", function() { return PodiumPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PodiumPage = /** @class */ (function () {
    function PodiumPage() {
        this.ranks = [
            {
                img: 'assets/rank1.png',
                name: "Jean Sarkozy"
            },
            {
                img: 'assets/rank2.png',
                name: "Christophe Lambert"
            },
            {
                img: 'assets/rank3.png',
                name: "Bernadette Chirac"
            },
            {
                img: 'assets/poop.png',
                name: "Anne Hidalgo"
            },
            {
                img: 'assets/poop.png',
                name: "Anne Hidalgo"
            },
            {
                img: 'assets/poop.png',
                name: "Anne Hidalgo"
            },
            {
                img: 'assets/poop.png',
                name: "Prince William"
            },
            {
                img: 'assets/poop.png',
                name: "Naël Messaoudene"
            },
            {
                img: 'assets/poop.png',
                name: "Jean Petitjean"
            },
            {
                img: 'assets/poop.png',
                name: "Crotteur Man"
            },
            {
                img: 'assets/poop.png',
                name: "Wanna Shit"
            },
            {
                img: 'assets/poop.png',
                name: "Verre d'eau"
            },
            {
                img: 'assets/poop.png',
                name: "Verre de Cidre"
            },
            {
                img: 'assets/poop.png',
                name: "Alphonse Brown"
            },
            {
                img: 'assets/poop.png',
                name: "Babar Terroriste"
            },
            {
                img: 'assets/poop.png',
                name: "Tanhna Tropri"
            },
            {
                img: 'assets/poop.png',
                name: "Gros maigre"
            },
            {
                img: 'assets/poop.png',
                name: "Quasiment fini"
            },
            {
                img: 'assets/poop.png',
                name: "Taspa Komençai"
            },
            {
                img: 'assets/poop.png',
                name: "Untruc Carré"
            }
        ];
    }
    PodiumPage.prototype.ngOnInit = function () {
    };
    PodiumPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-podium',
            template: __webpack_require__(/*! ./podium.page.html */ "./src/app/podium/podium.page.html"),
            styles: [__webpack_require__(/*! ./podium.page.scss */ "./src/app/podium/podium.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PodiumPage);
    return PodiumPage;
}());



/***/ })

}]);
//# sourceMappingURL=podium-podium-module.js.map