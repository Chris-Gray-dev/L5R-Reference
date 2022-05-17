import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Technique } from '../Models/technique.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class KataService {
  private apiEndpoint: string = 'Kata/';
  private fullpath: string;
  constructor(private http: HttpClient) {
    this.fullpath = environment.apiURL + this.apiEndpoint;
  }

  getKata(): Observable<Technique[]> {
    return this.http.get<Technique[]>(this.fullpath);
  }
}
