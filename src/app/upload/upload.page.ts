import { GlobalService } from './../global.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Geolocation } from '@ionic-native/geolocation/ngx';

import { Storage } from '@ionic/storage';

import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture/ngx';
import { File } from '@ionic-native/file/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { WebcamModule } from 'ngx-webcam';

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


  constructor(private activatedRoute: ActivatedRoute, private navCtrl: NavController, private global: GlobalService, private geolocation: Geolocation, private mediaCapture: MediaCapture, private storage: Storage, private file: File, private media: Media) {
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

  captureAudio() {
    this.mediaCapture.captureAudio().then(res => {
      this.storeMediaFiles(res);
      console.log('res', res)
    }, (err: CaptureError) => console.error(err));
  }

  play(myFile) {
    console.log('myFile', myFile)
    const audioFile: MediaObject = this.media.create(myFile.localURL);
    audioFile.play();
  }

  storeMediaFiles(files) {
    this.storage.get(MEDIA_FILES_KEY).then(res => {
      if (res) {
        let arr = JSON.parse(res);
        arr = arr.concat(files);
        this.storage.set(MEDIA_FILES_KEY, JSON.stringify(arr));
      } else {
        this.storage.set(MEDIA_FILES_KEY, JSON.stringify(files))
      }
      this.mediaFiles = this.mediaFiles.concat(files);
    })
  }

  validate() {

    console.log('oo')
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log("newcrotte", resp)
      this.global.shits.push([this.image, resp.coords.latitude, resp.coords.longitude])

      this.navCtrl.pop()

    })

  }


}
