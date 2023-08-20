import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BillService {
  get(arg0: string) {
    throw new Error('Method not implemented.');
  }

  receipesurl:string= 'http://localhost:4200/app/Hotels/gshotel/receipes.json'     

    url: string = "http://localhost:3000/";


  constructor(private http: HttpClient) {
  }

  dbsave( userdatastore: any , resource:string ) {
    return this.http.post(this.url + resource , userdatastore)
  }

  getdbsave( resource:string ) {
    return this.http.get(this.url + resource);
  }

  patchdbsave( userdata:any , resource:string ){
return this.http.patch(this.url + resource , userdata)
  }

  addreceipes(){
    return this.http.get(this.receipesurl)
  }

}









