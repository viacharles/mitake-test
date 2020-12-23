import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './modules/shared/components/nav/nav.component';
import { LayoutComponent } from './modules/layout/layout.component';
import { FooterComponent } from './modules/shared/components/footer/footer.component';
import { ShareholdersMeetingComponent } from './modules/main/pages/shareholders-meeting/shareholders-meeting.component';
import { OtherLinkComponent } from './modules/shared/components/other-link/other-link.component';
import { LoginCardComponent } from './modules/shared/components/login-card/login-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LayoutComponent,
    FooterComponent,
    ShareholdersMeetingComponent,
    OtherLinkComponent,
    LoginCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
