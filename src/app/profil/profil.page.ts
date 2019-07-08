import { GlobalService } from './../global.service';
import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';
import 'moment/locale/fr';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  userInfos = {
    name: '',
    date: ''
  }

  constructor(private global: GlobalService, private navCtrl: NavController) { }

  ngOnInit() {
  }

  
  back() {
    this.navCtrl.pop();
  }

  ionViewWillEnter() {
    this.global.getUserInfos().then((data: any) => {
      if(data){
        console.log('heeeey', data)
        data.date = moment(data.date).utc(true).calendar();
        this.userInfos = data;
      } else {
        this.global.toast('reconnectez vous')
      }
    })
  }

}
