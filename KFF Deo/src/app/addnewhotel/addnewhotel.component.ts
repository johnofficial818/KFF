import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BillService } from '../bill.service';

@Component({
  selector: 'app-addnewhotel',
  templateUrl: './addnewhotel.component.html',
  styleUrls: ['./addnewhotel.component.css']
})
export class AddnewhotelComponent implements OnInit {
  
  dataofreg:any;

value:any=[
  {
    additem:'',
    price:''
  }
]

  constructor(private http:HttpClient , private bills : BillService) { }

  ngOnInit(): void {

this.bills.getdbsave("reghotels").subscribe(data=>{console.log(data)
this.dataofreg=data
})

  }

    // dishes: any = [{
    //     additem: '',
    //     price: ''
    //   }];

    // add(){
    //   this.dishes.push({
    //           id: this.dishes.length + "",
    //           additem: '',
    //           price: ''
    //         });
    // }
// anonymous function
//     add=()=>{
//         this.dishes.push({
//                 id: this.dishes.length + "",
//                 additem: '',
//                 price: ''
//               });
//       }

    // removedish(i:number) {
    //     this.dishes.splice(i);
    //   }

      submit(totalvalue:any){
  console.log(totalvalue)
  this.value=totalvalue
  // this.bills.dbsave(this.value,"value" ).subscribe()
  
  this.bills.getdbsave( "reghotels" ).subscribe(data=>{console.log(data)})
this.bills.patchdbsave({"dishitems":this.value} , "reghotels").subscribe()

  }

}