import { Interviewer } from './models/interviewer';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterviewerService {
  apiBase = 'https://localhost:7163/api/Interviewer/'

  constructor(private http: HttpClient) { }

  public GetAll() {
    return this.http.get(this.apiBase)
  }

  public Update(interviewer: Interviewer) {
    return this.http.put(this.apiBase, interviewer)
  }

  public Delete(id: number) {
    let params = new HttpParams()
    params = params.append('id', id)

    return this.http.delete(this.apiBase, { params })
  }

  public create(interviewer: Interviewer) {
    return this.http.post(this.apiBase, interviewer)
  }
}
