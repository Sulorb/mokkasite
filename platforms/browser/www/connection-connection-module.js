(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["connection-connection-module"],{

/***/ "./src/app/connection/connection.module.ts":
/*!*************************************************!*\
  !*** ./src/app/connection/connection.module.ts ***!
  \*************************************************/
/*! exports provided: ConnectionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionPageModule", function() { return ConnectionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _connection_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./connection.page */ "./src/app/connection/connection.page.ts");







var routes = [
    {
        path: '',
        component: _connection_page__WEBPACK_IMPORTED_MODULE_6__["ConnectionPage"]
    }
];
var ConnectionPageModule = /** @class */ (function () {
    function ConnectionPageModule() {
    }
    ConnectionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_connection_page__WEBPACK_IMPORTED_MODULE_6__["ConnectionPage"]]
        })
    ], ConnectionPageModule);
    return ConnectionPageModule;
}());



/***/ }),

/***/ "./src/app/connection/connection.page.html":
/*!*************************************************!*\
  !*** ./src/app/connection/connection.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n      <ion-toolbar>\n        <ion-title class=\"ion-text-center\">💩</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    \n    <ion-content>\n    \n      <ion-item>  \n        <ion-label style=\"color: #582900\">Pseudo</ion-label>\n        <ion-input></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label style=\"color: #582900\">Mot de passe</ion-label>\n        <ion-input></ion-input>\n      </ion-item>\n    \n      <ion-button class=\"btncolor\"(click)=\"connexion()\" >Se connecter</ion-button>\n      <ion-button class=\"btncolor\" (click)=\"inscription()\">Inscription</ion-button>\n    \n    </ion-content>"

/***/ }),

/***/ "./src/app/connection/connection.page.scss":
/*!*************************************************!*\
  !*** ./src/app/connection/connection.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.takePhoto {\n      width: 100px;\n      height: 100px;\n      border: 5px solid #582900;\n      border-radius: 50%;\n      background: transparent; }\n.btncolor {\n      --background: var(--ion-color-btn); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29ubmVjdGlvbi9jb25uZWN0aW9uLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9hbGV4aXMvRGVza3RvcC9Jb25pYy9pZXNhLTIwMTktYjMtbW9iaWxlLXByb2plY3Qvc291cmNlcy9TaGl0U2Nhbi9zcmMvYXBwL2Nvbm5lY3Rpb24vY29ubmVjdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLDJCQUEyQixFQUFBO0FBSTNCO0VBQ0Esc0NBQXNDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb25uZWN0aW9uL2Nvbm5lY3Rpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnRha2VQaG90byB7XG4gIMKgwqDCoMKgd2lkdGg6IDEwMHB4O1xuICDCoMKgwqDCoGhlaWdodDogMTAwcHg7XG4gIMKgwqDCoMKgYm9yZGVyOiA1cHggc29saWQgIzU4MjkwMDtcbiAgwqDCoMKgwqBib3JkZXItcmFkaXVzOiA1MCU7XG4gIMKgwqDCoMKgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cblxuLmJ0bmNvbG9yIHtcbiAgwqDCoMKgwqAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1idG4pOyB9XG4iLCIudGFrZVBob3RvIHtcbiAgICDCoMKgwqDCoHdpZHRoOiAxMDBweDtcbiAgICDCoMKgwqDCoGhlaWdodDogMTAwcHg7XG4gICAgwqDCoMKgwqBib3JkZXI6IDVweCBzb2xpZCAjNTgyOTAwO1xuICAgIMKgwqDCoMKgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIMKgwqDCoMKgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIC5idG5jb2xvciB7XG4gICAgwqDCoMKgwqAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1idG4pO1xuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/connection/connection.page.ts":
/*!***********************************************!*\
  !*** ./src/app/connection/connection.page.ts ***!
  \***********************************************/
/*! exports provided: ConnectionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionPage", function() { return ConnectionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var ConnectionPage = /** @class */ (function () {
    function ConnectionPage(router, navCtrl) {
        this.router = router;
        this.navCtrl = navCtrl;
    }
    ConnectionPage.prototype.ngOnInit = function () {
    };
    ConnectionPage.prototype.connexion = function () {
        this.router.navigate(['/home']);
    };
    ConnectionPage.prototype.inscription = function () {
        this.navCtrl.navigateForward('inscription');
    };
    ConnectionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-connection',
            template: __webpack_require__(/*! ./connection.page.html */ "./src/app/connection/connection.page.html"),
            styles: [__webpack_require__(/*! ./connection.page.scss */ "./src/app/connection/connection.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], ConnectionPage);
    return ConnectionPage;
}());



/***/ })

}]);
//# sourceMappingURL=connection-connection-module.js.map