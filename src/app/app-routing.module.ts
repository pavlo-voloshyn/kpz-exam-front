import { InterviewComponent } from './interview/interview.component';
import { InterviewerComponent } from './interviewer/interviewer.component';
import { CandidateComponent } from './candidate/candidate.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'candidates', component: CandidateComponent },
  {path: 'interviewers', component: InterviewerComponent},
  {path: 'interviews', component: InterviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
