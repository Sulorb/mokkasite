import { GlobalService } from './../global.service';
import { NavController, LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Geolocation } from '@ionic-native/geolocation/ngx';

import { Storage } from '@ionic/storage';

import { File } from '@ionic-native/file/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';

const MEDIA_FILES_KEY = 'mediaFiles';

import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {

  typeSale = "sale";

  image;
  userContacts: any;
  mediaFiles = [];
  title = "Ajout de la photo"
  description = ""
  // BALEK


  // toggle webcam on/off
  public showWebcam = true;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string;
  public videoOptions: MediaTrackConstraints = {
    // width: {ideal: 1024},
    // height: {ideal: 576}
  };
  public errors: WebcamInitError[] = [];

  // latest snapshot
  public webcamImage: WebcamImage = null;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();

  public ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
  }

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public showNextWebcam(directionOrDeviceId: boolean | string): void {
    // true => move forward through devices
    // false => move backwards through devices
    // string => move to device with given deviceId
    this.nextWebcam.next(directionOrDeviceId);
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.log('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
  }

  public cameraWasSwitched(deviceId: string): void {
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }


  constructor(private activatedRoute: ActivatedRoute, private navCtrl: NavController, private global: GlobalService, private geolocation: Geolocation, private storage: Storage, private file: File, private media: Media, private loadingController: LoadingController) { }

  // ngOnInit() {
  //   this.activatedRoute.params.subscribe((data: any) => {
  //     console.log(data);
  //     this.image = data.image;
  //   });
  // }

  validate() {

    if (this.webcamImage) {


      if (this.description.length < 300) {

        this.global.presentLoader()


        // console.log('webcamImage.imageAsDataUrl', this.webcamImage.imageAsDataUrl)
        this.geolocation.getCurrentPosition().then((resp) => {
          console.log("validate", resp)
          let placeToInsert = {
            lng: resp.coords.longitude,
            lat: resp.coords.latitude,
            description: this.description,
            userDirtyName: "Selorb",
            pictureDirty: this.webcamImage.imageAsDataUrl,
            rewardPoints: 12,
            dirtyKind: this.typeSale
          }
          this.global.addPlace(placeToInsert)
        }).then((dataInexistante) => {
          this.global.dismissLoader()
          console.log('inex:', dataInexistante)
          this.navCtrl.pop()
        })

      } else {
        this.global.toast('La description ne doit pas dépasser les 300 caractères')
      }
    } else {
      this.global.toast("Prenez d'abord une photo pardi !")

    }
  }



}
