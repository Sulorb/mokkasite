import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  // serverSite = "https://joingaia.fr/joingaia-back/index.php?";
  // serverSite = "http://localhost:8888/mokkaserver/?";
  serverSite = "http://localhost/joingaia-back/?";


  constructor(private toastController: ToastController, private http: HttpClient, private cookieService: CookieService, private loadingController: LoadingController) { }


  isLoading = false;


  async presentLoader() {
    this.isLoading = true;
    return await this.loadingController.create({
      duration: 10000,
      backdropDismiss: false
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }
  async dismissLoader() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }

  async toast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      showCloseButton: true,
      closeButtonText: 'Fermer'
    });
    toast.present();
  }


  storeNative(value) {
    this.cookieService.set('token', value);

    console.log('storing token : ' + value)
  }

  getCookieToken() {


    console.log('LE GET  cookie: ', this.cookieService.get('token'))
  }

  getUserInfos(): Promise<any> {
    return new Promise(resolve => {
      if (this.cookieService.check('token') === true) {
        console.log('token : ' + this.cookieService.get('tokfen'))
        this.http.get(this.serverSite + 'login=getUserInfos&token=' + this.cookieService.get('token'))
          .subscribe((data: any) => {
            console.log('getuserinfosPromise')
            resolve(data)
          })
      } else {
        resolve(false)
      }
    })
  }

  loadPlaces(): Promise<any> {
    return new Promise(resolve => {
      this.http.get(this.serverSite + 'places=getPlaces')
        .subscribe((data: any) => {
          console.log('loadPlaces : ', data)
          resolve(data)
        })
    })
  }

  loadPlacesWithToken(token): Promise<any> {
    return new Promise(resolve => {
      this.http.get(this.serverSite + 'places=getPlacesWithToken&token=' + token)
        .subscribe((data: any) => {
          console.log('loadPlacesWithToken : ', data)
          resolve(data)
        })
    })
  }

  addPlace(item): Promise<any> {
    return new Promise(resolve => {
      this.http.post(this.serverSite + 'places=addPlace', item)
        .subscribe((data: any) => {
          console.log('addPlace : ', item)
          resolve(data)
        })
    })
  }

  validatePlace(item): Promise<any> {
    return new Promise(resolve => {
      this.http.post(this.serverSite + 'places=validatePlace', item)
        .subscribe((data: any) => {
          console.log('addPlace : ', item)
          resolve(data)
        })
    })
  }


}
