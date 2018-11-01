import { Injectable } from '@angular/core';
import { ICompte } from '../domain/icompte';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComptesService {
 URL = 'http://localhost:55484/api/comptes';
   compte: ICompte[] ;
  // = [
  //   {'numero' : 'FFake01', 'proprietaire' : 'prop1', 'solde' : 1000},
  //   {'numero' : 'FFake02', 'proprietaire' : 'prop2', 'solde' : 1200},
  //   {'numero' : 'FFake03', 'proprietaire' : 'prop3', 'solde' : 1300},
  // ];

  constructor(private _http: HttpClient) { }

  getAllComptes(): Observable<ICompte[]> {
    return this._http.get<ICompte[]>(this.URL);
  }
}
