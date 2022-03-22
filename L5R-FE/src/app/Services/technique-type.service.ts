import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TechniqueTypeService {
  private apiEndpoint: string = 'TechniqueTypes/';
  private fullpath: string;

  constructor(private http: HttpClient) {
    this.fullpath = environment.apiURL + this.apiEndpoint;
  }

  getTechniqueTypes(): Observable<{ [key: number]: string }> {
    return this.http.get<{ [key: number]: string }>(this.fullpath);
  }
}
