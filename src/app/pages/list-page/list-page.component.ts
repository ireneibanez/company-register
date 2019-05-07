import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { CompanyModel } from 'src/app/models/company.model';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  companies: Array<CompanyModel> = [];
  errorMessage: string;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.fetchCompanies()
  }

  fetchCompanies() {
    this.errorMessage = null;
    this.companyService.fetchCompanies()
    .then((results:Array<CompanyModel>) => {
      this.companies = results;
    })
    .catch(status => {
      this.errorMessage = status.error;
    })
    
  }
}
