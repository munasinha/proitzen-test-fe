import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  BASE_URL: string = `${environment.baseUrl}/api`;

  constructor(private http: HttpClient) { }


  getAllEmployees() {
    return this.http
      .get(`${this.BASE_URL}/employees`)
      .pipe(map((res: any) => res.data));
  }
}
