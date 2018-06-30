import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SocketIoModule } from 'ng-socket-io';

import { PwaApp } from './app.component';
import { PWAConfig } from "./app.pwa.config";
import { DirectivesModule } from "../directives/directives.module";
import { SocketsProvider } from '../providers/sockets/sockets';
import { config } from '../configurations/configuration';
import { ImagesProvider } from '../providers/images/images';
import { PreloaderProvider } from '../providers/preloader/preloader';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    PwaApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(PwaApp, PWAConfig.APP_CONFIG),
    DirectivesModule,
    HttpClientModule,
    SocketIoModule.forRoot(config.io)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    PwaApp
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SocketsProvider,
    ImagesProvider,
    PreloaderProvider
  ]
})
export class AppModule { }
