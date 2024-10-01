import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../Models/task.interface';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.scss'
})
export class ListTaskComponent {
 
  @Input ('listTasks') tasks: Task[] = []
  @Output () taskCompleted: EventEmitter<Task> = new EventEmitter<Task>()
  @Output () taskDeleted: EventEmitter<number> = new EventEmitter<number>()

  numberTasks!: number;

  completeTask(task: Task) : void{
    this.taskCompleted.emit(task)
}

deleteTask(id :number): void{
    this.taskDeleted.emit(id)
}
}
