import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {

  company$: AngularFireObject<any[]>;


  constructor(private CompanyService: CompanyService) {

    this.company$ = this.CompanyService.company$;

  }
  ngOnInit() {
  }

  saveCompany(company) {
    this.CompanyService.saveCompany(company);
  }

}
