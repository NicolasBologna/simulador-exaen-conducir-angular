import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionListComponent } from './question/question-list.component';
import { NgbModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { QuestionCardComponent } from './question/question-card/question-card.component';
import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { BookmarkCheck, CheckCircle, Linkedin } from 'ng-bootstrap-icons/icons';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { NgxDomConfettiModule } from 'ngx-dom-confetti';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import {
  ToastrModule,
  ToastNoAnimation,
  ToastNoAnimationModule,
} from 'ngx-toastr';

const icons = {
  BookmarkCheck,
  CheckCircle,
  Linkedin,
};

@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    QuestionCardComponent,
    AuthComponent,
    FooterComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BootstrapIconsModule.pick(icons),
    NgbProgressbarModule,
    NgxDomConfettiModule,
    ToastrModule.forRoot(),
  ],
  exports: [BootstrapIconsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
