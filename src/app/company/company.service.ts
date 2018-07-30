import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase/app';

import * as CompanyActions from './../state/company.actions';
import { Company } from './company';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/take';
// import { Action } from '@ngrx/store';
// import { ConnectCompaniesSuccessAction, UpdatedCompanySyncedAction, RemovedCompanySyncedAction } from '../state/company.actions';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  company$: AngularFireObject<any[]>;

  constructor(private db: AngularFireDatabase) {

    this.company$ = this.db.object(`company`);

  }
  ngOnInit() {
  }

  saveCompany(company) {
    Observable.from(this.company$.set(company))
      .then(_ => console.log({ phone: 123 }))
      .catch(error => console.log(error));
  }

  editCompany(company) {
    this.company$.update(company);
  }

  removeCompany(company) {
    this.company$.remove();
  }
}
