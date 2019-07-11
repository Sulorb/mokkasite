import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-partenaires',
  templateUrl: './partenaires.page.html',
  styleUrls: ['./partenaires.page.scss'],
})
export class PartenairesPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  back() {
    this.navCtrl.pop();
  }

}
