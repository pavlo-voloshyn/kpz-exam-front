import { Interview } from './models/interview';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {
  apiBase = 'https://localhost:7163/api/Interview/'

  constructor(private http: HttpClient) { }

  public GetAll() {
    return this.http.get(this.apiBase)
  }

  public GetForToday() {
    return this.http.get(this.apiBase + 'today')
  }

  public Delete(id: number) {
    let params = new HttpParams()
    params = params.append('id', id)

    return this.http.delete(this.apiBase, { params })
  }

  public create(interview: Interview) {
    return this.http.post(this.apiBase, interview)
  }
}
