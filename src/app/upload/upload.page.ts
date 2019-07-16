import { GlobalService } from './../global.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

import { Geolocation } from '@ionic-native/geolocation/ngx';


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
  title = "Ajout de la photo"
  description = ""
  // BALEK
  typeSale = "sale";


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


  constructor(private global: GlobalService, private geolocation: Geolocation, private modalCtrl: ModalController) { }

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
            dirtyKind: this.typeSale
          }
          this.global.addPlace(placeToInsert).then((dataInex) => {
            this.global.dismissLoader()
            console.log('inex data:', dataInex)
            this.modalCtrl.dismiss(true)
          })
        })
      } else {
        this.global.toast('La description ne doit pas dépasser les 300 caractères')
      }
    } else {
      this.global.toast("Prenez d'abord une photo pardi !")
    }

  }

  public async back() {
    const modal = await this.modalCtrl.getTop();
    modal.dismiss();
  }


}
