
import 'hammerjs';
import 'firebase/storage'; // global firebase storage js;
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
// import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
// import { environment } from '../environments/environment.prod';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { CompanyService } from './company/company.service';
// import { CompanyListComponent } from './company/company-list/company-list.component';
// import { ContactService } from './contact/contact.service';
// import { ContactEditComponent } from './contact/contact-edit/contact-edit.component';
// import { ContactListComponent } from './contact/contact-list/contact-list.component';
// import { AuthService } from './auth/auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
// import { HomeComponent } from './home/home.component';
// import { AuthGuard } from './auth/auth.guard';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatToolbarModule,
  MatProgressBarModule,
  MatSelectModule
} from '@angular/material';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';

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
    AppComponent,
    CompanyEditComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatSelectModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [
    CompanyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
