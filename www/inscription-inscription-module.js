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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"connection\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>inscription</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h1>Inscription</h1>\n\n    <ion-item>  \n        <ion-label style=\"color: #582900\">Pseudo</ion-label>\n        <ion-input [(ngModel)]=\"name\"></ion-input>\n      </ion-item>\n    \n    <ion-item>\n        <ion-label style=\"color: #582900\">Mot de passe</ion-label>\n        <ion-input [(ngModel)]=\"password1\" type=\"password\"></ion-input>\n      </ion-item>\n\n    <ion-item>\n        <ion-label style=\"color: #582900\">Mot de passe</ion-label>\n        <ion-input [(ngModel)]=\"password2\" type=\"password\"></ion-input>\n      </ion-item>\n\n    <ion-button class=\"btncolor\" (click)=\"inscription()\">S'inscrire</ion-button>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/inscription/inscription.page.scss":
/*!***************************************************!*\
  !*** ./src/app/inscription/inscription.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc2NyaXB0aW9uL2luc2NyaXB0aW9uLnBhZ2Uuc2NzcyJ9 */"

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
            this.http.get('http://localhost:8888/mokkaserver/?login=registration&name=' + this.name + '&pass=' + this.password1)
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