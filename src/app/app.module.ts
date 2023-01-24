import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionListComponent } from './question/question-list.component';
import { NgbModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { QuestionCardComponent } from './question/question-card/question-card.component';
import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { BookmarkCheck, CheckCircle } from 'ng-bootstrap-icons/icons';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { NgxDomConfettiModule } from 'ngx-dom-confetti';

const icons = {
  BookmarkCheck,
  CheckCircle,
};

@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    QuestionCardComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BootstrapIconsModule.pick(icons),
    NgbProgressbarModule,
    NgxDomConfettiModule
  ],
  exports: [BootstrapIconsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
