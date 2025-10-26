import { Component } from '@angular/core';

@Component({
  selector: 'app-prathmesh',
  imports: [],
  templateUrl: './prathmesh.html',
  styleUrl: './prathmesh.css',
})
export class Prathmesh
{

  public BatchName = "Angular";

  DemoFun()
  {
    return "Inside DemoFun() ";
  }

  Display()
  {
    console.log("Inside Disdplay");
  }

}
