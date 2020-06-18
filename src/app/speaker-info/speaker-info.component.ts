import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Speaker } from './speaker';
import { RxwebValidators } from '@rxweb/reactive-form-validators';


@Component({
  selector: 'app-speaker-info',
  templateUrl: './speaker-info.component.html',
  styleUrls: ['./speaker-info.component.css']
})
export class SpeakerInfoComponent implements OnInit {

  @Output() onSaving: EventEmitter<string> = new EventEmitter<string>(); 
  speakerForm: FormGroup;
  speaker = new Speaker();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.speakerForm = this.fb.group({
      firstName: ['', RxwebValidators.required({ message: 'Please enter your First Name' })],
      lastName: ['', RxwebValidators.required({ message: 'Please enter your Last Name' })],
      company: ['', RxwebValidators.required({ message: 'Please enter your Company' })],
      address: this.buildAddress(),
      phone: ['', RxwebValidators.required({ message: 'Please enter your Phone number' })],
      email: ['', [RxwebValidators.required({ message: 'Please enter your Email address' }), Validators.email]]
    })
  }

  buildAddress(): FormGroup {
    return this.fb.group({
      streetAddress: ['', Validators.required],
      streetLine: '',
      city: '',
      state: '',
      zip: '',
      country: ''
    });
  }

  onSave() :void{ 
    this.onSaving.emit(this.speakerForm.value);
  }
}
