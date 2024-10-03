import { Component, OnInit } from '@angular/core';
import { Task } from './Models/task.interface';
import { TasksService } from './Services/tasks.service';
import { ApiService } from './Services/api.service';
import { error } from 'console';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private service: TasksService, private serviceAPI: ApiService){
    this.subscription = this.service.taskChanged.subscribe(task =>{
      this.tasks = task
    })
  }

  tasks: Task[] =[]
  tasksUpload: Task[] = []
  private subscription!: Subscription;

  ngOnInit(): void {
      this.tasks = this.service.getTasks()

      this.serviceAPI.loadTask().subscribe(
        data =>{
          if(Array.isArray(data)){
            this.tasksUpload = data
          }
        },
        error =>{
          console.error("Error al cargar las tareas desde la API", error)
        }
      )
  }

  ngOnDestroy():void{
    this.subscription.unsubscribe()
  }

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
