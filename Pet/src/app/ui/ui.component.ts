import { Component } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent {
  public hambre: number
  public felicidad: number
  public higiene: number
  public energia: number

  constructor(){
    this.hambre = 100
    this.felicidad = 100
    this.higiene = 100
    this.energia = 100
  }

}
