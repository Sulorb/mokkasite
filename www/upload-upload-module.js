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
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-webcam */ "./node_modules/ngx-webcam/fesm5/ngx-webcam.js");








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
                ngx_webcam__WEBPACK_IMPORTED_MODULE_7__["WebcamModule"],
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

module.exports = "<ion-header>\r\n      <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"home\"></ion-back-button>\r\n        </ion-buttons>\r\n            <ion-title class=\"ion-text-center\">Signalement d'un lieu</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <h2 class=\"ion-text-center\">Photographiez le lieu sale</h2>\r\n\r\n    <div style=\"text-align:center\">\r\n        <div>\r\n                <webcam [height]=\"500\" [width]=\"500\" [trigger]=\"triggerObservable\" (imageCapture)=\"handleImage($event)\" *ngIf=\"showWebcam\"\r\n                [allowCameraSwitch]=\"allowCameraSwitch\" [switchCamera]=\"nextWebcamObservable\" [videoOptions]=\"videoOptions\"\r\n                [imageQuality]=\"1\" (cameraSwitched)=\"cameraWasSwitched($event)\" (initError)=\"handleInitError($event)\"></webcam>\r\n\r\n            <br />\r\n            <ion-button icon-only class=\"actionBtn\" (click)=\"triggerSnapshot();\">\r\n                <ion-icon name=\"camera\"></ion-icon>\r\n            </ion-button>\r\n\r\n            <!-- <ion-button icon-only class=\"actionBtn\" (click)=\"toggleWebcam();\">\r\n                <ion-icon name=\"refresh\"></ion-icon> Changer de caméra\r\n            </!-->\r\n\r\n            <br />\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"snapshot\" *ngIf=\"webcamImage\">\r\n        <h2>Nice one!</h2>\r\n        <img [src]=\"webcamImage.imageAsDataUrl\" />\r\n    </div>\r\n\r\n    <!-- <h4 *ngIf=\"errors.length > 0\">Messages:</h4>\r\n    <ul *ngFor=\"let error of errors\">\r\n        <li>{{error | json}}</li>\r\n    </ul> -->\r\n\r\n      <ion-item>\r\n            <ion-label>Description</ion-label>\r\n            <ion-input></ion-input>\r\n         </ion-item>\r\n\r\n      <ion-list>\r\n            <ion-item *ngFor=\"let file of mediaFiles\" text-wrap>\r\n                  {{ file.name }}\r\n                  <p>{{ file.size / 1000 / 1000 | number }} MB</p>\r\n                  <ion-button class=\"btncolor\" (click)=\"play(file)\">Lire</ion-button>\r\n                </ion-item>\r\n          </ion-list>\r\n\r\n      <ion-button  class=\"btncolor\" (click)=\"validate()\">Valider</ion-button>\r\n\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/upload/upload.page.scss":
/*!*****************************************!*\
  !*** ./src/app/upload/upload.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.takePhoto {\n      width: 100px;\n      height: 100px;\n      border: 5px solid #582900;\n      border-radius: 50%;\n      background: transparent; }\n.btncolor {\n      --background: var(--ion-color-btn); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkL3VwbG9hZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3VwbG9hZC9DOlxcVXNlcnNcXEkzNDYyMDdcXERlc2t0b3BcXG1va2thc2l0ZS9zcmNcXGFwcFxcdXBsb2FkXFx1cGxvYWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QiwyQkFBMkIsRUFBQTtBQUkzQjtFQUNBLHNDQUFzQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdXBsb2FkL3VwbG9hZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4udGFrZVBob3RvIHtcbiAgwqDCoMKgwqB3aWR0aDogMTAwcHg7XG4gIMKgwqDCoMKgaGVpZ2h0OiAxMDBweDtcbiAgwqDCoMKgwqBib3JkZXI6IDVweCBzb2xpZCAjNTgyOTAwO1xuICDCoMKgwqDCoGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgwqDCoMKgwqBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxuXG4uYnRuY29sb3Ige1xuICDCoMKgwqDCoC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWJ0bik7IH1cbiIsIi50YWtlUGhvdG8ge1xyXG4gICAgwqDCoMKgwqB3aWR0aDogMTAwcHg7XHJcbiAgICDCoMKgwqDCoGhlaWdodDogMTAwcHg7XHJcbiAgICDCoMKgwqDCoGJvcmRlcjogNXB4IHNvbGlkICM1ODI5MDA7XHJcbiAgICDCoMKgwqDCoGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIMKgwqDCoMKgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgLmJ0bmNvbG9yIHtcclxuICAgIMKgwqDCoMKgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYnRuKTtcclxuICAgIH0iXX0= */"

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
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/media/ngx */ "./node_modules/@ionic-native/media/ngx/index.js");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-webcam */ "./node_modules/ngx-webcam/fesm5/ngx-webcam.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");









var MEDIA_FILES_KEY = 'mediaFiles';


var UploadPage = /** @class */ (function () {
    function UploadPage(activatedRoute, navCtrl, global, geolocation, storage, file, media) {
        this.activatedRoute = activatedRoute;
        this.navCtrl = navCtrl;
        this.global = global;
        this.geolocation = geolocation;
        this.storage = storage;
        this.file = file;
        this.media = media;
        this.mediaFiles = [];
        this.title = "Ajout de la photo";
        this.description = "Description vocale";
        // BALEK
        // toggle webcam on/off
        this.showWebcam = true;
        this.allowCameraSwitch = true;
        this.multipleWebcamsAvailable = false;
        this.videoOptions = {
        // width: {ideal: 1024},
        // height: {ideal: 576}
        };
        this.errors = [];
        // latest snapshot
        this.webcamImage = null;
        // webcam snapshot trigger
        this.trigger = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
        this.nextWebcam = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
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
        ngx_webcam__WEBPACK_IMPORTED_MODULE_9__["WebcamUtil"].getAvailableVideoInputs()
            .then(function (mediaDevices) {
            _this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
        });
    };
    UploadPage.prototype.triggerSnapshot = function () {
        this.trigger.next();
    };
    UploadPage.prototype.toggleWebcam = function () {
        this.showWebcam = !this.showWebcam;
    };
    UploadPage.prototype.handleInitError = function (error) {
        this.errors.push(error);
    };
    UploadPage.prototype.showNextWebcam = function (directionOrDeviceId) {
        // true => move forward through devices
        // false => move backwards through devices
        // string => move to device with given deviceId
        this.nextWebcam.next(directionOrDeviceId);
    };
    UploadPage.prototype.handleImage = function (webcamImage) {
        console.log('received webcam image', webcamImage);
        this.webcamImage = webcamImage;
    };
    UploadPage.prototype.cameraWasSwitched = function (deviceId) {
        console.log('active device: ' + deviceId);
        this.deviceId = deviceId;
    };
    Object.defineProperty(UploadPage.prototype, "triggerObservable", {
        get: function () {
            return this.trigger.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UploadPage.prototype, "nextWebcamObservable", {
        get: function () {
            return this.nextWebcam.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    // ngOnInit() {
    //   this.activatedRoute.params.subscribe((data: any) => {
    //     console.log(data);
    //     this.image = data.image;
    //   });
    // }
    UploadPage.prototype.validate = function () {
        console.log('oo');
        this.geolocation.getCurrentPosition().then(function (resp) {
            console.log("newcrotte", resp);
            // this.global.shits.push([this.image, resp.coords.latitude, resp.coords.longitude])
            // this.navCtrl.pop()
        });
    };
    UploadPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! ./upload.page.html */ "./src/app/upload/upload.page.html"),
            styles: [__webpack_require__(/*! ./upload.page.scss */ "./src/app/upload/upload.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"], _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_8__["Media"]])
    ], UploadPage);
    return UploadPage;
}());



/***/ })

}]);
//# sourceMappingURL=upload-upload-module.js.map