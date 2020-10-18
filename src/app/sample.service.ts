import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http: HttpClient) { }

  getMockData(clinicalId) {
    return this.http.get('https://reqres.in/api/users/' + clinicalId);
  }
}
