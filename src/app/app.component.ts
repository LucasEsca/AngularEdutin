import { Component, OnInit } from '@angular/core';
import { Task } from './Models/task.interface';
import { TasksService } from './Services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private service: TasksService){}

  ngOnInit(): void {
      this.tasks = this.service.getTasks()
  }

  tasks: Task[] =[]

    addTask(task: Task): void{
        this.service.addTask(task)
    }
    markTaskCompleted(task:Task): void{
      this.service.completeTask(task.id)
    }

    deleteTask(id:number):void{
      this.service.deleteTask(id)
    }
}
