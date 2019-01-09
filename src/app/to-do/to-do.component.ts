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

  myCounter: number = 0;

  TaskList: Task[] = [
    {isDone: false, taskName: 'Walk Dog', styleTime: 'taskNotDone', buttonText: 'Done'},
    {isDone: false, taskName: 'Make Bed', styleTime: 'taskNotDone', buttonText: 'Done'},
    {isDone: true, taskName: 'Wake Up', styleTime: 'taskDone', buttonText: 'oops'},
    {isDone: false, taskName: 'Mow Lawn', styleTime: 'taskNotDone', buttonText: 'Done'}
  ];

  DoneChecker(): boolean{
   this.myCounter = 0;

    this.TaskList.forEach(task => {
      if (task.isDone == true)
      {
        this.myCounter ++;
      }
    });

    if(this.myCounter == this.TaskList.length)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  buttonClick(index: number){
    if(this.TaskList[index].isDone == false)
    {
      this.TaskList[index].isDone = true;
      this.TaskList[index].styleTime = 'taskDone'
      this.TaskList[index].buttonText = "oops..."
      if(this.DoneChecker() == true)
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
