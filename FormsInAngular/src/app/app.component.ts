import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'FormsInAngular';
  projectForm: FormGroup;

  ngOnInit(): void {
    this.setupForm();
  }

  private setupForm() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('critical')
    });
  }

  onSubmit() {
    console.log(this.projectForm.valid);
    console.log(this.projectForm);
    console.log(this.projectForm.value);
  }

}
