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

module.exports = "<div style=\"background-image: url('assets/fond-feuilles.jpg'); height: 100vh; background-size: cover;\">\n\n    <h1 text-center>Connexion</h1>\n\n        <ion-input [(ngModel)]=\"name\" placeholder=\"identifiant_\" style=\"width: 75vw; margin: auto; background: transparent; border-bottom: 2px solid white; color: whitesmoke;\"></ion-input>\n        <ion-input [(ngModel)]=\"password\" type=\"password\" placeholder=\"mot de passe_\" style=\"width: 75vw; margin: auto; background: transparent; border-bottom: 2px solid white; color: whitesmoke;\"></ion-input>\n\n      <ion-button color=\"light\" expand=\"block\" size=\"large\" (click)=\"connexion()\" style=\"width: 75vw; display: block; margin: auto;\">Valider</ion-button>\n\n\n    <ion-footer style=\"position: absolute; bottom: 5vh;\" text-center>\n        <p style=\"color: white;\">Pas encore membre ?<br>Rejoins la communauté Gaïa dès maintenant !</p>\n        <ion-button expand=\"block\" size=\"large\" routerLink=\"/inscription\" style=\"width: 75vw; display: block; margin: auto;\">Je m'inscris !</ion-button>\n    </ion-footer>\n\n</div>"

/***/ }),

/***/ "./src/app/connection/connection.page.scss":
/*!*************************************************!*\
  !*** ./src/app/connection/connection.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  color: white;\n  margin-top: 20vh;\n  font-weight: bold;\n  font-size: 2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4aXMvRGVza3RvcC9Jb25pYy9Nb2trYVNpdGUvc3JjL2FwcC9jb25uZWN0aW9uL2Nvbm5lY3Rpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29ubmVjdGlvbi9jb25uZWN0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLXRvcDogMjB2aDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDJlbTtcbn1cblxuIl19 */"

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
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../global.service */ "./src/app/global.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var ConnectionPage = /** @class */ (function () {
    function ConnectionPage(navCtrl, http, global, cookieService) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.global = global;
        this.cookieService = cookieService;
        this.name = "";
        this.password = "";
        this.cookieValue = 'UNKNOWN';
    }
    ConnectionPage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.cookieService.check('token') === true) {
            console.log('token');
            this.http.get(this.global.serverSite + 'login=connectionWithToken&token=' + this.cookieService.get('token'))
                .subscribe(function (data) {
                console.log(data);
                if (data.connexion === 1) {
                    _this.global.toast('Connexion automatique réussie !');
                    _this.global.storeNative(data.token);
                    _this.navCtrl.navigateRoot('home');
                }
                else {
                    _this.global.toast('Token erroné, veuillez vous reconnecter');
                }
            });
        }
    };
    ConnectionPage.prototype.connexion = function () {
        var _this = this;
        this.http.get(this.global.serverSite + 'login=connection&name=' + this.name + '&pass=' + this.password)
            .subscribe(function (data) {
            console.log(data);
            if (data.connexion === 1) {
                _this.global.toast('Connexion réussie !');
                console.log("SET TOKEN CONNECTION");
                _this.global.storeNative(data.token);
                _this.navCtrl.navigateRoot('home');
            }
            else {
                _this.global.toast('Mauvais identifiant ou mot de passe');
            }
        });
    };
    ConnectionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-connection',
            template: __webpack_require__(/*! ./connection.page.html */ "./src/app/connection/connection.page.html"),
            styles: [__webpack_require__(/*! ./connection.page.scss */ "./src/app/connection/connection.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]])
    ], ConnectionPage);
    return ConnectionPage;
}());



/***/ })

}]);
//# sourceMappingURL=connection-connection-module.js.map