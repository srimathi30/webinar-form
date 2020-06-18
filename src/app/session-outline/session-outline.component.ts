import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-session-outline',
  templateUrl: './session-outline.component.html',
  styleUrls: ['./session-outline.component.css']
})
export class SessionOutlineComponent implements OnInit {
  sessionForm:FormGroup;
  @Output() onSaving: EventEmitter<string> = new EventEmitter<string>(); 

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.sessionForm=this.fb.group({
      about:['',RxwebValidators.required({message:'This field is required'})]
    })
  }

  onSave():void{
    this.onSaving.emit(this.sessionForm.value);
  }
}
