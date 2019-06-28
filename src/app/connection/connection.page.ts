import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
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

  constructor(public router: Router, private navCtrl: NavController, private http: HttpClient) { }

  ngOnInit() {
  }

  connexion() {
    this.http.get('http://localhost:8888/mokkaserver/?login=connection&name=' + this.name + '&pass=' + this.password)
      .subscribe((data) => {
        console.log(data)
      })

  }

  inscription() {
    this.navCtrl.navigateForward('inscription')
  }

}
