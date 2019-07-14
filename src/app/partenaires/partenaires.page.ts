import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { GlobalService } from './../global.service';

@Component({
  selector: 'app-partenaires',
  templateUrl: './partenaires.page.html',
  styleUrls: ['./partenaires.page.scss'],
})
export class PartenairesPage implements OnInit {
checkbox=false;
nom;
prenom;
entreprise;
site;
name;
  constructor(private navCtrl: NavController, private modalCtrl: ModalController, private global: GlobalService) { }

  ngOnInit() {
  }

  back() {
    this.modalCtrl.dismiss();
  }

  send(){
    if(this.checkbox===true){
      this.global.toast("Votre message a bien été envoyé, nous vous répondrons d'ici 24h !")
      this.modalCtrl.dismiss()
    }else{
      this.global.toast("Veuillez d'abord accepter la conservation de vos données afin que nous puissions vous recontacter")
    }
  }

}
