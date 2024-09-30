import { Component, OnInit } from "@angular/core";
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { Task } from "../../Models/task.interface";

@Component({
    selector : 'app-addTask',
    templateUrl: './add.component.html',
    styleUrl:'./add.component.scss'


})

export class AddComponent implements OnInit {

    constructor(private fb:FormBuilder){}

    form!: FormGroup;
    isActive: boolean=true;
    taskActive!: boolean;
    numberTasks!: number;
    tasks: Task[] =[
    {
        id:1,
        title: 'Tarea1',
        completed: false
    },
    {
        id:2,
        title: 'Tarea2',
        completed: false
    },
    {
        id:3,
        title: 'Tarea3',
        completed: false
    },
    {
        id:4,
        title: 'Tarea4',
        completed: false
    },
    {
        id:5,
        title: 'Tarea5',
        completed: false
    },
    {
        id:1,
        title: 'Tarea1',
        completed: false
    },
    ]

    ngOnInit(): void {
        this.form = this.fb.group({
            title: new FormControl('', [Validators.required, Validators.maxLength(10)])
        })
        
    }

    sendTaskTitle(){
        if(this.form.valid && this.form.get('title')?.value !== ''){
            this.taskActive = false
            console.log(this.form.value.title)
        }else{
            this.taskActive = true
        }
    }

    markTaskCompleted(task: Task) : void{
        task.completed = !task.completed
    }

    delete(id :number): void{
        this.tasks = this.tasks.filter((task) => task.id != id)
        this.numberTasks = this.tasks.length;
    }





    numberTask: number = 3;
    titleTask: string = ''
    activedButton: boolean = true

    sendData(form:NgForm){
        if(form.valid){
            console.log(this.titleTask)
        }
    }

    sendTask(){
        const sixeTitlteTask=this.titleTask.split('')
        if(sixeTitlteTask.length > 0){
            this.activedButton = false
        }else{
            this.activedButton = true
        }
        console.log('Tarea enviada con exito! $(this.titleTask)')
    }
}