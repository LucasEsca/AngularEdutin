import { Component } from "@angular/core";

@Component({
    selector : 'app-addTask',
    templateUrl: './add.component.html',
    styleUrl:'./add.component.scss'


})

export class AddComponent {

    numberTask: number = 10
    titleTask: string = ''
    activedButton: boolean = true

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