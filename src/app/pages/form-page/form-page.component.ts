import { Component } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent {

  errorMessage: string;
  successMessage: string;

  constructor(private companyService: CompanyService) { }

  saveCompany($event) {
    this.errorMessage = null;
    this.successMessage = null;
    this.companyService.saveCompany($event)
    .then(result => {
      this.successMessage = 'Registro realizado correctamente';
    })
    .catch(status => {
      this.errorMessage = 'Hubo un error durante el registro';
    });
  }
}
