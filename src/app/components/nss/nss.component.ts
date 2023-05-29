import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { validexpression } from '../../models/validators.model';
import {NssService} from '../../services/folios/nss.service';
declare var $: any;

@Component({
  selector: 'app-nss',  
  templateUrl: './nss.component.html',
  styleUrls: ['../../app.component.scss']
})
export class NssComponent {
  form = new FormGroup({
    select: new FormControl('0'),
    Nss: new FormControl('',[Validators.required]),
  });
  _datos:[]
  constructor(
    private nssservice: NssService
  ) {
    this._datos = [];
  }
  ngOnInit(): void { 
    this.nssservice.getCatalogo()
    .subscribe(response => {
      this._datos = response.game_indices;
      console.log(this._datos);
    })
  }
  addProductos(title: String, price: string, desc: string, url_im: string, category: string) {
    const _body = {
      "title": title != "" ? title : "",
      "price": price != "" ? price : "",
      "description": desc != "" ? desc : "",
      "image": url_im != "" ? url_im : "",
      "category": category != "" ? category : "",
    }
    this.nssservice.addProcut(_body)
    .subscribe(response =>{
      console.log(response);
    })

  }
}
