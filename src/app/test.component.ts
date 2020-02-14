import { Component, OnInit } from '@angular/core'

@Component({
    selector:'app-test',
    template:`

    <img [src]="imagePath"/>
    <img src="{{imagePath+imageName}}"/><br>

    <button disabled>Click Me</button>
    <button disabled={{isDisabled}}>Click Me</button>
    <button[disabled]="isDisabled">Click Me</button>
    `,
   styleUrls:['./test.component.css']
})

export class TestComponent implements OnInit {

    isDisabled=false;
    imagePath= "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.collegedekhocdn.com%2Fmedia%2Fimg%2Finstitute%2Fcrawled_images%2Flogoiiht.png%3Ftr%3Dh-200%2Cw-300&imgrefurl=https%3A%2F%2Fwww.collegedekho.com%2Fcolleges%2Fpictures-iiht-delhi&tbnid=s9FICksn7IFdfM&vet=12ahUKEwjQsuiaudDnAhVGQ30KHXD7B0sQMygAegUIARDKAQ..i&docid=zvx_IoYZ1hPg1M&w=300&h=200&q=iiht%20images&ved=2ahUKEwjQsuiaudDnAhVGQ30KHXD7B0sQMygAegUIARDKAQ
    imageName= "iiht-logo1.png"
    constructor(){}

    ngOnInit():void{

    }

    }




