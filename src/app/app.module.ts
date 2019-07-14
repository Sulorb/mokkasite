import { ValidationPageModule } from './validation/validation.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';


import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture/ngx';
import { File } from '@ionic-native/file/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';

import { IonicStorageModule } from '@ionic/storage';

import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

import { HttpClientModule } from '@angular/common/http';
import { WebcamModule } from 'ngx-webcam';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { CookieService } from 'ngx-cookie-service';
import { PlusPageModule } from './plus/plus.module';
import { CguPageModule } from './cgu/cgu.module';
import { MentionsPageModule } from './mentions/mentions.module';
import { AproposPageModule } from './apropos/apropos.module';
import { PartenairesPageModule } from './partenaires/partenaires.module';
import { UploadPageModule } from './upload/upload.module';
import { TutoPageModule } from './tuto/tuto.module';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      backButtonText: '',
    }),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    WebcamModule,
    AppRoutingModule,
    PlusPageModule,
    CguPageModule,
    PartenairesPageModule,
    MentionsPageModule,
    AproposPageModule,
    ValidationPageModule,
    UploadPageModule,
    TutoPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CookieService,
    Geolocation,
    NativeStorage,
    Diagnostic,
    ScreenOrientation,
    SocialSharing,
    MediaCapture,
    Media,
    File,
    AndroidPermissions,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
