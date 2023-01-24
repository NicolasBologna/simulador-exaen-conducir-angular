import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './common/auth-guard';
import { QuestionListComponent } from './question/question-list.component';

const routes: Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'questions', component: QuestionListComponent, canActivate: [AuthGuard] },
  { path: '', component: QuestionListComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
