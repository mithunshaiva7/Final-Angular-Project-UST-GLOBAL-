import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users:any[]=[];
  constructor(private service1:FetchService) { }

  ngOnInit() {
    this.service1.getApi()
    .subscribe(data=>{

    
      this.users=data;}
    )
    }
}
