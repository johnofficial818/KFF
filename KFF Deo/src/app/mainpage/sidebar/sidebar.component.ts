import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import receipesjson from '../../Hotels/gshotel/receipes.json';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  hotels: Array<string> = []

  // to show the hotels name from jsonobject
  constructor(private hotelway: Router) {
    console.log(receipesjson);
    for (let key in receipesjson) {
      this.hotels.push(key)
    }
  }

  ngOnInit(): void {
  }

  selecthotel(hotelselect: any) {
    console.log(hotelselect)
    this.hotelway.navigate(['mainpage/hotel/', hotelselect])

  }

}
