import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule ,Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FeaturesComponent } from './components/features/features.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { PricetableComponent } from './components/pricetable/pricetable.component';
import { OurteamComponent } from './components/ourteam/ourteam.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { OurskillsComponent } from './components/ourskills/ourskills.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { OurclientsComponent } from './components/ourclients/ourclients.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    AboutUsComponent,
    FeaturesComponent,
    TestimonialsComponent,
    PricetableComponent,
    OurteamComponent,
    SubscribeComponent,
    StatisticsComponent,
    OurskillsComponent,
    ContactusComponent,
    OurclientsComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
