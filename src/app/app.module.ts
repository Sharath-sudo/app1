import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './Warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';

import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';



// .ts extension is automatically added by the webpack

// Typescript feature


@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
