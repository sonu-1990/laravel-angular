import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient }    from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  // local Laravel server
  server = 'http://laravel-angular.test/';
  headers:HttpHeaders = new HttpHeaders();
  options: any;
  constructor(private http:HttpClient) { 
    this.headers.append(
      'Content-Type','application/json'
    );
    this.headers.append(
      'enctype','multipart/form-data'
    );
    this.headers.append(
      'X-requested-With','XMLHttpRequest'
    );
  }
}
