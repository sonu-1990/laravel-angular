import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient }    from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Headers,RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  // local Laravel server
  server = 'http://laravel-angular.test/';
  headers:Headers = new Headers();
  options: any;
  constructor(private http:HttpClient) { 
    this.headers.append({
      'Content-Type':'application/json',
      'enctype':'multipart/form-data',
      'X-requested-With':'XMLHttpRequest'
    });
    this.options = new RequestOptions({headers:this.headers});
  }
}
