import { GlobalService } from './../global.service';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import leaflet from 'leaflet';
import { ModalController } from '@ionic/angular';
import { PlusPage } from '../plus/plus.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;

  constructor(private global: GlobalService, private elementRef: ElementRef, public modalController: ModalController) { }

  ionViewWillEnter() {
    this.loadPlaces()
  }

  ngOnInit() {
    this.loadmap();
    console.log('didLoadHome')
    this.global.getCookieToken()
  }

  focusMap() {
    this.map.locate({
      setView: true,
      maxZoom: 20
    }).on('locationfound', (e) => {
      this.map.setView([e.latlng.lat, e.latlng.lng], 15);
      console.log('loc', e)
    }).on('locationerror', (err) => {
      alert(err.message);
    })
  }

  loadmap() {
    this.map = leaflet.map("map", { zoomControl: false })
    leaflet.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      maxZoom: 20
    }).addTo(this.map);

    this.map.locate({
      setView: true,
      maxZoom: 20
    }).on('locationfound', (e) => {
      this.map.setView([e.latlng.lat, e.latlng.lng], 15);
      console.log('loc', e)
    }).on('locationerror', (err) => {
      alert(err.message);
    })
  }


  loadPlaces() {
    this.global.loadPlaces().then((data: any) => {
      for (var i = 0; i < data.length; i++) {
        let customOptions = { 'maxWidth': '365' }

        // if data.type = (tres)sale on affiche ça
        // if monId se trouve dans place.mission, on affiche bouton valider

        // On transforme les variables en texte pertinents
        var dirty = data[i]['dirtyKind'] == 'sale' ? 'Très sale' : 'Pas juste sale'

        // différentes popups selon le type de compte connecté
        // si user lambda :
        var popupLink = `
        <img src="` + data[i]['pictureDirty'] + `"><br>
        <img src="assets/pictos/poubelle.svg" width="25px">` + dirty + `<br>
        Description : `+ data[i]['description'] +
          `<a class="merch-link" data-merchId="` + i + `">J'accepte la mission</a>

        `

        // '<img src="' + data[i]['pictureDirty'] + '"><a class="merch-link" data-merchId="' + i + '">Lieu très sale</a><br><button style="border:1px solid red">Je compte m\'y rendre à telle date</button><button style="border:1px solid red">J\'ai nettoyé cet endroit</button> Je suis le marqueur' + i + 'cf : ' + data[i]['rewardPoints']

        let marker: any = leaflet.marker([data[i]['lat'], data[i]['lng']]).bindPopup(popupLink, customOptions).addTo(this.map)
        let self = this;

        marker.on('popupopen', function () {
          console.log('poopup open')
          // add event listener to newly added a.merch-link element
          self.elementRef.nativeElement.querySelector(".merch-link")
            .addEventListener('click', (e) => {
              // get id from attribute
              console.log('eee', e)
              var merchId = e.target.getAttribute("data-merchId");
              self.goToMerchant(merchId)
            });
        });

      }
    })
  }

  // provisoire
  goToMerchant(merchantId) {
    //this.navCtrl.push(MerchantPage, { merchantId: merchantId });
    console.log("going to merchant " + merchantId)
  }

  async openModalMenu() {
    const modal = await this.modalController.create({
      component: PlusPage
    });
    return await modal.present();
  }


}
