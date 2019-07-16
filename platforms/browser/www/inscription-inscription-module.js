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

module.exports = "<ion-content>\n\n  <ion-button fill=\"clear\" icon-only (click)=\"back()\">\n    <ion-icon name=\"arrow-back\" color=\"dark\"></ion-icon>\n  </ion-button>\n\n  <h1 class=\"rectangle\">Tu es bientôt un héros !</h1>\n\n  <p padding>Pas bien compliqué de rejoindre la ligue Gaïa ! Remplis les informations suivantes et démarre ta quête écologique ! ✨</p>\n\n  <ion-input [(ngModel)]=\"name\" placeholder=\"prénom_\" style=\"width: 75vw; margin: auto; background: transparent; border-bottom: 2px solid lightgray;\"></ion-input>\n  <ion-input placeholder=\"adresse mail_\" style=\"width: 75vw; margin: auto; background: transparent; border-bottom: 2px solid lightgray;\"></ion-input>\n  <ion-input [(ngModel)]=\"password1\" type=\"password\" placeholder=\"mot de passe_\" style=\"width: 75vw; margin: auto; background: transparent; border-bottom: 2px solid lightgray;\"></ion-input>\n  <ion-input [(ngModel)]=\"password2\" type=\"password\" placeholder=\"répéter mot de passe_\" style=\"width: 75vw; margin: auto; background: transparent; border-bottom: 2px solid lightgray;\"></ion-input>\n\n  <ion-radio-group [(ngModel)]=\"accountType\">\n    <ion-row>\n      <ion-col>\n        <ion-row class=\"center\"> <img src=\"assets/icon/favicon.png\" width=\"30px\" /><br /> </ion-row>\n        <ion-row class=\"center\">\n          <ion-label>Ramasseur</ion-label>\n        </ion-row>\n        <ion-row class=\"center\">\n          <ion-radio value=\"ramasseur\"></ion-radio>\n        </ion-row>\n      </ion-col>\n      <ion-col>\n        <ion-row class=\"center\"> <img src=\"assets/icon/favicon.png\" width=\"30px\" /><br /> </ion-row>\n        <ion-row class=\"center\">\n          <ion-label>Entreprise financeuse</ion-label>\n        </ion-row>\n        <ion-row class=\"center\">\n          <ion-radio value=\"entreprise\"></ion-radio>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-radio-group>\n\n\n  <div padding margin>\n    <ion-checkbox></ion-checkbox> J'accepte que les informations saisies soient exploitées dans le cadre du mouvement Gaïa.\n  </div>\n\n  <ion-button color=\"tertiary\" expand=\"block\" size=\"large\" (click)=\"inscription()\" style=\"width: 75vw; display: block; margin: auto; margin-bottom: 20px;\">Valider</ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/inscription/inscription.page.scss":
/*!***************************************************!*\
  !*** ./src/app/inscription/inscription.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-radio {\n  border: 2px solid #4bda3e;\n  border-radius: 50%; }\n\n.center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center; }\n\n.rectangle::after {\n  content: \"\";\n  display: block;\n  width: 78%;\n  height: 31px;\n  background-color: #45e6c6;\n  position: relative;\n  top: -43px;\n  right: -13px;\n  z-index: -1; }\n\n.rectangle {\n  font-weight: bolder;\n  font-size: 2.5em; }\n\nion-content {\n  --background: transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4aXMvRGVza3RvcC9Jb25pYy9Nb2trYVNpdGUvc3JjL2FwcC9pbnNjcmlwdGlvbi9pbnNjcmlwdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBa0M7RUFDbEMsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksV0FBVztFQUNYLGNBQWM7RUFDZCxVQUFVO0VBQ1YsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0kseUJBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2luc2NyaXB0aW9uL2luc2NyaXB0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1yYWRpbyB7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDc1LCAyMTgsIDYyKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5jZW50ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZWN0YW5nbGU6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA3OCU7XG4gICAgaGVpZ2h0OiAzMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NWU2YzY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTQzcHg7XG4gICAgcmlnaHQ6IC0xM3B4O1xuICAgIHotaW5kZXg6IC0xO1xufVxuXG4ucmVjdGFuZ2xlIHtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGZvbnQtc2l6ZTogMi41ZW07XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyAvLyB5b3UgZG9uJ3QgbmVlZCB0byB1c2UgYSBjc3MgY3VzdG9tIHByb3BlcnR5LCBidXQgeW91IGNhbiBvZiBjb3Vyc2Vcbn0iXX0= */"

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
        this.navCtrl.navigateRoot('connection');
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