import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './common/auth-guard';
import { QuestionListComponent } from './question/question-list.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'login', component: AuthComponent },
  {
    path: 'questions',
    component: QuestionListComponent,
    canActivate: [AuthGuard],
  },
  { path: 'create-account', component: SignupComponent },
  { path: '', component: QuestionListComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
