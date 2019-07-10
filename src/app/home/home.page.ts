import { GlobalService } from './../global.service';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import leaflet from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;

  constructor(private global: GlobalService, private elementRef: ElementRef) { }

  ionViewWillEnter() {
    this.loadPlaces()
  }

  ngOnInit() {
    this.loadmap();
    console.log('didLoadHome')
    this.global.getCookieToken()
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
      console.log('loc', e)
    }).on('locationerror', (err) => {
      alert(err.message);
    })
  }


  loadPlaces() {

    this.global.loadPlaces().then((data: any) => {
      console.log('dataplaces:', data)
      for (var i = 0; i < data.length; i++) {
        console.log('dataplaces0:', data[0])
        let customOptions = { 'maxWidth': '500' }
        var popupLink = '<img src="' + data[i]['pictureDirty'] + '"><a class="merch-link" data-merchId="' + i + '">Lieu très sale</a><br><button style="border:1px solid red">Je compte m\'y rendre à telle date</button><button style="border:1px solid red">J\'ai nettoyé cet endroit</button>'

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


}
