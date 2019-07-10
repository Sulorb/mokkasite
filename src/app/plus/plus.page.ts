import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-plus',
  templateUrl: './plus.page.html',
  styleUrls: ['./plus.page.scss'],
})
export class PlusPage implements OnInit {



  constructor(private modalCtrl: ModalController, private navCtrl: NavController) { }

  ngOnInit() {
  }

  back() {
    this.modalCtrl.dismiss()
  }

  goToPage(pageName) {
    console.log(pageName)
  }

}
