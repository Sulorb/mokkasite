(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inscription-inscription-module"],{

/***/ "./src/app/inscription/inscription.module.ts":
/*!***************************************************!*\
  !*** ./src/app/inscription/inscription.module.ts ***!
  \***************************************************/
/*! exports provided: InscriptionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InscriptionPageModule", function() { return InscriptionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _inscription_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inscription.page */ "./src/app/inscription/inscription.page.ts");







var routes = [
    {
        path: '',
        component: _inscription_page__WEBPACK_IMPORTED_MODULE_6__["InscriptionPage"]
    }
];
var InscriptionPageModule = /** @class */ (function () {
    function InscriptionPageModule() {
    }
    InscriptionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_inscription_page__WEBPACK_IMPORTED_MODULE_6__["InscriptionPage"]]
        })
    ], InscriptionPageModule);
    return InscriptionPageModule;
}());



/***/ }),

/***/ "./src/app/inscription/inscription.page.html":
/*!***************************************************!*\
  !*** ./src/app/inscription/inscription.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-image: url('assets/fond-feuilles.jpg'); height: 100vh; background-size: cover;\">\r\n  <ion-button fill=\"clear\" icon-only (click)=\"back()\">\r\n    <ion-icon name=\"arrow-back\" color=\"light\"></ion-icon>\r\n  </ion-button>\r\n\r\n  <h1 text-center>Inscription</h1>\r\n\r\n  <ion-input\r\n    [(ngModel)]=\"name\"\r\n    placeholder=\"identifiant_\"\r\n    style=\"width: 75vw; margin: auto; background: transparent; border-bottom: 2px solid white; color: whitesmoke;\"\r\n  ></ion-input>\r\n  <ion-input\r\n    [(ngModel)]=\"password1\"\r\n    type=\"password\"\r\n    placeholder=\"mot de passe_\"\r\n    style=\"width: 75vw; margin: auto; background: transparent; border-bottom: 2px solid white; color: whitesmoke;\"\r\n  ></ion-input>\r\n  <ion-input\r\n    [(ngModel)]=\"password2\"\r\n    type=\"password\"\r\n    placeholder=\"répéter mot de passe_\"\r\n    style=\"width: 75vw; margin: auto; background: transparent; border-bottom: 2px solid white; color: whitesmoke;\"\r\n  ></ion-input>\r\n\r\n  <ion-radio-group [(ngModel)]=\"accountType\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-row class=\"center\"> <img src=\"assets/icon/favicon.png\" width=\"30px\" /><br /> </ion-row>\r\n        <ion-row class=\"center\">\r\n          <ion-label>Ramasseur</ion-label>\r\n        </ion-row>\r\n        <ion-row class=\"center\">\r\n          <ion-radio value=\"ramasseur\"></ion-radio>\r\n        </ion-row>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-row class=\"center\"> <img src=\"assets/icon/favicon.png\" width=\"30px\" /><br /> </ion-row>\r\n        <ion-row class=\"center\">\r\n          <ion-label>Entreprise financeuse</ion-label>\r\n        </ion-row>\r\n        <ion-row class=\"center\">\r\n          <ion-radio value=\"entreprise\"></ion-radio>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-radio-group>\r\n\r\n  <ion-button color=\"light\" expand=\"block\" size=\"large\" (click)=\"inscription()\" style=\"width: 75vw; display: block; margin: auto;\"\r\n    >Valider</ion-button\r\n  >\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/inscription/inscription.page.scss":
/*!***************************************************!*\
  !*** ./src/app/inscription/inscription.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  color: white;\n  margin-top: 20vh;\n  font-weight: bold;\n  font-size: 2em; }\n\nion-radio {\n  border: 2px solid #4bda3e;\n  border-radius: 50%; }\n\n.center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zY3JpcHRpb24vQzpcXFVzZXJzXFxhbGV4aVxcT25lRHJpdmVcXEJ1cmVhdVxcbW9ra2FzaXRlL3NyY1xcYXBwXFxpbnNjcmlwdGlvblxcaW5zY3JpcHRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUdsQjtFQUNJLHlCQUFrQztFQUNsQyxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2luc2NyaXB0aW9uL2luc2NyaXB0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDIwdmg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG59XHJcblxyXG5pb24tcmFkaW8ge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDc1LCAyMTgsIDYyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/inscription/inscription.page.ts":
/*!*************************************************!*\
  !*** ./src/app/inscription/inscription.page.ts ***!
  \*************************************************/
/*! exports provided: InscriptionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InscriptionPage", function() { return InscriptionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../global.service */ "./src/app/global.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var InscriptionPage = /** @class */ (function () {
    function InscriptionPage(navCtrl, http, global) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.global = global;
        this.name = "";
        this.password1 = "";
        this.password2 = "";
        this.accountType = "ramasseur";
    }
    InscriptionPage.prototype.inscription = function () {
        var _this = this;
        if (this.name.length < 4) {
            this.global.toast("Saisis un pseudo d'au moins 4 caractères !");
        }
        else if (this.password1.length < 5 || this.password2.length < 5) {
            this.global.toast("Saisis un mot de passe d'au moins 5 caractères !");
        }
        else if (this.password1 != this.password2) {
            this.global.toast("Les mots de passe ne sont pas identiques !");
        }
        else {
            this.http.get(this.global.serverSite + 'login=registration&name=' + this.name + '&pass=' + this.password1 + "&accountType=" + this.accountType)
                .subscribe(function (data) {
                console.log(data);
                if (data.connexion == 1) {
                    _this.global.storeNative(data.token);
                    _this.global.toast('Inscription réussie !');
                    _this.navCtrl.navigateRoot('home');
                }
                else if (data.connexion == 0) {
                    _this.global.toast('Ce pseudo est déjà pris !');
                }
                else {
                    _this.global.toast('Erreur très frustrante et méconnue');
                }
            });
        }
    };
    InscriptionPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    InscriptionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inscription',
            template: __webpack_require__(/*! ./inscription.page.html */ "./src/app/inscription/inscription.page.html"),
            styles: [__webpack_require__(/*! ./inscription.page.scss */ "./src/app/inscription/inscription.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], InscriptionPage);
    return InscriptionPage;
}());



/***/ })

}]);
//# sourceMappingURL=inscription-inscription-module.js.map