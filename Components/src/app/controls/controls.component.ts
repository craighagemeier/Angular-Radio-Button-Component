import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  controlsFormGroup: FormGroup;
  radioExample: FormControl = new FormControl('wine');
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.controlsFormGroup = this.fb.group({
      radioExample: this.radioExample
    })

    this.controlsFormGroup.get('radioExample').valueChanges.subscribe(value => console.log(value));
  }

save(): void {
  let radioValue = this.controlsFormGroup.get('radioExample').value;
  console.log(radioValue);
}

}
