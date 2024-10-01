import { Component } from '@angular/core';
import { Task } from './Models/task.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  tasks: Task[] =[]

    addTask(task: Task): void{
        this.tasks.push(task)
    }
    markTaskCompleted(task:Task): void{
      task.completed = !task.completed
    }

    deleteTask(id:number):void{
      this.tasks = this.tasks.filter((task) => task.id !== id)
    }
}
