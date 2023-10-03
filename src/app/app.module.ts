import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HaederComponent } from './haeder/haeder.component';
import { EducationWorkComponent } from './education-work/education-work.component';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';
import { SkillsComponent } from './skills/skills.component';
import { LanguagesComponent } from './languages/languages.component';
import { CertificatesComponent } from './certificates/certificates.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HaederComponent,
    EducationWorkComponent,
    PersonalProjectsComponent,
    SkillsComponent,
    LanguagesComponent,
    CertificatesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
