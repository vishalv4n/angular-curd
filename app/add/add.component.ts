import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
value;
  constructor(public service:DataService) { }

  ngOnInit() {
  }
  add(myform)
  {
    this.value=myform.form.value;
    console.log(this.value)
   this.service.add(this.value).subscribe((result)=>{
      console.log(result);
    })
  }
  

}
