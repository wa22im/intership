import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { NavBarComponent } from './layouts/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_BE } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { DataComponent } from './pages/data/data.component';
import { SubmitFormComponent } from './pages/data/components/submit-form/submit-form.component';
import { NzInputModule } from 'ng-zorro-antd/input';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import {  AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from 'src/environments/environment';
import { FirebaseService } from './services/firebase.service';
import { PayButtonComponent } from './pages/home/pay-button/pay-button.component';

registerLocaleData(fr);


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    DataComponent,
    SubmitFormComponent,
    PayButtonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzDropDownModule,
    NzMenuModule,
    NzButtonModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
