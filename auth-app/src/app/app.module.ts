import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SessionService } from "./session.service";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
