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

  constructor(private navCtrl: NavController, private http: HttpClient, private global: GlobalService) { }

  ngOnInit() {
  }

  connexion() {
    this.http.get('http://localhost:8888/mokkaserver/?login=connection&name=' + this.name + '&pass=' + this.password)
      .subscribe((data: any) => {
        console.log(data)
        if (data.connexion == 1) {
          this.global.toast('Connexion réussie !');
          this.navCtrl.navigateRoot('home');
        } else {
          this.global.toast('Mauvais identifiant ou mot de passe');
        }
      })
  }


}
