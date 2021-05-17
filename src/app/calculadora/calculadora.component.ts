import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CALCULADORAComponent{

  numeroA:number=0;
  numeroB:number=0;
  resultado:number=0;

  sumar(){
    this.resultado= this.numeroA + this.numeroB;
    return this.resultado
  }

  SetnumeroA(event:Event){

    this.numeroA=Number((<HTMLInputElement>event.target).value);
  }

  SetnumeroB(event:Event){

    this.numeroB=Number((<HTMLInputElement>event.target).value);
  }

  multiplicar(){
    this.resultado=this.numeroA*this.numeroB;
  }

  dividir(){
    this.resultado=this.numeroA/this.numeroB;
  }
}
