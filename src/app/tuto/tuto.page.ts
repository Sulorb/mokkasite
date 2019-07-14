import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-tuto',
  templateUrl: './tuto.page.html',
  styleUrls: ['./tuto.page.scss']
})
export class TutoPage implements OnInit {
  constructor(private popoverCtrl: PopoverController, private cookieService: CookieService) {}

  ngOnInit() {}
  back() {
    this.popoverCtrl.dismiss();
  }
  declareSeen() {
    this.cookieService.set('alreadySeen', 'true');
    this.popoverCtrl.dismiss();

  }
}
