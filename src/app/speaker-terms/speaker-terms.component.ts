import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';


@Component({
  selector: 'app-speaker-terms',
  templateUrl: './speaker-terms.component.html',
  styleUrls: ['./speaker-terms.component.css']
})
export class SpeakerTermsComponent implements OnInit {
  speakerTermsForm:FormGroup;
  @Output() onSaving: EventEmitter<string>= new EventEmitter<string>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.speakerTermsForm=this.fb.group({
     signature:['',RxwebValidators.required({ message: 'This field is required' })],
     email:['',[RxwebValidators.required({ message: 'This field is required' }),Validators.email]],
     twitterId:['',RxwebValidators.required({ message: 'This field is required' })],
     jobTitle:['',RxwebValidators.required({ message: 'This field is required' })],
     photo : [null],
    //  source :[Validators.required]
    })
  }

  onFileChange(event) {
  
    if (event.target.files.length > 0) {
      const photo = event.target.files[0];
      this.speakerTermsForm.patchValue({
        // source: photo
      });
    }
  }
  onSave():void{
    this.onSaving.emit(this.speakerTermsForm.value)
  }
}
