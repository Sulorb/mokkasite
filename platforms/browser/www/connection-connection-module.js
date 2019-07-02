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

module.exports = "<ion-header>\r\n      <ion-toolbar>\r\n            <ion-title class=\"ion-text-center\">💩</ion-title>\r\n          </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <h1>Connexion</h1>\r\n\r\n      <ion-item>  \r\n            <ion-label style=\"color: #582900\">Pseudo</ion-label>\r\n            <ion-input [(ngModel)]=\"name\"></ion-input>\r\n          </ion-item>\r\n      <ion-item>\r\n            <ion-label style=\"color: #582900\">Mot de passe</ion-label>\r\n            <ion-input [(ngModel)]=\"password\" type=\"password\"></ion-input>\r\n          </ion-item>\r\n\r\n      <ion-button class=\"btncolor\" (click)=\"connexion()\">Se connecter</ion-button>\r\n      <ion-button class=\"btncolor\" routerLink=\"/inscription\">Inscription</ion-button>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/connection/connection.page.scss":
/*!*************************************************!*\
  !*** ./src/app/connection/connection.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.takePhoto {\n      width: 100px;\n      height: 100px;\n      border: 5px solid #582900;\n      border-radius: 50%;\n      background: transparent; }\n.btncolor {\n      --background: var(--ion-color-btn); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29ubmVjdGlvbi9jb25uZWN0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29ubmVjdGlvbi9DOlxcVXNlcnNcXEkzNDYyMDdcXERlc2t0b3BcXG1va2thc2l0ZS9zcmNcXGFwcFxcY29ubmVjdGlvblxcY29ubmVjdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLDJCQUEyQixFQUFBO0FBSTNCO0VBQ0Esc0NBQXNDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb25uZWN0aW9uL2Nvbm5lY3Rpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnRha2VQaG90byB7XG4gIMKgwqDCoMKgd2lkdGg6IDEwMHB4O1xuICDCoMKgwqDCoGhlaWdodDogMTAwcHg7XG4gIMKgwqDCoMKgYm9yZGVyOiA1cHggc29saWQgIzU4MjkwMDtcbiAgwqDCoMKgwqBib3JkZXItcmFkaXVzOiA1MCU7XG4gIMKgwqDCoMKgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cblxuLmJ0bmNvbG9yIHtcbiAgwqDCoMKgwqAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1idG4pOyB9XG4iLCIudGFrZVBob3RvIHtcclxuICAgIMKgwqDCoMKgd2lkdGg6IDEwMHB4O1xyXG4gICAgwqDCoMKgwqBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgwqDCoMKgwqBib3JkZXI6IDVweCBzb2xpZCAjNTgyOTAwO1xyXG4gICAgwqDCoMKgwqBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICDCoMKgwqDCoGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC5idG5jb2xvciB7XHJcbiAgICDCoMKgwqDCoC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWJ0bik7XHJcbiAgICB9Il19 */"

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
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../global.service */ "./src/app/global.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var ConnectionPage = /** @class */ (function () {
    function ConnectionPage(navCtrl, http, global) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.global = global;
        this.name = "";
        this.password = "";
    }
    ConnectionPage.prototype.ngOnInit = function () {
    };
    ConnectionPage.prototype.connexion = function () {
        var _this = this;
        this.http.get('https://joingaia.fr/joingaia-back/?login=connection&name=' + this.name + '&pass=' + this.password)
            .subscribe(function (data) {
            console.log(data);
            if (data.connexion === 1) {
                _this.global.storeNative(data.token);
                _this.global.toast('Connexion réussie !');
                _this.navCtrl.navigateRoot('home');
            }
            else {
                _this.global.toast('Mauvais identifiant ou mot de passe');
            }
        });
    };
    ConnectionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-connection',
            template: __webpack_require__(/*! ./connection.page.html */ "./src/app/connection/connection.page.html"),
            styles: [__webpack_require__(/*! ./connection.page.scss */ "./src/app/connection/connection.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]])
    ], ConnectionPage);
    return ConnectionPage;
}());



/***/ })

}]);
//# sourceMappingURL=connection-connection-module.js.map