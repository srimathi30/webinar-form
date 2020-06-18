import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebinarForm';
  submission:any[]=[];
  submit:any[]=[];
  // parentForm:FormGroup;
  constructor(private router: Router){}
  onSave(message:string):void{
    this.submission.push(message);
    
  }
  onSubmit():void{
    console.log(this.submission);
    this.router.navigate(['/final']);
  }
}
