import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'raytex-challenge-one';

  equation:any = '';
  Enter(value:string){
    this.equation = this.equation + value;
  }
  Calculate(){
    
    for (let i=0; i<this.equation.length; i++)
    {
      let f = this.equation[i];
      let c = this.equation[i];
      let n = this.equation[i+1];
      if(i == 0)
      {
        if(f == "+" || f == "-" || f == "*" || f == "/" || f == "%")
        {
          alert("Invalid Input");
          this.Clear()
          break;
        }

      }
      else if(c == "+" || c == "-" || c == "*" || c == "/" || c == "%")
      {
        if( n == "+" || n == "-" || n == "*" || n == "/" || n == "%")
        {
          alert("Invalid Input");
          this.Clear()
          break;
        }
      }
      else{
        // using eval() function :
          this.equation = eval(this.equation);
        // using mathematical functions

      }

      
      
    }



  }
  Clear(){
    this.equation = '';
  }
}
