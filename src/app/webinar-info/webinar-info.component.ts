import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { WebinarInfo } from './webinarInfo';
import { RxwebValidators } from '@rxweb/reactive-form-validators';



@Component({
  selector: 'app-webinar-info',
  templateUrl: './webinar-info.component.html',
  styleUrls: ['./webinar-info.component.css']
})
export class WebinarInfoComponent implements OnInit {
  webinarForm: FormGroup
  webinarInfo = new WebinarInfo();
  @Output() onSaving:EventEmitter<string>= new EventEmitter<string>();
  input = {
    audience: [
      { name: 'Agency Head', value: 'Agency Head' },
      { name: 'Manager', value: 'Manager' },
      { name: 'Support Staff', value: 'Support Staff' },
      { name: 'Commissioner / Board Members', value: 'Commissioner / Board Members' },
      { name: 'Administrator', value: 'Administrator' },
      { name: 'Frontline Supervisor', value: 'Frontline Supervisor' },
      { name: ' Service Staff', value: ' Service Staff' },
      { name: 'Program Coordinator', value: 'Program Coordinator' }
    ],
    tracks: [
      { name: 'Leadership', value: 'Leadership' },
      { name: 'Risk Managemet', value: 'Risk Managemet' },
      { name: 'Executive Development', value: 'Executive Development' },
      { name: 'Programming/Special Events', value: 'Programming/Special Events' },
      { name: 'Staff Training', value: 'Staff Training' },
      { name: 'Technical/Maintenance/Safe Operations/Design', value: 'Technical/Maintenance/Safe Operations/Design' },
      { name: 'Aquatic Therapy/Drowning Prevention', value: 'Aquatic Therapy/Drowning Prevention' },
      { name: 'Specialty (Waterpark, Beaches, Military, Fitness, University)', value: 'Specialty (Waterpark, Beaches, Military, Fitness, University)' },
      { name: 'Pool Management Companies', value: 'Pool Management Companies' }
    ]
  }
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.webinarForm = this.fb.group({
      title: ['', [RxwebValidators.required({ message: 'Please enter the Webinar description' }),Validators.maxLength(10)]],
      description: ['', [RxwebValidators.required({ message: 'Describe about your webinar' }),Validators.maxLength(450)]],
      identification: ['', RxwebValidators.required({ message: 'This field is required' })],
      learningObj1: ['', RxwebValidators.required({ message: 'This field is required' })],
      learningObj2: ['', RxwebValidators.required({ message: 'This field is required' })],
      learningObj3: ['', RxwebValidators.required({ message: 'This field is required' })],
      learningObj4: ['', RxwebValidators.required({ message: 'This field is required' })],
      webinarType: ['', RxwebValidators.required({ message: 'Choose the webinar type' })],
      targetAudience: this.fb.array([],Validators.required),
      appTracks: this.fb.array([], Validators.required),
      speakerProgramBefore: ['', RxwebValidators.required({ message: 'This field is required' })],
      speakerExp: ['', RxwebValidators.required({ message: 'This field is required' })],
      speakerBio: ['', RxwebValidators.required({ message: 'This field is required' })],
      speakerIntro: ['', RxwebValidators.required({ message: 'This field is required' })]
    })
  }

  onTargetAudienceChange(e) {
    const targetAudience: FormArray = this.webinarForm.get('targetAudience') as FormArray;
  
    if (e.target.checked) {
      targetAudience.push(new FormControl(e.target.value));
    } 
    else {
      let i: number = 0;
      targetAudience.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          targetAudience.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onTrackChange(e) {
    const appTracks: FormArray = this.webinarForm.get('appTracks') as FormArray;
  
    if (e.target.checked) {
      appTracks.push(new FormControl(e.target.value));
    } 
    else {
      let i: number = 0;
      appTracks.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          appTracks.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  
  onSave():void{
    this.onSaving.emit(this.webinarForm.value);
  }
}
