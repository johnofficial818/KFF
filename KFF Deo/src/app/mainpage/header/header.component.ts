import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() menuChange: any = new EventEmitter();

  constructor(private route: Router) { }
  ngOnInit(): void {
  }
  login() {
    this.route.navigate(['login'])
  }
  update() {
    this.menuChange.emit();


    
  }
}
