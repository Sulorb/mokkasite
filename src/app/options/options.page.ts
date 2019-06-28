import { GlobalService } from './../global.service';

import { Component } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.page.html',
  styleUrls: ['./options.page.scss'],
})
export class OptionsPage {


  constructor(private global: GlobalService) { }




  ///////////////////

  onChange(ev) {
    console.log(ev.target.value)
    this.global.language = ev.target.value;
    console.log(this.global.language)
  }


}
