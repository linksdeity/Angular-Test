import { Component, OnInit } from '@angular/core';
import { Task } from '../../Models/TaskModel';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})



export class ToDoComponent implements OnInit {

  constructor() { }

  done: string = "";

  TaskList: Task[] = [
    {isDone: false, taskName: 'Walk Dog', styleTime: 'taskNotDone', buttonText: 'Done'},
    {isDone: false, taskName: 'Make Bed', styleTime: 'taskNotDone', buttonText: 'Done'},
    {isDone: true, taskName: 'Wake Up', styleTime: 'taskDone', buttonText: 'oops'},
    {isDone: false, taskName: 'Mow Lawn', styleTime: 'taskNotDone', buttonText: 'Done'}
  ];

  buttonClick(index: number){
    if(this.TaskList[index].isDone == false)
    {
      this.TaskList[index].isDone = true;
      this.TaskList[index].styleTime = 'taskDone'
      this.TaskList[index].buttonText = "oops..."
      if(this.TaskList[0].isDone == true && this.TaskList[1].isDone == true && this.TaskList[2].isDone == true && this.TaskList[3].isDone == true)
      {
        this.done = "ALL DONE!"
      }
    }
    else
    {
      this.TaskList[index].isDone = false;
      this.TaskList[index].styleTime = 'taskNotDone'
      this.TaskList[index].buttonText = "Done"
      this.done = "";
    }
  }

  ngOnInit() {
  }

}
