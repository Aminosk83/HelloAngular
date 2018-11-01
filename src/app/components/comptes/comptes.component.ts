import { Component, OnInit } from '@angular/core';
import { ICompte } from 'src/app/domain/icompte';
import { ComptesService } from 'src/app/services/comptes.service';

@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.component.html',
  styleUrls: ['./comptes.component.css']
})
export class ComptesComponent implements OnInit {

data: ICompte[];
  constructor(private _service: ComptesService) { }

  ngOnInit() {
    this._service.getAllComptes().subscribe(reponse => this.data = reponse,
      erreur => console.log('Attention, il y a eu erreur' + erreur));
  }

}
