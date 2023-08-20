import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { BillService } from '../bill.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  hide = true;

  submitted = false;

  constructor(private bills: BillService, private Route: Router) { }

  ngOnInit(): void {



  }

  sign(signupdata: any) {
    this.bills.dbsave(signupdata,"signup").subscribe(signupdata)
    this.Route.navigate(['/mainpage'])
    console.log(signupdata)
  }

}
