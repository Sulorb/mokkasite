import { GlobalService } from './../global.service';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import leaflet from 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;

  userLat;
  userLon;

  itemToUpload = "assets/icon/favicon.png";

  constructor(public router: Router, private geolocation: Geolocation, private global: GlobalService, private elementRef: ElementRef) {

  }

  ionViewWillEnter() {
    this.loadShits()
  }

  ngOnInit() {
    this.loadmap();
    console.log('didLoadHome')
    this.global.getNative()

  }

  loadmap() {
    this.map = leaflet.map("map")
    leaflet.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      maxZoom: 20
    }).addTo(this.map);
    this.map.locate({
      setView: true,
      maxZoom: 20
    }).on('locationfound', (e) => {
      console.log('loc', e)
    }).on('locationerror', (err) => {
      alert(err.message);
    })
  }


  loadShits() {

    for (var i = 0; i < this.global.shits.length; i++) {
      let customOptions = { 'maxWidth': '500' }
      var popupLink = '<a class="merch-link" data-merchId="' + i + '">Belle merde épaisse</a><img src="' + this.global.shits[i][0] + '">'

      let marker: any = leaflet.marker([this.global.shits[i][1], this.global.shits[i][2]]).bindPopup(popupLink, customOptions).addTo(this.map)
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
  }
  // provisoire
  goToMerchant(merchantId) {
    //this.navCtrl.push(MerchantPage, { merchantId: merchantId });
    console.log("going to merchant " + merchantId)
  }

  goToOptions() {
    this.router.navigate(['/options'])
  }

  goToMore() {
    this.router.navigate(['/plus'])
  }

  goToPodium() {
    this.router.navigate(['/podium'])
  }

  report() {
    console.log('reprt')
    // passage page avec photo
    this.router.navigate(['/upload', { image: this.itemToUpload }])


  }

}
