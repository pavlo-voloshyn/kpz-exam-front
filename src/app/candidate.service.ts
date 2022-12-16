import { Candidate } from './models/candidate';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  apiBase = 'https://localhost:7163/api/Candidate/'

  constructor(private http: HttpClient) { }

  public GetAll() {
    return this.http.get(this.apiBase)
  }

  public Update(candidate: Candidate) {
    return this.http.put(this.apiBase, candidate)
  }

  public Delete(id: number) {
    let params = new HttpParams()
    params = params.append('id', id)

    return this.http.delete(this.apiBase, { params })
  }

  public create(candidate: Candidate) {
    return this.http.post(this.apiBase, candidate)
  }
}
