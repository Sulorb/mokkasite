(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["upload-upload-module"],{

/***/ "./src/app/upload/upload.module.ts":
/*!*****************************************!*\
  !*** ./src/app/upload/upload.module.ts ***!
  \*****************************************/
/*! exports provided: UploadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadPageModule", function() { return UploadPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _upload_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./upload.page */ "./src/app/upload/upload.page.ts");







var routes = [
    {
        path: '',
        component: _upload_page__WEBPACK_IMPORTED_MODULE_6__["UploadPage"]
    }
];
var UploadPageModule = /** @class */ (function () {
    function UploadPageModule() {
    }
    UploadPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_upload_page__WEBPACK_IMPORTED_MODULE_6__["UploadPage"]]
        })
    ], UploadPageModule);
    return UploadPageModule;
}());



/***/ }),

/***/ "./src/app/upload/upload.page.html":
/*!*****************************************!*\
  !*** ./src/app/upload/upload.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n      <ion-toolbar>\n        <ion-title class=\"ion-text-center\">{{title}}</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    \n    <ion-content>\n    <h2 class=\"ion-text-center\">Photo</h2>\n      <img src=\"{{image}}\" alt=\"\">\n    \n    \n      <ion-item>\n        <ion-label>Description</ion-label>\n        <ion-input></ion-input>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label>{{description}}</ion-label>\n        <ion-button full class=\"btncolor\" (click)=\"captureAudio()\">Capture Audio</ion-button>\n      </ion-item>\n    \n    \n      <ion-list>\n        <ion-item *ngFor=\"let file of mediaFiles\" text-wrap>\n          {{ file.name }}\n          <p>{{ file.size / 1000 / 1000 | number }} MB</p>\n          <ion-button class=\"btncolor\" (click)=\"play(file)\">Lire</ion-button>\n        </ion-item>\n      </ion-list>\n    \n      <ion-button  class=\"btncolor\" (click)=\"validate()\">Valider</ion-button>\n    \n      <ion-button class=\"btncolor\" (click)=\"getContacts()\">contacts</ion-button>\n    \n      <ion-list>\n        <ion-item *ngFor=\"let contact of userContacts\">\n          {{contact._objectInstance.displayName}}\n        </ion-item>\n      </ion-list>\n    \n    </ion-content>"

/***/ }),

/***/ "./src/app/upload/upload.page.scss":
/*!*****************************************!*\
  !*** ./src/app/upload/upload.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.takePhoto {\n      width: 100px;\n      height: 100px;\n      border: 5px solid #582900;\n      border-radius: 50%;\n      background: transparent; }\n.btncolor {\n      --background: var(--ion-color-btn); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkL3VwbG9hZC5wYWdlLnNjc3MiLCIvVXNlcnMvYWxleGlzL0Rlc2t0b3AvSW9uaWMvaWVzYS0yMDE5LWIzLW1vYmlsZS1wcm9qZWN0L3NvdXJjZXMvU2hpdFNjYW4vc3JjL2FwcC91cGxvYWQvdXBsb2FkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsMkJBQTJCLEVBQUE7QUFJM0I7RUFDQSxzQ0FBc0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC91cGxvYWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnRha2VQaG90byB7XG4gIMKgwqDCoMKgd2lkdGg6IDEwMHB4O1xuICDCoMKgwqDCoGhlaWdodDogMTAwcHg7XG4gIMKgwqDCoMKgYm9yZGVyOiA1cHggc29saWQgIzU4MjkwMDtcbiAgwqDCoMKgwqBib3JkZXItcmFkaXVzOiA1MCU7XG4gIMKgwqDCoMKgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cblxuLmJ0bmNvbG9yIHtcbiAgwqDCoMKgwqAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1idG4pOyB9XG4iLCIudGFrZVBob3RvIHtcbiAgICDCoMKgwqDCoHdpZHRoOiAxMDBweDtcbiAgICDCoMKgwqDCoGhlaWdodDogMTAwcHg7XG4gICAgwqDCoMKgwqBib3JkZXI6IDVweCBzb2xpZCAjNTgyOTAwO1xuICAgIMKgwqDCoMKgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIMKgwqDCoMKgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIC5idG5jb2xvciB7XG4gICAgwqDCoMKgwqAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1idG4pO1xuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/upload/upload.page.ts":
/*!***************************************!*\
  !*** ./src/app/upload/upload.page.ts ***!
  \***************************************/
/*! exports provided: UploadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadPage", function() { return UploadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../global.service */ "./src/app/global.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/contacts/ngx */ "./node_modules/@ionic-native/contacts/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "./node_modules/@ionic-native/media-capture/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/media/ngx */ "./node_modules/@ionic-native/media/ngx/index.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");












var MEDIA_FILES_KEY = 'mediaFiles';
var UploadPage = /** @class */ (function () {
    function UploadPage(activatedRoute, navCtrl, contacts, global, geolocation, mediaCapture, storage, file, media, localNotifications) {
        this.activatedRoute = activatedRoute;
        this.navCtrl = navCtrl;
        this.contacts = contacts;
        this.global = global;
        this.geolocation = geolocation;
        this.mediaCapture = mediaCapture;
        this.storage = storage;
        this.file = file;
        this.media = media;
        this.localNotifications = localNotifications;
        this.mediaFiles = [];
        this.title = "Ajout de la photo";
        this.description = "Description vocale";
        console.log('title' + this.global.language);
        if (this.global.language == "en") {
            this.title = "Picture upload";
            this.description = "Vocal Description";
        }
        else {
            this.title = "Ajout de la photo";
            this.description = "Description vocale";
        }
    }
    UploadPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (data) {
            console.log(data);
            _this.image = data.image;
        });
    };
    UploadPage.prototype.captureAudio = function () {
        var _this = this;
        this.mediaCapture.captureAudio().then(function (res) {
            _this.storeMediaFiles(res);
            console.log('res', res);
        }, function (err) { return console.error(err); });
    };
    UploadPage.prototype.play = function (myFile) {
        console.log('myFile', myFile);
        var audioFile = this.media.create(myFile.localURL);
        audioFile.play();
    };
    UploadPage.prototype.storeMediaFiles = function (files) {
        var _this = this;
        this.storage.get(MEDIA_FILES_KEY).then(function (res) {
            if (res) {
                var arr = JSON.parse(res);
                arr = arr.concat(files);
                _this.storage.set(MEDIA_FILES_KEY, JSON.stringify(arr));
            }
            else {
                _this.storage.set(MEDIA_FILES_KEY, JSON.stringify(files));
            }
            _this.mediaFiles = _this.mediaFiles.concat(files);
        });
    };
    UploadPage.prototype.validate = function () {
        var _this = this;
        console.log('oo');
        this.geolocation.getCurrentPosition().then(function (resp) {
            console.log("newcrotte", resp);
            _this.global.shits.push([_this.image, resp.coords.latitude, resp.coords.longitude]);
            // Schedule a single notification
            _this.localNotifications.schedule({
                id: 1,
                text: 'Vous avez bien ajouté cet excrément',
            });
            _this.navCtrl.pop();
        });
    };
    UploadPage.prototype.getContacts = function () {
        var _this = this;
        this.contacts.find(['displayName']).then(function (data) {
            console.log(data);
            _this.userContacts = data;
        });
    };
    UploadPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! ./upload.page.html */ "./src/app/upload/upload.page.html"),
            styles: [__webpack_require__(/*! ./upload.page.scss */ "./src/app/upload/upload.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_5__["Contacts"], _global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"], _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_8__["MediaCapture"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"], _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_10__["Media"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_11__["LocalNotifications"]])
    ], UploadPage);
    return UploadPage;
}());



/***/ })

}]);
//# sourceMappingURL=upload-upload-module.js.map