import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Car } from '../car';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-record-handler',
  templateUrl: './record-handler.component.html',
  styleUrls: ['./record-handler.component.scss']
})
export class RecordHandlerComponent implements OnInit {

  cars: Car[];
  id: number;

  constructor() { }

  ngOnInit() {
    this.id=1;
    this.cars=[]
  }

  onSubmit(carForm: NgForm): void {

    //console.log(carForm.value);
    this.cars.push({plateNumber:carForm.value.plateNumber, ownerName:carForm.value.ownerName, email:carForm.value.email, serialId:this.id});
    this.id++;
    //console.log(this.cars);
  }

  deleteRecord(serialId) {
    for(var i = 0; i < this.cars.length; i++) {
      if(this.cars[i]["serialId"] == serialId){
        this.cars.splice(i,1);
      }
    }
  }
}
