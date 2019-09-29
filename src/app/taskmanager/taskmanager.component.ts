import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskmanager',
  templateUrl: './taskmanager.component.html',
  styleUrls: ['./taskmanager.component.css']
})
export class TaskmanagerComponent implements OnInit {
tasks:any[]=[];
  constructor() { }

  ngOnInit() {
  }
send(inputTask){
  this.tasks.push(inputTask);
}
delete(i){
  this.tasks.splice(i,1);
}
}
