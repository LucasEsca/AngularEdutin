import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { Task } from "../../Models/task.interface";

@Component({
    selector : 'app-addTask',
    templateUrl: './add.component.html',
    styleUrl:'./add.component.scss'


})

export class AddComponent implements OnInit {

    @Output() taskAdded: EventEmitter<Task> = new EventEmitter<Task>()

    constructor(private fb:FormBuilder){}

    form!: FormGroup;
    isActive: boolean=true;
    taskActive!: boolean;
    tasks: Task[] =[]

    ngOnInit(): void {
        this.form = this.fb.group({
            title: new FormControl('', [Validators.required, Validators.maxLength(10)])
        })
        
    }

    sendTaskTitle(){
        if(this.form.valid && this.form.get('title')?.value !== ''){
            const newTask: Task ={
                id: Math.floor(Math.random()*1000),
                title: this.form.value.title,
                completed: false
            };
            this.taskAdded.emit(newTask)
            this.form.reset()
        }
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