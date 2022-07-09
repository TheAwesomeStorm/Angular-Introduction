import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss']
})
export class PhotoFormComponent implements OnInit {

  photoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.photoForm = new FormGroup({
      file: new FormControl(''),
      description: new FormControl(''),
      allowComments: new FormControl(true)
    });
  }

  ngOnInit(): void {
    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(15)],
      allowComments: [true]
    });
  }

  Validate(name: string, errorName: string): boolean {
    const nameHasError = this.photoForm.get(name)?.hasError(errorName)
    if (nameHasError) { return nameHasError} else { return false }
  }

}
