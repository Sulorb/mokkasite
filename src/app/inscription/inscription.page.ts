import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './../global.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage {
  name = "";
  password1 = "";
  password2 = "";

  constructor(private navCtrl: NavController, private http: HttpClient, private global: GlobalService) { }

  inscription() {

    if (this.name.length < 4) {
      this.global.toast("Saisis un pseudo d'au moins 4 caractères !")
    } else if (this.password1.length < 5 || this.password2.length < 5) {
      this.global.toast("Saisis un mot de passe d'au moins 5 caractères !")
    } else if (this.password1 != this.password2) {
      this.global.toast("Les mots de passe ne sont pas identiques !")
    } else {
      this.http.get('http://localhost:8888/mokkaserver/?login=registration&name=' + this.name + '&pass=' + this.password1)
        .subscribe((data: any) => {
          console.log(data)
          if (data.connexion == 1) {
            this.global.storeNative(data.token)
            this.global.toast('Inscription réussie !');
            this.navCtrl.navigateRoot('home');
          } else if (data.connexion == 0) {
            this.global.toast('Ce pseudo est déjà pris !');
          } else {
            this.global.toast('Erreur très frustrante et méconnue');
          }
        })
    }


  }

}
