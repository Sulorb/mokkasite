import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Component, OnInit, ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-plus',
  templateUrl: './plus.page.html',
  styleUrls: ['./plus.page.scss'],
})
export class PlusPage implements OnInit {
  @ViewChild(CalendarComponent) myCal: CalendarComponent;


  text = 'Cette application ShitScan est géniale !';
  url = 'https://ShitScan.com';

  constructor(private screenOrientation: ScreenOrientation, private alertCtrl: AlertController, @Inject(LOCALE_ID) private locale: string, private socialSharing: SocialSharing) { }


  showPromotion = false;

  event = {
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    allDay: false
  };

  minDate = new Date().toISOString();

  eventSource = [];

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };
  orientation;

  async shareTwitter() {
    // Either URL or Image
    this.socialSharing.shareViaTwitter(null, null, this.url).then(() => {
      // Success
    }).catch((e) => {
      // Error!
    });
  }

  async shareWhatsApp() {
    // Text + Image or URL works
    this.socialSharing.shareViaWhatsApp(this.text, null, this.url).then(() => {
      // Success
    }).catch((e) => {
      // Error!
    });
  }

  ngOnInit() {
    this.addEvent1();
    this.addEvent2();

    setInterval(() => {
      console.log('a', this.orientation)
      this.orientation = this.screenOrientation.type
    }, 1000);
  }

  next() {
    var swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slideNext();
  }

  back() {
    var swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slidePrev();
  }

  resetEvent() {
    this.event = {
      title: 'Crotte signalée',
      desc: 'à Paris',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      allDay: false
    };
  }

  // Attention : le code ci-dessous est une véritable poubelle
  addEvent1() {
    let eventCopy = {
      title: this.event.title,
      startTime: new Date('2019-05-3T12:23:52.056Z'),
      endTime: new Date('2019-05-7T12:23:52.056Z'),
      allDay: this.event.allDay,
      desc: this.event.desc
    }

    if (eventCopy.allDay) {
      let start = eventCopy.startTime;
      let end = eventCopy.endTime;

      eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
      eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
    }

    this.eventSource.push(eventCopy);
    this.myCal.loadEvents();
    this.resetEvent();
  }

  addEvent2() {
    let eventCopy = {
      title: this.event.title,
      startTime: new Date('2019-05-12T12:23:52.056Z'),
      endTime: new Date(this.event.endTime),
      allDay: this.event.allDay,
      desc: this.event.desc
    }

    if (eventCopy.allDay) {
      let start = eventCopy.startTime;
      let end = eventCopy.endTime;

      eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
      eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
    }

    this.eventSource.push(eventCopy);
    this.myCal.loadEvents();
    this.resetEvent();
  }


}
