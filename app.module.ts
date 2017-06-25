import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Tv2DashboardComponent} from './tv2/tv2.dashboard.component'
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MenubarModule,MenuItem} from 'primeng/primeng';
import {CheckboxModule} from 'primeng/primeng';
import {AccountService} from './tv2/tv2.dashboard.service';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {OverlayPanelModule} from 'primeng/primeng';
import {FieldsetModule} from 'primeng/primeng';
import {MessagesModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    Tv2DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    HttpModule,
    MenubarModule,
    CheckboxModule,
    DataTableModule,
    SharedModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    OverlayPanelModule,
    FieldsetModule,
    MessagesModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
