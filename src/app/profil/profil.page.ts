import { GlobalService } from './../global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  constructor(private global: GlobalService) { }

  ngOnInit() {
    this.global.getUserInfos().then((data) => {
      console.log('heeeey', data)
    })
  }

}
