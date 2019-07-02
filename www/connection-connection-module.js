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

module.exports = "<ion-header>\n      <ion-toolbar>\n            <ion-title class=\"ion-text-center\">💩</ion-title>\n          </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <h1>Connexion</h1>\n\n      <ion-item>  \n            <ion-label style=\"color: #582900\">Pseudo</ion-label>\n            <ion-input [(ngModel)]=\"name\"></ion-input>\n          </ion-item>\n      <ion-item>\n            <ion-label style=\"color: #582900\">Mot de passe</ion-label>\n            <ion-input [(ngModel)]=\"password\" type=\"password\"></ion-input>\n          </ion-item>\n\n      <ion-button class=\"btncolor\" (click)=\"connexion()\">Se connecter</ion-button>\n      <ion-button class=\"btncolor\" routerLink=\"/inscription\">Inscription</ion-button>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/connection/connection.page.scss":
/*!*************************************************!*\
  !*** ./src/app/connection/connection.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.takePhoto {\n      width: 100px;\n      height: 100px;\n      border: 5px solid #582900;\n      border-radius: 50%;\n      background: transparent; }\n.btncolor {\n      --background: var(--ion-color-btn); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29ubmVjdGlvbi9jb25uZWN0aW9uLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9hbGV4aXMvRGVza3RvcC9Jb25pYy9Nb2trYVNpdGUvc3JjL2FwcC9jb25uZWN0aW9uL2Nvbm5lY3Rpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QiwyQkFBMkIsRUFBQTtBQUkzQjtFQUNBLHNDQUFzQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29ubmVjdGlvbi9jb25uZWN0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi50YWtlUGhvdG8ge1xuICDCoMKgwqDCoHdpZHRoOiAxMDBweDtcbiAgwqDCoMKgwqBoZWlnaHQ6IDEwMHB4O1xuICDCoMKgwqDCoGJvcmRlcjogNXB4IHNvbGlkICM1ODI5MDA7XG4gIMKgwqDCoMKgYm9yZGVyLXJhZGl1czogNTAlO1xuICDCoMKgwqDCoGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XG5cbi5idG5jb2xvciB7XG4gIMKgwqDCoMKgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYnRuKTsgfVxuIiwiLnRha2VQaG90byB7XG4gICAgwqDCoMKgwqB3aWR0aDogMTAwcHg7XG4gICAgwqDCoMKgwqBoZWlnaHQ6IDEwMHB4O1xuICAgIMKgwqDCoMKgYm9yZGVyOiA1cHggc29saWQgIzU4MjkwMDtcbiAgICDCoMKgwqDCoGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICDCoMKgwqDCoGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICBcbiAgICBcbiAgICAuYnRuY29sb3Ige1xuICAgIMKgwqDCoMKgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYnRuKTtcbiAgICB9Il19 */"

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
        this.http.get('http://localhost:8888/mokkaserver/?login=connection&name=' + this.name + '&pass=' + this.password)
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