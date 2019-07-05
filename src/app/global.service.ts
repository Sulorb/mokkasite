import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  // cookieService.delete('test');
  language = "fr";

  places = [
    ["http://www.pnr-scarpe-escaut.fr/sites/default/files/imagecache/evenement_pleine_page_image_large/sources/depot_sauvage_3.jpg", 48.865, 2.33],
    ["http://www.ecouflant.fr/medias/2017/03/depot-sauvage.jpg", 48.845, 2.37],
    ["https://images.larepubliquedespyrenees.fr/2012/05/31/56815f97a43f5e4d4094696d/golden/les-dechets-ont-ete-retrouves-sur-un-petit-chemin-de-randonnee-dr.jpg", 48.815, 2.31],
    ["https://static.actu.fr/uploads/2015/04/L176607_HD01005385.JPG", 48.75, 2.33],
    ["https://cdn-s-www.estrepublicain.fr/images/EF5FCA7C-65D6-4400-8C1A-A2A5D003EBC5/LER_22/tout-depot-sauvage-constitue-une-infraction-reprimee-par-le-code-penal-et-est-passible-d-une-amende-1523801299.jpg", 48.4465, 2.33],
  ];

  // serverSite = "https://joingaia.fr/joingaia-back/?";
  serverSite = "http://localhost:8888/mokkaserver/?";


  constructor(private toastController: ToastController, private http: HttpClient, private cookieService: CookieService, private loadingController: LoadingController) { }


  isLoading = false;


  async presentLoader() {
    this.isLoading = true;
    return await this.loadingController.create({
      duration: 5000,
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
      duration: 2000
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
          console.log('getplaces : ')
          resolve(data)
        })
    })
  }

  addPlace(item) {
    this.http.post(this.serverSite + 'places=addPlace', item)
      .subscribe((data: any) => {
        console.log('addPlace : ', item)
      })
  }


}
