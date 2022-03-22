import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class TechniqueService {
  private apiURL: string = 'https://localhost:7041/api/Techniques'; //TODO: Break this up and put into settings
  constructor(private http: HttpClient) {}

  getTechniques(): Observable<object> {
    return this.http.get<object>(this.apiURL);
  }
}
