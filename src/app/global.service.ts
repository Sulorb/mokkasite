import { Injectable } from '@angular/core';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Platform } from '@ionic/angular';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(
    private androidPermissions: AndroidPermissions, private _diagnostic: Diagnostic, private _platform: Platform
  ) { }

  language = "fr";

  shits = [
    ["https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/198/pile-of-poo_1f4a9.png", 48.865, 2.33],
    ["https://static.actu.fr/uploads/2017/03/25261-170302101142908-0011.jpg", 48.845, 2.37],
    ["https://www.fiesta-republic.com/fr/images_bdd_2018/9732-fausse-crotte.jpg", 48.815, 2.31],
    ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Sheep_dropping_J1.jpg/1200px-Sheep_dropping_J1.jpg", 48.75, 2.33],
    ["https://medias.lagranderecre.fr/imgs/1/1200x1200/836953V01_02.jpg", 48.4465, 2.33],
  ];


  checkCameraPermissions(): Promise<boolean> {
    return new Promise(resolve => {
      if (this.isiOS()) {
        this._diagnostic.getCameraAuthorizationStatus().then(status => {
          if (status == this._diagnostic.permissionStatus.GRANTED) {
            resolve(true);
          }
          else if (status == this._diagnostic.permissionStatus.DENIED) {
            this._diagnostic.requestCameraAuthorization().then(authorisation => {
              resolve(authorisation == this._diagnostic.permissionStatus.GRANTED);
            }).catch(() => {
              resolve(false);
              // si bug, virer tout le else sauf resolve false
            })
          }
          else if (status == this._diagnostic.permissionStatus.NOT_REQUESTED || status.toLowerCase() == 'not_determined') {
            this._diagnostic.requestCameraAuthorization().then(authorisation => {
              resolve(authorisation == this._diagnostic.permissionStatus.GRANTED);
            });
          }
        });
      }
      else if (this.isAndroid()) {
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA).then(result => {
          resolve(result);
        }, err => {
          resolve(false);
          console.log(err);
        });
      }
    });
  }

  isAndroid() {
    return this._platform.is('android')
  }

  isiOS() {
    return this._platform.is('ios');
  }

}
