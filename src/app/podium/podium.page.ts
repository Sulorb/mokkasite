import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-podium',
  templateUrl: './podium.page.html',
  styleUrls: ['./podium.page.scss'],
})
export class PodiumPage implements OnInit {

  constructor(private navCtrl: NavController) { }



  ngOnInit() {
  }

  back(){
    this.navCtrl.pop()
  }


}
