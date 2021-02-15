import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { LicenseArray } from '../interfaces/LicenseInterface';
import { User } from '../interfaces/UserInterface';
import { TestAPIServiceService } from '../_services/test-apiservice.service';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  fetchData: boolean = false;
  users: User[];
  license: LicenseArray;


  licenseArrayList: LicenseArray;

  constructor(public testService: TestAPIServiceService) { 
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.fetchData = true
    try {
      this.testService.getUsers().pipe(map(data => {
        const objData = data as User[];
        return objData;
      })).subscribe(data => {
        console.log(data);
        this.fetchData = false;
        this.users = data
      });
    } catch (error) {
      this.fetchData = false;
    }
  }

}
