import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(public http:HttpClient) { }
  getdata()
  {
    return this.http.get("http://localhost:4000/people");
  }
  add(values)
  { 
    return this.http.post("http://localhost:4000/people",values)
  }
  delete(id)
  {
    return this.http.delete("http://localhost:4000/people/" + id)
  }
  getdatabyid(id)
  {
    return this.http.get("http://localhost:4000/people/" + id)
  }
  update(emp)
  {
    return this.http.put("http://localhost:4000/people/"+ emp.id,emp)
  }
}
