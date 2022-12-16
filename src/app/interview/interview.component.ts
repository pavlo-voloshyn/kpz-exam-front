import { InterviewService } from './../interview.service';
import { Interview } from './../models/interview';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss']
})
export class InterviewComponent implements OnInit {
  interview: Interview = {}
  data: Interview[] = []
  isToday = false;

  displayedColumns = ['id', 'startDate', 'endDate', 'candidate', 'interviewer', 'actions']

  constructor(private interviewService: InterviewService) { }

  ngOnInit(): void {
    this.isToday = localStorage.getItem("isToday") === "true"
    if (this.isToday) {
      this.interviewService.GetForToday().subscribe(result => {
        this.data = result as Interview[]
      }, error => {
        console.log(error.error)
      })
    } else {
      this.interviewService.GetAll().subscribe(result => {
        this.data = result as Interview[]
      }, error => {
        console.log(error.error)
      })
    }
  }

  onCreate() {
    this.interviewService.create(this.interview).subscribe(res => {
      this.interview = {}
      window.location.reload()
    }, error => {
      alert(error.error)
    })
  }

  onDelete(id: number) {
    this.interviewService.Delete(id).subscribe(res => {
      window.location.reload()
    }, error => {
      alert(error.error)
    })
  }

  onUpdateToday() {
    localStorage.setItem("isToday", this.isToday.toString())
    window.location.reload()
  }
}
