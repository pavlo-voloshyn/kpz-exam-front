import { InterviewerService } from './../interviewer.service';
import { Interviewer } from './../models/interviewer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interviewer',
  templateUrl: './interviewer.component.html',
  styleUrls: ['./interviewer.component.scss']
})
export class InterviewerComponent implements OnInit {
  data: Interviewer[] = []
  interviewer: Interviewer = {}
  displayedColumns = ['id', 'name', 'surname', 'stack', 'level', 'actions']
  constructor(private interviewerService: InterviewerService) { }

  ngOnInit(): void {
    this.interviewerService.GetAll().subscribe(result => {
      this.data = result as Interviewer[]
    }, error => {
      console.log(error)
    })
  }


  onDelete(id: number) {
    this.interviewerService.Delete(id).subscribe(res => {
      window.location.reload()
    }, error => {
      alert(error.error)
    })
  }

  onUpdate(interviewer: Interviewer) {
    this.interviewerService.Update(interviewer).subscribe(res => {
      window.location.reload()
    }, error => {
      alert(error.error)
    })
  }

  onCreate() {
    this.interviewerService.create(this.interviewer).subscribe(res => {
      this.interviewer = {}
      window.location.reload()
    }, error => {
      alert(error.error)
    })
  }
}
