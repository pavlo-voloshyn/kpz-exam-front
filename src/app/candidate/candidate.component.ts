import { Candidate } from './../models/candidate';
import { CandidateService } from './../candidate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {
  data: Candidate[] = []
  candidate: Candidate = {}

  displayedColumns = ['id', 'name', 'surname', 'stack', 'level', 'actions']
  constructor(private candidateService: CandidateService) { }

  ngOnInit(): void {
    this.candidateService.GetAll().subscribe(result => {
      this.data = result as Candidate[]
    }, error => {
      console.log(error.error)
    })
  }


  onDelete(id: number) {
    this.candidateService.Delete(id).subscribe(res => {
      window.location.reload()
    }, error => {
      alert(error.error)
    })
  }

  onUpdate(candidate: Candidate) {
    this.candidateService.Update(candidate).subscribe(res => {
      window.location.reload()
    }, error => {
      alert(error.error)
    })
  }

  onCreate() {
    this.candidateService.create(this.candidate).subscribe(res => {
      this.candidate = {}
      window.location.reload()
    }, error => {
      alert(error.error)
    })
  }
}
