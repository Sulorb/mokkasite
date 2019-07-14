import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-podium',
  templateUrl: './podium.page.html',
  styleUrls: ['./podium.page.scss'],
})
export class PodiumPage implements OnInit {


  ranks = [
    {
      img: 'assets/rank1.png',
      name: "Jean Sarkozy"
    },
    {
      img: 'assets/rank2.png',
      name: "Christophe Lambert"
    },
    {
      img: 'assets/rank3.png',
      name: "Bernadette Chirac"
    },
    {
      img: 'assets/poop.png',
      name: "Anne Hidalgo"
    },
    {
      img: 'assets/poop.png',
      name: "Anne Hidalgo"
    },
    {
      img: 'assets/poop.png',
      name: "Anne Hidalgo"
    },
    {
      img: 'assets/poop.png',
      name: "Prince William"
    },
    {
      img: 'assets/poop.png',
      name: "Naël Messaoudene"
    },
    {
      img: 'assets/poop.png',
      name: "Jean Petitjean"
    },
    {
      img: 'assets/poop.png',
      name: "Crotteur Man"
    },
    {
      img: 'assets/poop.png',
      name: "Wanna Shit"
    },
    {
      img: 'assets/poop.png',
      name: "Verre d'eau"
    },
    {
      img: 'assets/poop.png',
      name: "Verre de Cidre"
    },
    {
      img: 'assets/poop.png',
      name: "Alphonse Brown"
    },
    {
      img: 'assets/poop.png',
      name: "Babar Terroriste"
    },
    {
      img: 'assets/poop.png',
      name: "Tanhna Tropri"
    },
    {
      img: 'assets/poop.png',
      name: "Gros maigre"
    },
    {
      img: 'assets/poop.png',
      name: "Quasiment fini"
    },
    {
      img: 'assets/poop.png',
      name: "Taspa Komençai"
    },
    {
      img: 'assets/poop.png',
      name: "Untruc Carré"
    }
  ]


  constructor() { }



  ngOnInit() {
  }


}
