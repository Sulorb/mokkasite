import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.page.html',
  styleUrls: ['./missions.page.scss'],
})
export class MissionsPage implements OnInit {

  missions = [
    {
      lieu: 'Quai de Seine'
    },
    {
      lieu: 'Forêt pas vierge de déchets'
    },
    {
      lieu: 'Bord de plage'
    },
    {
      lieu: 'Champs'
    },
  ]

  constructor(private navCtrl: NavController, private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(document)
  }

  back() {
    this.navCtrl.pop();
  }

  annuler(i){
    console.log('splice')
    this.missions.splice(i,1)
  }

}
