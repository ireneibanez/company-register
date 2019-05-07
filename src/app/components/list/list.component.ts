import { Component, OnInit, Input } from '@angular/core';
import { CompanyModel } from 'src/app/models/company.model';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() companies: Array<CompanyModel>; 

  ngOnInit() {
  }

}
