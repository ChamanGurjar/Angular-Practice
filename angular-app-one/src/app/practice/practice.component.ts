import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  @Input() name: String

  constructor() { }

  ngOnInit(): void {
  }

  printName() {
    if (this.name) {
      alert("Your name is => " + this.name)
    } else {
      alert("Please enter name first")
    }
  }

}
