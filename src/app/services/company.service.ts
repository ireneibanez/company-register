import {
  Injectable
} from "@angular/core";
import {
  HttpClient
} from '@angular/common/http';
import {
  environment
} from 'src/environments/environment';
import {
  CompanyModel
} from 'src/app/models/company.model';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient: HttpClient) {}

  fetchCompanies() {
    return this.httpClient.get(API_URL + '/company')
      .toPromise()
      .then((results:Array<any>) => {
        console.log(results);
        return results.map(item => {
          
          let size: string;
          let country: string;

          switch(item.country) { 
            case '1': { 
              country = 'España';
              break; 
            } 
            case '2': { 
              country = 'Portugal';
              break; 
            } 
            case '3': {
              country = 'Francia';
              break;
            }
            case '4': {
              country = 'Italia';
              break;
            }
            default: { 
              country = 'No registrado';
              break; 
            } 
          } 

          switch(item.size) { 
            case '1': { 
              size = 'Pequeña';
              break; 
            } 
            case '2': { 
              size = 'Mediana';
              break; 
            } 
            case '3': {
              size = 'Grande';
              break;
            }
            default: { 
              size = 'No registrado';
              break; 
            } 
          }

          return new CompanyModel(item.name, item.createDate, size, item.address, country, item.phone, item.description, item.id);
        });
      });
  }

  saveCompany(event: CompanyModel) {
    return this.httpClient.post(API_URL + '/company', event)
    .toPromise();
  }
}
