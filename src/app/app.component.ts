import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length=0;
  password="";
  includeLetters=false;
  includeNumbers=false;
  includeSymbols=false;
  onChangeUseLetters(){
    this.includeLetters=!this.includeLetters;
  }
  onChangeUseSymbols(){
    this.includeSymbols=!this.includeSymbols;
  }
  onChangeUseNumbers(){
    this.includeNumbers=!this.includeNumbers;
  }
  onChangeLength(value: string){
    const parsedInt = parseInt(value);
    if(!isNaN(parsedInt)){
      this.length=parsedInt;
    }
  }
  onbuttonClick(){
    const letters='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '1234567890';
    const symbols='!@#$%^&*()';
    let validChars='';
    if(this.includeLetters){
      validChars+=letters;
    }
    if(this.includeNumbers){
      validChars+=numbers;
    }
    if(this.includeSymbols){
      validChars+=symbols;
    }
    let generatedPassword='';
    for(let i=0;i<this.length;i++){
      const index = Math.floor(Math.random()*validChars.length);
      generatedPassword+=validChars[index];
    }
    this.password=generatedPassword;
  }
}
