import { CookieService } from 'ngx-cookie-service';
import { GlobalService } from './../global.service';
import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.page.html',
  styleUrls: ['./validation.page.scss'],
})
export class ValidationPage implements OnInit {

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

  dataPlace;

  constructor(private navParams: NavParams, private modalCtrl: ModalController, private global: GlobalService, private cookieService: CookieService) { }

  public ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
    console.log('ici', this.navParams.get('data'))
    this.dataPlace = this.navParams.get('data');
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

  back() {
    this.modalCtrl.dismiss();
  }


  validate() {

    if (this.webcamImage) {

      this.global.presentLoader()

      let placeToUpdate = {
        pictureCleaned: this.webcamImage.imageAsDataUrl,
        userCleanedName: 'Sulorbinette',
        id: this.dataPlace.id,
        token: this.cookieService.get('token'),
        rewardPoints: this.dataPlace.rewardPoints
      }

      console.log('on upload ça : ', placeToUpdate)
      this.global.validatePlace(placeToUpdate).then((data: any) => {
        this.global.dismissLoader()
        this.modalCtrl.dismiss(true)
      })
    } else {
      this.global.toast("Prenez d'abord une photo pardi !")
    }

  }
}
