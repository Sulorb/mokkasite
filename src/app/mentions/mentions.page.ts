import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mentions',
  templateUrl: './mentions.page.html',
  styleUrls: ['./mentions.page.scss'],
})
export class MentionsPage implements OnInit {

  constructor(private navCtrl: NavController, private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  back() {
    this.modalCtrl.dismiss();
  }

}
