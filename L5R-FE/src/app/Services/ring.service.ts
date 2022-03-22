import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RingService {
  private apiEndpoint: string = 'Rings/';
  private fullpath: string;

  constructor(private http: HttpClient) {
    this.fullpath = environment.apiURL + this.apiEndpoint;
  }

  getRings(): Observable<{ [key: number]: string }> {
    return this.http.get<{ [key: number]: string }>(this.fullpath);
  }
}
