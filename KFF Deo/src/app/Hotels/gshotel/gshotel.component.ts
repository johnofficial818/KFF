import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BillService } from 'src/app/bill.service';
import receipesjson from './receipes.json';

@Component({
  selector: 'app-gshotel',
  templateUrl: './gshotel.component.html',
  styleUrls: ['./gshotel.component.css'],
  providers: [BillService]
})

export class GshotelComponent implements OnInit {
  sum: any = 0;
  hotelName = '' as keyof typeof receipesjson
  itemObjects: any = []
  i: any;
  values = '';
  add = 0
  itemarray = [0, 0, 0, 0];

  constructor(private route: ActivatedRoute , private bill:BillService) { }

  ngOnInit() {
    this.route.params.subscribe(parameter => {
      this.hotelName = parameter['param1']
      this.itemObjects = receipesjson[this.hotelName]
      console.log(receipesjson.GShotel[0])

    })


    this.bill.addreceipes().subscribe(data =>{
      console.log(data)
    })

  }

  onKey(value: any, object: any) {
    const id = object.id
    if (this.itemarray[id] > value) {
      this.sum = this.sum - object.price
      console.log(this.itemarray)
    } else {
      this.sum = this.sum + object.price
    }
    this.itemarray[id] = value;
  }

  order() {
    alert("Successfully Ordered")
  }

}
