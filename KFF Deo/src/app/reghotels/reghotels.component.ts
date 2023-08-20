import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BillService } from '../bill.service';
import { SignupComponent } from '../signup/signup.component';


@Component({
  selector: 'app-reghotels',
  templateUrl: './reghotels.component.html',
  styleUrls: ['./reghotels.component.css']
})
export class ReghotelsComponent implements OnInit {



  hotelregistration: any = [
    {
      hotelname: "",
      email: "",
      password: "",
      owner: "",
      location: "",
      district: "",
      state: "",
      mobile: ""
    }
  ]

  hide = true

  constructor(private routes: Router, private bills: BillService) {
  }

  ngOnInit(): void {
    this.bills.getdbsave("reghotels").subscribe(data => {
      console.log(data)
      this.dataget = data

    });
  }

  hotelreg(hoteldetail: any) {
    console.log(this.hotelregistration)
    this.hotelregistration = hoteldetail
    this.hotelregistration.dishitems = []
    this.bills.dbsave(this.hotelregistration, "reghotels").subscribe()
    this.routes.navigate(['/addnewhotel'])
    console.log(this.hotelregistration)
  }

  dataget: any;

  hotellogin(hotellogindetail: any) {
    console.log(hotellogindetail)
    console.log(this.dataget)

    for (let value of this.dataget) {
      console.log(value)
      
      if (hotellogindetail.email == value.email && hotellogindetail.password == value.password) {     
        this.routes.navigate(['/addnewhotel'])
        alert("success")
        break
      } else{
        alert("check mail id and password")
      }
      
    }
     
  }
}



