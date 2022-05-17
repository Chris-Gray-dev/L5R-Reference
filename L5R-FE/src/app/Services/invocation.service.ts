import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Technique } from '../Models/technique.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InvocationService {
  private apiEndpoint: string = 'Invocations/';
  private fullpath: string;
  constructor(private http: HttpClient) {
    this.fullpath = environment.apiURL + this.apiEndpoint;
  }

  getInvocations(): Observable<Technique[]> {
    return this.http.get<Technique[]>(this.fullpath);
  }
}
