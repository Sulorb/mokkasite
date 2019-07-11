import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plus',
  templateUrl: './plus.page.html',
  styleUrls: ['./plus.page.scss'],
})
export class PlusPage implements OnInit {



  constructor(private modalCtrl: ModalController, private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  back() {
    this.modalCtrl.dismiss()
  }

  goToPage(pageName) {
    console.log(pageName)
    this.router.navigate(['/' + pageName]);

  }

}
