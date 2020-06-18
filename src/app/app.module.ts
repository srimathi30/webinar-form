import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import {  RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { SpeakerInfoComponent } from './speaker-info/speaker-info.component';
import { WebinarInfoComponent } from './webinar-info/webinar-info.component';
import { SessionOutlineComponent } from './session-outline/session-outline.component';
import { SpeakerTermsComponent } from './speaker-terms/speaker-terms.component';


@NgModule({
  declarations: [
    AppComponent,
    SpeakerInfoComponent,
    WebinarInfoComponent,
    SessionOutlineComponent,
    SpeakerTermsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
