import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { CguPage } from '../cgu/cgu.page';
import { MentionsPage } from '../mentions/mentions.page';
import { AproposPage } from '../apropos/apropos.page';
import { PartenairesPage } from '../partenaires/partenaires.page';

@Component({
  selector: 'app-plus',
  templateUrl: './plus.page.html',
  styleUrls: ['./plus.page.scss'],
})
export class PlusPage implements OnInit {

  constructor(private modalController: ModalController, private navCtrl: NavController, private cookieService: CookieService) { }

  ngOnInit() {
  }

  back() {
    this.modalController.dismiss()
  }

  async goToPartenaires() {
    const modal = await this.modalController.create({
      component: PartenairesPage,
      backdropDismiss: false
    });
    return await modal.present();
  }

  async goToCgu() {
    const modal = await this.modalController.create({
      component: CguPage,
      backdropDismiss: false
    });
    return await modal.present();
  }

  async goToMentions() {
    const modal = await this.modalController.create({
      component: MentionsPage,
      backdropDismiss: false
    });
    return await modal.present();
  }

  async goToApropos() {
    const modal = await this.modalController.create({
      component: AproposPage,
      backdropDismiss: false
    });
    return await modal.present();
  }

  deconnexion() {
    this.cookieService.delete('token');
    this.modalController.dismiss()
    this.navCtrl.navigateRoot('connection');
  }

}
