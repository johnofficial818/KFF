import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todaysoffer',
  templateUrl: './todaysoffer.component.html',
  styleUrls: ['./todaysoffer.component.css']
})
export class TodaysofferComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dashboard = [
    { "title": "Morning Offers", "cols": 3, "rows": 2,"width":"900px", "content": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6515113.jpg " ,"dialog":"chicken wings"},
    { "title": "Lunch Offers", "cols": 1, "rows": 2, "content": "https://lh6.googleusercontent.com/proxy/2HmGsFT62a_I4tXtmg93505t4m9j2ZyqBIWWGupBkLrfKMV9SO138I0ROTTBGgvq_WsJr3EANGovv_ENRnBVmBWx2CRKVwY812kl2ehM8xlL=s0-d","dialog":"Briyani"},
    { "title": "Dinner Offers", "cols": 2, "rows": 2, "content": "https://1.bp.blogspot.com/-ISCogdgwZjI/XpOq69Ta40I/AAAAAAAAQKI/PBSNl4nPPm0XPbeObCy4KB_YxvHKpQ0TQCNcBGAsYHQ/s1600/Egg_Kothu%2BParotta.JPG","dialog":"Kothu Parota"},
 
  ]

}
