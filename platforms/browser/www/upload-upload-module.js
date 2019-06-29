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

module.exports = "<ion-header>\n      <ion-toolbar>\n            <ion-title class=\"ion-text-center\">{{title}}</ion-title>\n          </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <h2 class=\"ion-text-center\">Photo</h2>\n\n    <div style=\"text-align:center\">\n        <div>\n            <webcam [height]=\"500\" [width]=\"500\" [trigger]=\"triggerObservable\" (imageCapture)=\"handleImage($event)\" *ngIf=\"showWebcam\"\n                [allowCameraSwitch]=\"allowCameraSwitch\" [switchCamera]=\"nextWebcamObservable\" [videoOptions]=\"videoOptions\"\n                [imageQuality]=\"1\" (cameraSwitched)=\"cameraWasSwitched($event)\" (initError)=\"handleInitError($event)\"></webcam>\n            <br />\n            <button class=\"actionBtn\" (click)=\"triggerSnapshot();\">Take A Snapshot</button>\n            <button class=\"actionBtn\" (click)=\"toggleWebcam();\">Toggle Webcam</button>\n            <br />\n            <button class=\"actionBtn\" (click)=\"showNextWebcam(true);\" [disabled]=\"!multipleWebcamsAvailable\">Next Webcam</button>\n            \n            <input id=\"cameraSwitchCheckbox\" type=\"checkbox\" [(ngModel)]=\"allowCameraSwitch\"><label for=\"cameraSwitchCheckbox\">Allow Camera\n                Switch</label>\n            <br />\n            DeviceId: <input id=\"deviceId\" type=\"text\" [(ngModel)]=\"deviceId\" style=\"width: 500px\">\n            <button (click)=\"showNextWebcam(deviceId);\">Activate</button>\n        </div>\n    </div>\n\n    <div class=\"snapshot\" *ngIf=\"webcamImage\">\n        <h2>Nice one!</h2>\n        <img [src]=\"webcamImage.imageAsDataUrl\" />\n    </div>\n\n    <h4 *ngIf=\"errors.length > 0\">Messages:</h4>\n    <ul *ngFor=\"let error of errors\">\n        <li>{{error | json}}</li>\n    </ul>\n\n\n\n      <ion-item>\n            <ion-label>Description</ion-label>\n            <ion-input></ion-input>\n          </ion-item>\n\n      <ion-item>\n            <ion-label>{{description}}</ion-label>\n            <ion-button full class=\"btncolor\" (click)=\"captureAudio()\">Capture Audio</ion-button>\n          </ion-item>\n\n\n      <ion-list>\n            <ion-item *ngFor=\"let file of mediaFiles\" text-wrap>\n                  {{ file.name }}\n                  <p>{{ file.size / 1000 / 1000 | number }} MB</p>\n                  <ion-button class=\"btncolor\" (click)=\"play(file)\">Lire</ion-button>\n                </ion-item>\n          </ion-list>\n\n      <ion-button  class=\"btncolor\" (click)=\"validate()\">Valider</ion-button>\n\n      <ion-button class=\"btncolor\" (click)=\"getContacts()\">contacts</ion-button>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/upload/upload.page.scss":
/*!*****************************************!*\
  !*** ./src/app/upload/upload.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.takePhoto {\n      width: 100px;\n      height: 100px;\n      border: 5px solid #582900;\n      border-radius: 50%;\n      background: transparent; }\n.btncolor {\n      --background: var(--ion-color-btn); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkL3VwbG9hZC5wYWdlLnNjc3MiLCIvVXNlcnMvYWxleGlzL0Rlc2t0b3AvSW9uaWMvTW9ra2FTaXRlL3NyYy9hcHAvdXBsb2FkL3VwbG9hZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLDJCQUEyQixFQUFBO0FBSTNCO0VBQ0Esc0NBQXNDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91cGxvYWQvdXBsb2FkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi50YWtlUGhvdG8ge1xuICDCoMKgwqDCoHdpZHRoOiAxMDBweDtcbiAgwqDCoMKgwqBoZWlnaHQ6IDEwMHB4O1xuICDCoMKgwqDCoGJvcmRlcjogNXB4IHNvbGlkICM1ODI5MDA7XG4gIMKgwqDCoMKgYm9yZGVyLXJhZGl1czogNTAlO1xuICDCoMKgwqDCoGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XG5cbi5idG5jb2xvciB7XG4gIMKgwqDCoMKgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYnRuKTsgfVxuIiwiLnRha2VQaG90byB7XG4gICAgwqDCoMKgwqB3aWR0aDogMTAwcHg7XG4gICAgwqDCoMKgwqBoZWlnaHQ6IDEwMHB4O1xuICAgIMKgwqDCoMKgYm9yZGVyOiA1cHggc29saWQgIzU4MjkwMDtcbiAgICDCoMKgwqDCoGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICDCoMKgwqDCoGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICBcbiAgICBcbiAgICAuYnRuY29sb3Ige1xuICAgIMKgwqDCoMKgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYnRuKTtcbiAgICB9Il19 */"

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
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "./node_modules/@ionic-native/media-capture/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/media/ngx */ "./node_modules/@ionic-native/media/ngx/index.js");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-webcam */ "./node_modules/ngx-webcam/fesm5/ngx-webcam.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");










var MEDIA_FILES_KEY = 'mediaFiles';


var UploadPage = /** @class */ (function () {
    function UploadPage(activatedRoute, navCtrl, global, geolocation, mediaCapture, storage, file, media) {
        this.activatedRoute = activatedRoute;
        this.navCtrl = navCtrl;
        this.global = global;
        this.geolocation = geolocation;
        this.mediaCapture = mediaCapture;
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
        this.trigger = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
        this.nextWebcam = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
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
        ngx_webcam__WEBPACK_IMPORTED_MODULE_10__["WebcamUtil"].getAvailableVideoInputs()
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
            _this.navCtrl.pop();
        });
    };
    UploadPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! ./upload.page.html */ "./src/app/upload/upload.page.html"),
            styles: [__webpack_require__(/*! ./upload.page.scss */ "./src/app/upload/upload.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"], _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_7__["MediaCapture"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"], _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_9__["Media"]])
    ], UploadPage);
    return UploadPage;
}());



/***/ })

}]);
//# sourceMappingURL=upload-upload-module.js.map