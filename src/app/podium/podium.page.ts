import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';



@Component({
  selector: 'app-podium',
  templateUrl: './podium.page.html',
  styleUrls: ['./podium.page.scss'],
})
export class PodiumPage implements OnInit {

  constructor(private navCtrl: NavController, private platform: Platform) { }


  isMobile = true;
  ngOnInit() {
    if (!this.platform.is('mobile')) {
      this.isMobile = false;
    }
  }

  back() {
    this.navCtrl.pop()
  }


}
