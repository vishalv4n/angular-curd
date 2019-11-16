import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  employees;
  constructor(public service :DataService) { }

  ngOnInit() {
    this.getdata();
  }
getdata()
{
  this.service.getdata().subscribe((result)=>{
    this.employees=result;
  })
}
delete(id)
{
  this.service.delete(id).subscribe((result)=>{
    this.getdata();
  })
}
}
