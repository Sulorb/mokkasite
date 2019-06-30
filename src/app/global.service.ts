import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  language = "fr";

  shits = [
    ["https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/198/pile-of-poo_1f4a9.png", 48.865, 2.33],
    ["https://static.actu.fr/uploads/2017/03/25261-170302101142908-0011.jpg", 48.845, 2.37],
    ["https://www.fiesta-republic.com/fr/images_bdd_2018/9732-fausse-crotte.jpg", 48.815, 2.31],
    ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Sheep_dropping_J1.jpg/1200px-Sheep_dropping_J1.jpg", 48.75, 2.33],
    ["https://medias.lagranderecre.fr/imgs/1/1200x1200/836953V01_02.jpg", 48.4465, 2.33],
  ];

  constructor(private toastController: ToastController, private nativeStorage: NativeStorage, private http: HttpClient) { }

  async toast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  storeNative(value) {
    console.log('storing token : ' + value)
    this.nativeStorage.setItem('token', value)
      .then(
        () => console.log('Stored item!'),
        error => console.error('Error storing item', error)
      );
  }

  getNative() {
    this.nativeStorage.getItem('token')
      .then(
        data => console.log(data),
        error => console.error(error)
      );
  }

  getUserInfos(): Promise<any> {
    return new Promise(resolve => {
      this.nativeStorage.getItem('token')
        .then(data => {
          console.log('token : ' + data)
          this.http.get('http://localhost:8888/mokkaserver/?login=getUserInfos&token=' + data)
            .subscribe((data: any) => {
              console.log('getuserinfosPromise')
              resolve(data)
            })
        },
          error => console.error(error));
    })
  }
}
