import { Component } from '@angular/core';

@Component({
  selector: 'app-prathmesh-component',
  imports: [],
  templateUrl: './prathmesh-component.html',
  styleUrl: './prathmesh-component.css',
})
export class PrathmeshComponent 
{
  public Information : string = " ";

  public ButtonEven()
  {
    console.log("Click me Button Pressed..!");
  }

  public AngularEvent()
  {
    this.Information = "Angular Button Pressed..!";
  }

  public PythonEvent(Value : any)
  {
    console.log(Value);
  }
}
