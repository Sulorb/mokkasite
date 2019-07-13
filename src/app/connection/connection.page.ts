import { CookieService } from 'ngx-cookie-service';
import { GlobalService } from './../global.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.page.html',
  styleUrls: ['./connection.page.scss'],
})
export class ConnectionPage implements OnInit {
  name = "";
  password = "";
  cookieValue = 'UNKNOWN';

  constructor(private navCtrl: NavController, private http: HttpClient, private global: GlobalService, private cookieService: CookieService) { }

  ngOnInit() {
    if (this.cookieService.check('token') === true) {
      console.log('token')
      this.http.get(this.global.serverSite + 'login=connectionWithToken&token=' + this.cookieService.get('token'))
        .subscribe((data: any) => {
          console.log(data)
          if (data.connexion === 1) {
            this.global.toast('Connexion automatique réussie !');
            this.global.storeNative(data.token);
            this.navCtrl.navigateRoot('home');
          } else {
            this.global.toast('Token erroné, veuillez vous reconnecter');
          }
        })
    }
  }

  connexion() {
    this.http.get(this.global.serverSite + 'login=connection&name=' + this.name + '&pass=' + this.password)
      .subscribe((data: any) => {
        console.log(data)
        if (data.connexion === 1) {
          this.global.toast('Connexion réussie !');
          console.log("SET TOKEN CONNECTION");
          this.global.storeNative(data.token);
          this.navCtrl.navigateRoot('home');
        } else {
          this.global.toast('Mauvais identifiant ou mot de passe');
        }
      })
  }


}
