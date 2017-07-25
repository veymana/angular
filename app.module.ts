import { UserService } from './user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';
import { SystemErrorHandler } from './common/system-error'
import { HttpModule } from '@angular/http'
import { ReactiveFormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [UserService,
    { provide: ErrorHandler, useClass: SystemErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
