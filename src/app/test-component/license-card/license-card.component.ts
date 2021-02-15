import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { LicenseArray } from 'src/app/interfaces/LicenseInterface';
import { TestAPIServiceService } from 'src/app/_services/test-apiservice.service';

@Component({
  selector: 'app-license-card',
  templateUrl: './license-card.component.html',
  styleUrls: ['./license-card.component.css']
})
export class LicenseCardComponent implements OnInit {

  license: LicenseArray
  fetchData: boolean = false;
  shortName: string;
  errorFlag: boolean;
  errorMessage: string;
  
  constructor(private testService: TestAPIServiceService) { }

  ngOnInit(): void {
  }

  getLicense() {
    this.fetchData = true;
    this.testService.getlicense(this.shortName).pipe(map(data => {
      // console.log(data); 
      const objData = data as LicenseArray;
      var licenseArray = objData.text.match(/[^\r\n]+/g);

      objData.licenseArrayList = licenseArray;
      
      return objData;
    })).subscribe(data => {
      this.fetchData = false;
      this.errorFlag = false;
      this.license = data;
    },
    error => {
      console.log(error);
      const errorFinal = error as Error;
      this.errorFlag = true;
      this.errorMessage = errorFinal.message;
      console.log(errorFinal.name);
      console.log(errorFinal.message);
    });
  }

}
