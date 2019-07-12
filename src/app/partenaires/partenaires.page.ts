import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-partenaires',
  templateUrl: './partenaires.page.html',
  styleUrls: ['./partenaires.page.scss'],
})
export class PartenairesPage implements OnInit {

  constructor(private navCtrl: NavController, private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  back() {
    this.modalCtrl.dismiss();
  }

}