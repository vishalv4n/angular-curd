import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id;
  emp;
  constructor(public activateroute:ActivatedRoute,
    public service:DataService) {
      activateroute.paramMap.subscribe((params)=>{
        this.id=params.get("id");
        this.service.getdatabyid(this.id).subscribe((res)=>{
          this.emp=res[0];
        })
      })
    }
      update()
      {
        this.service.update(this.emp).subscribe((result)=>{
          console.log(result);
        })
      }
    

  ngOnInit() {
  }
 

}
