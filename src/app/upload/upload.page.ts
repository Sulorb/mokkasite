import { GlobalService } from './../global.service';
import { NavController } from '@ionic/angular';
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


  image;
  userContacts: any;
  mediaFiles = [];
  title = "Ajout de la photo"
  description = "Description vocale"
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


  constructor(private activatedRoute: ActivatedRoute, private navCtrl: NavController, private global: GlobalService, private geolocation: Geolocation, private storage: Storage, private file: File, private media: Media) {
    console.log('title' + this.global.language)
    if (this.global.language == "en") {
      this.title = "Picture upload"
      this.description = "Vocal Description"
    } else {
      this.title = "Ajout de la photo"
      this.description = "Description vocale"
    }


  }

  // ngOnInit() {
  //   this.activatedRoute.params.subscribe((data: any) => {
  //     console.log(data);
  //     this.image = data.image;
  //   });
  // }

  validate() {
    console.log('oo')
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log("validate", resp)
      let placeToInsert = {
        lng: resp.coords.longitude,
        lat: resp.coords.latitude,
        description: "description",
        userDirtyName: "Selorb",
        pictureDirty: "https://img-corp.net/assets/img/IMG_logo_big_blue.png",
        rewardPoints: 12
      }
      this.global.addPlace(placeToInsert)

      this.navCtrl.pop()


    })

  }


}
