import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestAPIServiceService {

  private userApiUrl: string
  private licenseApiUrl: string

  constructor(private httpClient: HttpClient) { 
    this.userApiUrl = environment.apiurl + "users";
    this.licenseApiUrl = environment.apiurl + "license";
  }

  getUsers(){
    let httpOptions = {
      headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MTQ1MzY5OTksIm5iZiI6MTYxMjcyMjYwMCwianRpIjoiTWk0eiIsInNjb3BlIjoid3JpdGUifQ.thbR4dBp5C0j0yUKWSf8g9Lue4wx8n1_IQ9LCepDTtM'
      }
    };

    return this.httpClient.get(this.userApiUrl, httpOptions);
  }

  getlicense(shortName: string){
    console.log(shortName);
    let httpOptions = {
      headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MTQ1MzY5OTksIm5iZiI6MTYxMjcyMjYwMCwianRpIjoiTWk0eiIsInNjb3BlIjoid3JpdGUifQ.thbR4dBp5C0j0yUKWSf8g9Lue4wx8n1_IQ9LCepDTtM',
        'Content-Type': 'application/json',
        'shortName': shortName
      }
    };

    return this.httpClient.get(this.licenseApiUrl, httpOptions);
  }
}