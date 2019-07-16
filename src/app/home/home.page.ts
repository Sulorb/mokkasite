import { PaiementPage } from './../paiement/paiement.page';
import { UploadPage } from './../upload/upload.page';
import { ValidationPage } from './../validation/validation.page';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './../global.service';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import leaflet from 'leaflet';
import { ModalController, PopoverController, NavController } from '@ionic/angular';
import { PlusPage } from '../plus/plus.page';
import { TutoPage } from '../tuto/tuto.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  isConnected = false;

  constructor(
    private global: GlobalService,
    private elementRef: ElementRef,
    public modalController: ModalController,
    private http: HttpClient,
    private cookieService: CookieService,
    public popoverController: PopoverController,
    private navCtrl: NavController
  ) { }

  ionViewWillEnter() {
    console.log('WILLENTER HOME');
    // Si y a un token en cookie on check la map avec token sinon sans
    if (this.map) {
      this.map.remove();
    }
    this.loadmap();
    if (this.cookieService.check('token')) {
      this.loadPlacesWithToken(this.cookieService.get('token'));
      this.isConnected = true;
    } else {
      this.loadPlaces();
      this.isConnected = false;
    }
    if (!this.cookieService.check('alreadySeen')) {
      this.presentPopover();
    }
  }

  ouvrirProfil() {
    if (this.isConnected)
      this.navCtrl.navigateForward('profil')
    else {
      this.navCtrl.navigateForward('inscription')
      this.global.toast("Veuillez d'abord vous inscrire pour rejoindre notre ligue !")
    }
  }

  async presentPopover() {
    const popover = await this.popoverController.create({
      component: TutoPage,
      translucent: true
    });
    return await popover.present();
  }

  ngOnInit() {
    console.log('didLoadHome');
    this.global.getCookieToken();
  }

  focusMap() {
    this.map
      .locate({
        setView: true,
        maxZoom: 20
      })
      .on('locationfound', e => {
        this.map.setView([e.latlng.lat, e.latlng.lng], 15);
        console.log('loc', e);
      })
      .on('locationerror', err => {
        alert(err.message);
      });
  }

  loadmap() {
    this.map = leaflet.map('map', { zoomControl: false });
    leaflet
      .tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        maxZoom: 20
      })
      .addTo(this.map);

    this.map
      .locate({
        setView: true,
        maxZoom: 20
      })
      .on('locationfound', e => {
        this.map.setView([e.latlng.lat, e.latlng.lng], 15);
        console.log('loc', e);
      })
      .on('locationerror', err => {
        alert(err.message);
      });
  }

  loadPlacesWithToken(token) {
    this.global.loadPlacesWithToken(token).then((data: any) => {
      for (var i = 0; i < data.length; i++) {
        let customOptions = { maxWidth: '365', className: 'customPopup' };

        // if data.type = (tres)sale on affiche ça
        // if monId se trouve dans place.mission, on affiche bouton valider

        var dirty = 'Sale';
        var amountMembers = 2;
        // On transforme les variables en texte pertinents
        if (data[i]['dirtyKind'] == 'tressale') {
          dirty = 'Très sale';
          amountMembers = 3;
        } else if (data[i]['dirtyKind'] == 'hypersale') {
          dirty = 'Hyper sale';
          amountMembers = 4;
        }

        // feuille jaune / vert /poubellefondnoir
        // poubelle si cleaned sinon jaune et aléatoirement certains verts
        var markerSale = leaflet.icon({
          iconUrl: 'assets/pictos/feuilleJaune.svg',

          iconSize: [50, 50], // size of the icon
          iconAnchor: [25, 50], // point of the icon which will correspond to marker's location
          popupAnchor: [0, -50] // point from which the popup should open relative to the iconAnchor
        });

        var dateCleaned = new Date(data[i]['dateCleaned']).getTime();
        var dateNow = new Date().getTime();
        console.log('cleaned : ' + dateCleaned + 'now : ' + dateNow + 'nowMoinsUnJour  ' + (dateNow - 86400000));

        if (dateCleaned > dateNow - 86400000) {
          console.log("nettoyé y a moins d'une jour");
          if (data[i]['pictureCleaned'] !== null) {
            var markerSale = leaflet.icon({
              iconUrl: 'assets/pictos/poubelleFondNoir.svg',

              iconSize: [50, 50], // size of the icon
              iconAnchor: [25, 50], // point of the icon which will correspond to marker's location
              popupAnchor: [0, -50] // point from which the popup should open relative to the iconAnchor
            });
          }
        } else {
          console.log("nettoyé y a PLUS d'une jour");
          if (data[i]['pictureCleaned'] !== null) {
            var markerSale = leaflet.icon({
              iconUrl: 'assets/pictos/feuilleVerte.svg',

              iconSize: [50, 50], // size of the icon
              iconAnchor: [25, 50], // point of the icon which will correspond to marker's location
              popupAnchor: [0, -50] // point from which the popup should open relative to the iconAnchor
            });
          }
        }

        // différentes popups selon le type de compte connecté
        // si user lambda :
        // <img src="` + data[i]['pictureDirty'] + `"><br>
        var popupContent =
          `
        <img src="` + data[i]['pictureDirty'] + `" style="max-width: 100%; max-height: 100px; margin: auto; display: block;"><br>
        `;

        if (data[i]['pictureCleaned'] != null) {
          popupContent += ` <img src="` + data[i]['pictureCleaned'] + `" style="max-width: 100%; max-height: 100px; margin: auto; display: block;"><br>`;
        }

        popupContent += `<img src="assets/pictos/poubelle.svg" width="25px">` +
          dirty +
          `<span style="position: absolute; right: 20px; border-radius: 10px; border: 2px solid red; color: red; padding: 3px;">` +
          data[i]['rewardPoints'] +
          `pts</span><br>
        <img src="assets/pictos/membres.svg" width="25px">` +
          amountMembers +
          ` pers. min.<br>
        <p style="margin: 2px;">Description : ` +
          data[i]['description'] +
          `</p><br>
        `;

        if (data[i]['pictureCleaned'] !== null) {
          console.log('picturecleaned pas nul');
          popupContent += `Lieu nettoyé grâce à la communauté !`;
        } else if (data[i]['accountType'] == 'entreprise') {
          console.log('accountType == entreprise');
          popupContent +=
            `<a class=marker` +
            data[i]['id'] +
            ` data-merchId="` +
            i +
            `" style="margin: auto; display: block; text-align: center;">Investir pour ce nettoyage</a>`;
        } else if (data[i]['hasAcceptedMission'] == true) {
          console.log('picturecleaned  nul mission acceptée');
          popupContent +=
            `<a class=marker` +
            data[i]['id'] +
            ` data-merchId="` +
            i +
            `" style="margin: auto; display: block; text-align: center;">Valider</a>`;
        } else {
          popupContent +=
            `<a class=marker` +
            data[i]['id'] +
            ` data-merchId="` +
            i +
            `" style="margin: auto; display: block; text-align: center;">J'accepte la mission</a>`;
          console.log('picturecleaned  nul mission PAS acceptée');
        }

        let marker: any = leaflet
          .marker([data[i]['lat'], data[i]['lng']], { icon: markerSale })
          .bindPopup(popupContent, customOptions)
          .addTo(this.map);
        let self = this;
        let markerInfos = data[i];

        // si j'ouvre la popup
        marker.on('popupopen', function () {
          console.log('poopup open : ', markerInfos);
          if (markerInfos['pictureCleaned'] == null) {
            console.log('lemarker :', markerInfos);
            // add event listener to newly added a.merch-link element
            self.elementRef.nativeElement.querySelector('.marker' + markerInfos['id']).addEventListener('click', e => {
              console.log('infos : ', markerInfos);
              // s'il faut valider mission
              if (markerInfos['accountType'] == 'entreprise') {
                self.pageInvestissement();
              } else if (markerInfos['hasAcceptedMission'] == true) {
                self.validerMission(markerInfos);
              } else {
                self.accepterMission(markerInfos);
              }
            });
          }
        });
      }
    });
  }

  loadPlaces() {
    this.global.loadPlaces().then((data: any) => {
      for (var i = 0; i < data.length; i++) {
        let customOptions = { maxWidth: '365', className: 'customPopup' };

        // if data.type = (tres)sale on affiche ça
        // if monId se trouve dans place.mission, on affiche bouton valider

        var dirty = 'Sale';
        var amountMembers = 2;
        // On transforme les variables en texte pertinents
        if (data[i]['dirtyKind'] == 'tressale') {
          dirty = 'Très sale';
          amountMembers = 3;
        } else if (data[i]['dirtyKind'] == 'hypersale') {
          dirty = 'Hyper sale';
          amountMembers = 4;
        }

        // feuille jaune / vert /poubellefondnoir
        // poubelle si cleaned sinon jaune et aléatoirement certains verts
        var markerSale = leaflet.icon({
          iconUrl: 'assets/pictos/feuilleJaune.svg',

          iconSize: [50, 50], // size of the icon
          iconAnchor: [25, 50], // point of the icon which will correspond to marker's location
          popupAnchor: [0, -50] // point from which the popup should open relative to the iconAnchor
        });

        var dateCleaned = new Date(data[i]['dateCleaned']).getTime();
        var dateNow = new Date().getTime();

        if (dateCleaned > dateNow - 86400000) {
          if (data[i]['pictureCleaned'] !== null) {
            var markerSale = leaflet.icon({
              iconUrl: 'assets/pictos/poubelleFondNoir.svg',

              iconSize: [50, 50], // size of the icon
              iconAnchor: [25, 50], // point of the icon which will correspond to marker's location
              popupAnchor: [0, -50] // point from which the popup should open relative to the iconAnchor
            });
          }
        } else {
          if (data[i]['pictureCleaned'] !== null) {
            var markerSale = leaflet.icon({
              iconUrl: 'assets/pictos/feuilleVerte.svg',

              iconSize: [50, 50], // size of the icon
              iconAnchor: [25, 50], // point of the icon which will correspond to marker's location
              popupAnchor: [0, -50] // point from which the popup should open relative to the iconAnchor
            });
          }
        }

        // différentes popups selon le type de compte connecté
        // si user lambda :
        // <img src="` + data[i]['pictureDirty'] + `"><br>

        var popupContent =
          `
      <img src="` + data[i]['pictureDirty'] + `" style="max-width: 100%; max-height: 100px; margin: auto; display: block;"><br>
      `;

        if (data[i]['pictureCleaned'] != null) {
          popupContent += ` <img src="` + data[i]['pictureCleaned'] + `" style="max-width: 100%; max-height: 100px; margin: auto; display: block;"><br>`;
        }

        popupContent +=
          `
        <img src="assets/pictos/poubelle.svg" width="25px">` +
          dirty +
          `<span style="position: absolute; right: 20px; border-radius: 10px; border: 2px solid red; color: red; padding: 3px;">` +
          data[i]['rewardPoints'] +
          `pts</span><br>
        <img src="assets/pictos/membres.svg" width="25px">` +
          amountMembers +
          ` pers. min.<br>
        <p style="margin: 2px;">Description : ` +
          data[i]['description'] +
          `</p><br>
        `;

        if (data[i]['pictureCleaned'] !== null) {
          popupContent += `Lieu nettoyé grâce à la communauté !`;
        } else {
          popupContent +=
            `<a class=marker` +
            data[i]['id'] +
            ` data-merchId="` +
            i +
            `" style="margin: auto; display: block; text-align: center;">J'accepte la mission</a>`;
        }

        let marker: any = leaflet
          .marker([data[i]['lat'], data[i]['lng']], { icon: markerSale })
          .bindPopup(popupContent, customOptions)
          .addTo(this.map);
        let self = this;
        let markerInfos = data[i];

        // si j'ouvre la popup
        marker.on('popupopen', function () {
          console.log('poopup open');
          if (markerInfos['pictureCleaned'] == null) {
            self.elementRef.nativeElement.querySelector('.marker' + markerInfos['id']).addEventListener('click', e => {
              console.log('infos : ', markerInfos);
              // get id from attribute
              console.log('eee', e);
              // var merchId = e.target.getAttribute("data-merchId");

              // TO DO renvoyer vers inscription plutôt
              self.inscription();
            });
          }
        });
      }
    });
  }

  inscription() {
    this.navCtrl.navigateRoot('inscription')
    this.global.toast('Veuillez vous inscrire pour rejoindre notre ligue');
  }
  accepterMission(placeInfos) {
    //this.navCtrl.push(MerchantPage, { merchantId: merchantId });
    console.log('acceptation mission ' + placeInfos['id']);

    this.http
      .get(this.global.serverSite + 'places=acceptMission&token=' + this.cookieService.get('token') + '&placeId=' + placeInfos['id'])
      .subscribe((data: any) => {
        console.log(data);
        if (data == 'alreadyMission') {
          this.global.toast('Vous avez déjà accepté cette mission !');
        } else if (data == true) {
          this.global.toast(
            'Vous avez bien accepté cette mission ! Cliquez sur le bouton "Valider" lorsque vous aurez nettoyé la zone pour envoyer votre photo.'
          );
          // On change le bouton texte
          console.log('ici on accepte mission true et on change en valider');
          placeInfos['hasAcceptedMission'] = true;

          document.getElementsByClassName(
            'marker' + placeInfos['id']
          )[0].innerHTML = `<img src="assets/pictos/cercleChecked.svg" width="20px" style="vertical-align: bottom">Valider`;
        }
      });
  }

  async validerMission(placeInfos) {
    // to do pour valider : ouvrir page proposant de prendre une photo du lieu avec transfert données de la place
    const modal = await this.modalController.create({
      component: ValidationPage,
      componentProps: { data: placeInfos },
      backdropDismiss: false
    });
    modal.onWillDismiss().then(dataDismissed => {
      console.log('va être dismiss', dataDismissed);
      if (dataDismissed.data == true) {
        console.log('dismissed via valider');
        this.ionViewWillEnter();
      }
    });

    return await modal.present();
  }

  async pageInvestissement() {
    // to do pour valider : ouvrir page proposant de prendre une photo du lieu avec transfert données de la place
    const modal = await this.modalController.create({
      component: PaiementPage,
      backdropDismiss: false
    });

    return await modal.present();
  }

  async openModalMenu() {
    const modal = await this.modalController.create({
      component: PlusPage,
      backdropDismiss: false
    });
    return await modal.present();
  }

  async openUploadMenu() {
    console.log('on ouvre la modale upload')
    if (this.isConnected) {
      const modal = await this.modalController.create({
        component: UploadPage,
        backdropDismiss: false
      });

      modal.onWillDismiss().then(dataDismissed => {
        console.log('va être dismiss upload', dataDismissed);
        if (dataDismissed.data == true) {
          console.log('dismissed via upload');
          this.ionViewWillEnter();
        }
      });

      return await modal.present();
    } else {
      this.navCtrl.navigateForward('upload')
      this.global.toast("Veuillez d'abord vous inscrire pour rejoindre notre ligue !")
    }
  }

  openPodium() {
    if (this.isConnected) {
      this.navCtrl.navigateForward('podium')
    } else {
      this.navCtrl.navigateForward('inscription')
      this.global.toast("Veuillez d'abord vous inscrire pour rejoindre notre ligue !")
    }
  }

  openMissions() {
    if (this.isConnected) {
      this.navCtrl.navigateForward('missions')
    } else {
      this.navCtrl.navigateForward('inscription')
      this.global.toast("Veuillez d'abord vous inscrire pour rejoindre notre ligue !")
    }
  }

}
