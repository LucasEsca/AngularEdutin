import { Component, OnInit } from "@angular/core";
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";

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
    tasks: any[]=['Tarea1', 'Tarea2', 'Tarea3']

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







    numberTask: number = 10
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