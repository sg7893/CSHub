import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ParallaxScrollModule } from 'ng2-parallaxscroll';
import { HeadroomModule } from '@ctrl/ngx-headroom';
import { CountdownModule } from 'ngx-countdown';

import { QuillModule } from 'ngx-quill'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavMenuComponent } from './side-nav-menu/side-nav-menu.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';



import { 
  MatProgressSpinnerModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatTabsModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatCheckboxModule,
  MatInputModule,
   MatButtonModule, 
   MatSelectModule, 
   MatIconModule,  
   MatSidenavModule, 
   MatDialogModule,
   MatTableModule,
  } from '@angular/material';
  
   import { DateTimePickerModule} from 'ngx-datetime-picker';

   
import { AuthService } from './services/auth.service'



import { NotificationComponent } from './notification/notification.component';
import { NotifDialogPopupComponent } from './notif-dialog-popup/notif-dialog-popup.component';
import { TimerComponent } from './timer/timer.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { SpotifyPopupComponent } from './spotify-popup/spotify-popup.component';
import { StoreModule } from '@ngrx/store';
import { UserReducer } from './store/reducers/user.reducer';
import { LoginHomeComponent } from './login-home/login-home.component';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './store/effects/users.effects';
import { TimerIconComponent } from './timer-icon/timer-icon.component';
import { CountdownConfig } from 'ngx-countdown/src/countdown.config';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';


import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import { EditorComponent } from './editor/editor.component';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("921142445428-ep65ocgbr23dedjgpiuv51hdse5o53hv.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("2426554690949520")
  }
]);
 
export function provideConfig() {
  return config;
}
 

@NgModule({
  declarations: [
    AppComponent,
    SideNavMenuComponent,
    HomeComponent,
    SignupComponent,
    NavMenuComponent,
    LoginComponent,
    AboutComponent,
    NotificationComponent,
    NotifDialogPopupComponent,
    TimerComponent,
    SpotifyComponent,
    SpotifyPopupComponent,
    LoginHomeComponent,
    TimerIconComponent,
    LoadingSpinnerComponent,
    EditorComponent,
  ],
  imports: [
    QuillModule.forRoot(),
    SocialLoginModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    CountdownModule ,
    CommonModule,
    EffectsModule.forRoot([UsersEffects]),
    StoreModule.forRoot({
      user: UserReducer
    }),
    MatSnackBarModule,
    MatTableModule,
    MatTabsModule,
    DateTimePickerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDialogModule,
    HeadroomModule,
    MatSidenavModule,
    ParallaxScrollModule,
    HttpClientModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
    MatInputModule, 
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,    
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    AuthService
  ],
  bootstrap: [AppComponent],
  entryComponents:[NotifDialogPopupComponent,],
})
export class AppModule { }
