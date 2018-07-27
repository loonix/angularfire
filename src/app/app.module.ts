import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

const firebaseConfig = {
  apiKey: "AIzaSyCASPlZlMzNedR0w2m913OpCQmMlWFWElI",
  authDomain: "amplified-vine-112019.firebaseapp.com",
  databaseURL: "https://amplified-vine-112019.firebaseio.com",
  projectId: "amplified-vine-112019",
  storageBucket: "amplified-vine-112019.appspot.com",
  messagingSenderId: "533268361339"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
