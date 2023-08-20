import { Component, OnInit } from '@angular/core';
import { BillService } from '../bill.service';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  httpClient: any;
  x: any;
  user: any;

  constructor(private bills: BillService, private routes: Router) { }

  hide = true;

  ngOnInit() {
    this.bills.getdbsave("signup").subscribe((signupdata: any) => {
      console.log(signupdata);
      this.user = signupdata;
    })
  }

  verify(logindata: any) {
    for (let userdata of this.user) {
      if (logindata.email == userdata.email && logindata.password == userdata.password) {
        this.routes.navigate(['/mainpage'])
        alert("successfully logged in")
        break
      } else {
        this.routes.navigate(['/signup'])
      }
    }

  }

}



